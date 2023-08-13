import React from "react"

const NavItem = (props) => {
    return (
        <div style={{ width: "100px", display: "flex", alignItems: "center", cursor: "pointer" }}>
            <span>
                {props.icon}
            </span>
            <span className="cart-item-span">
                {props.span}
            </span>
        </div>)
}

export default NavItem