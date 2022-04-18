import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColors, getColorsByIds, updateColor } from "../../core/store/color";
import Color from "../../core/components/color";
import Table from "../../core/components/table";
import Modal from "../../core/components/modal";
import FormColors from "./formColors";

const ColorsList = () => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [editColorId, setEditColorId] = useState(null);
    const [submit, setSubmit] = useState(false);

    const colors = useSelector(getColors());
    const color = useSelector(getColorsByIds(editColorId));

    const onSort = () => {};
    const selectedSort = {};

    const handleClose = () => {
        setEdit(false);
        setEditColorId(null);
    };

    const handleSuccess = () => {
        setSubmit(true);
    };

    const handleSubmit = (data) => {
        dispatch(updateColor(editColorId, data));
        setEditColorId(null);
        setEdit(false);
        setSubmit(false);
    };

    const columns = {
        image: {
            name: "id",
            component: (colors) => <div>{colors._id}</div>
        },
        name: {
            name: "Имя",
            component: (colors) => <div>{colors.name}</div>
        },
        color: {
            name: "Цвет",
            component: (colors) => (
                <div className="td-color">
                    <Color id={colors._id} />
                </div>
            )
        },
        delete: {
            name: "Действия",
            component: (colors) => (
                <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <button
                            className="btn btn-delete"
                            type="button"
                            onClick={() => {}}
                        >
                            <span className="material-icons-sharp">delete</span>
                        </button>
                    </div>
                    <div className="text-center">
                        <button
                            className="btn btn-edit"
                            type="button"
                            onClick={() => {
                                setEdit(true);
                                setEditColorId(colors._id);
                            }}
                        >
                            <span className="material-icons-sharp">edit</span>
                        </button>
                    </div>
                </div>
            )
        }
    };
    return (
        <div className="colors-table">
            <h2>Colors</h2>
            <Table
                onSort={onSort}
                selectedSort={selectedSort}
                columns={columns}
                data={colors}
            />
            <Modal open={edit} onClose={handleClose} onSuccess={handleSuccess}>
                <div className="modal-header">
                    <h2>Изменить цвет</h2>
                </div>
                <div className="modal-body">
                    <FormColors
                        color={color}
                        submit={submit}
                        onSubmit={handleSubmit}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default ColorsList;
