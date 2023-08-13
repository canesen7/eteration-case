import { Col, Tooltip } from "antd"
import React from "react"
import { NavLink } from "react-router-dom"

const Item = (props) => {
    // Adds item to cart, if item already in cart just increase their count.
    const addItemToCart = () => {
        let addedItem = {
            id: props.item.id,
            name: props.item.name,
            cost: props.item.price,
            count: 1
        }

        let cartItems = [...props.cart]
        let cartItem = cartItems.find(cartItem => addedItem.id === cartItem.id)
        let isCartItemAvailableAtStorage = cartItem ? true : false

        if (isCartItemAvailableAtStorage) {
            cartItem.count = cartItem.count + 1
        } else {
            cartItems.push(addedItem)
        }

        props.setCart(cartItems)
    }

    return (
        <Col span={6}>
            <div className={"item-container"}>
                <NavLink to={props.item.id}>
                    <div className="display-flex" style={{ justifyContent: "center", width: "100%", marginTop: "5px" }}>
                        <img src={props.item.image} alt={"item"} style={{ width: "90%", height: "80px", objectFit: "cover" }} />
                    </div>
                    <div className="display-flex" style={{ flexDirection: "column", alignItems: "flex-start", marginLeft: "10px" }}>
                        <Tooltip title={props.item.name}>
                            <span className="item-name">{props.item.name}</span>
                        </Tooltip>
                        <span style={{ color: "#2B59FE", fontWeight: "500", marginTop: "5px" }}>{props.item.price} ₺</span>
                    </div>
                </NavLink>

                <div className="display-flex" style={{ justifyContent: "center" }} >
                    <button className="add-to-cart" onClick={() => addItemToCart()}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </Col >
    )
}

export default Item