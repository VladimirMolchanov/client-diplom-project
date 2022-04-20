import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    countedProduct,
    deleteBasketProduct,
    getBasket
} from "../../core/store/basket";

const Basket = () => {
    const dispatch = useDispatch();
    const basket = useSelector(getBasket());
    const totalPrice = basket.reduce(
        (price, product) => price + product.price * product.count,
        0
    );
    const handleDelete = (id) => {
        dispatch(deleteBasketProduct(id));
    };

    const handleChange = ({ target }) => {
        dispatch(countedProduct({ _id: target.name, value: target.value }));
    };

    return (
        <section className="basket section basket__page">
            <div className="basket__container container">
                <h2 className="section__title section__title-gradient text-left">
                    Корзина
                </h2>

                {basket.length > 0 ? (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {basket &&
                                    basket.map((product) => (
                                        <tr key={product._id}>
                                            <td>
                                                <div className="cart__info">
                                                    <img
                                                        src="http://localhost:8080/assets/image/BeatsStudio3Wireless_Blue.png"
                                                        alt=""
                                                    />
                                                    <div>
                                                        <p>{product.name}</p>
                                                        <small>
                                                            Price: $
                                                            {product.price}
                                                        </small>
                                                        <br />
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                handleDelete(
                                                                    product._id
                                                                );
                                                            }}
                                                            className="button button--flex"
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    value={product.count}
                                                    name={product._id}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td>
                                                ${product.count * product.price}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

                        <div className="total__price">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>SubTotal</td>
                                        <td>$200.00</td>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <td>$35.00</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>${totalPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    "Empty cart"
                )}
            </div>
        </section>
    );
};

export default Basket;
