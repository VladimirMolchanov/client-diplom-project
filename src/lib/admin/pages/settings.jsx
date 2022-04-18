import React from "react";
import ColorsList from "../components/colorsList";

const Settings = () => {
    return (
        <>
            <div className="main-header">
                <h1>Настройки</h1>
            </div>
            <div className="main-body">
                <ColorsList />
            </div>
        </>
    );
};

export default Settings;
