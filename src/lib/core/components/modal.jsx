import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ open, onClose, onSuccess, children }) => {
    const [style, setStyle] = useState({
        display: "none"
    });
    const [id] = useState(Math.random().toString());
    // useEffect(() => {
    //     const modalBackdrop = document.querySelector(".modal-backdrop");
    //     if (!modalBackdrop) {
    //         const modalBackdrop = document.createElement("div");
    //         modalBackdrop.classList.add("modal-backdrop", "fade");
    //         document.body.append(modalBackdrop);
    //     }
    //     return () => {
    //         if (modalBackdrop) {
    //             modalBackdrop.remove();
    //         }
    //     };
    // }, []);

    useEffect(() => {
        if (open) {
            setStyle({});
            const modalBackdrop = document.createElement("div");
            modalBackdrop.classList.add("modal-backdrop", "fade");
            document.body.append(modalBackdrop);
            setTimeout(() => {
                modalBackdrop.classList.add("show");
                document.getElementById(id).classList.add("show");
            }, 10);
        } else {
            const modalBackdrop = document.querySelector(".modal-backdrop");
            if (modalBackdrop) {
                modalBackdrop.classList.remove("show");
                document.getElementById(id).classList.remove("show");
                setTimeout(() => {
                    modalBackdrop.remove();
                    setStyle({
                        display: "none"
                    });
                }, 150);
            }
        }
    }, [open]);

    return (
        <div id={id} className="modal fade" style={style}>
            <div className="modal-dialog">
                <div className="modal-content">
                    {children}
                    <div className="modal-footer">
                        <button type="button" onClick={onClose}>
                            Отмена
                        </button>
                        <button type="button" onClick={onSuccess}>
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Modal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onSuccess: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default Modal;
