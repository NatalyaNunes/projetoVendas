import React from "react";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
    return(
        <div style={{ display: 'flex' }}>
            <SideBar/>
            <div style={{ marginleft: '200px', padding:'20px', width:'100%' }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;