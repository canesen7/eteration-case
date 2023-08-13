import { Col, Row } from "antd"
import React from "react"

const CartItem = (props) => {
    // Updates cart by increase or decrease
    const updateCart = (type) => {
        let cartItem = props.cartItem
        let updatedCart = [...props.cart]
        let findedCartItem = updatedCart.find(crtItem => crtItem.id === cartItem.id)

        if (type === "inc") {
            findedCartItem.count++
        } else {
            if (findedCartItem.count - 1 === 0) {
                updatedCart = updatedCart.filter(crtItem => crtItem.id !== cartItem.id)
            } else {
                findedCartItem.count--
            }
        }

        props.setCart(updatedCart)
    }

    return (
        <Row style={{ width: "90%", height: "60px", display: "flex", alignItems: "center", cursor: "pointer", margin: "auto" }}>
            <Col span={15} style={{display: "flex", flexDirection: "column"}}>
                <span style={{fontWeight: "500"}}>{props.cartItem.name}</span>
                <span style={{color: "rgb(43, 89, 254)"}}>{props.cartItem.cost}₺</span>
            </Col>
            <Col span={9}>
                <button className={"inc-dec-button"} onClick={() => updateCart("dec")}>-</button>
                <span className={"counter"}>{props.cartItem.count}</span>
                <button className={"inc-dec-button"} onClick={() => updateCart("inc")}>+</button>
            </Col>
        </Row>)
}

export default CartItem