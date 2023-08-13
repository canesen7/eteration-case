import { Col, Row } from "antd"
import React from "react"
import { useParams } from "react-router-dom"

const ItemPage = (props) => {
    const { id } = useParams()

    const item = props.items.items.find(perItem => perItem.id === id)

    // Adds item to cart, if item already in cart just increase their count.
    const addItemToCart = () => {
        let addedItem = {
            id: item.id,
            name: item.name,
            cost: item.price,
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
        <Col span={18} style={{ marginTop: "25px", width: "100%" }}>
            {item ?
                <div className={"item-container"} style={{ padding: "10px", height: "70vh" }}>
                    <Row style={{ height: "100%" }}>
                        <Col span={14}>
                            <img src={item.image} alt={"item-img"} style={{ width: "100%", height: "100%" }} />
                        </Col>
                        <Col span={10}>
                            <Row>
                                <span className={"item-page-header"}>{item.name}</span>
                            </Row>
                            <Row>
                                <span className={"item-page-cost"}>{item.price} ₺</span>
                            </Row>
                            <Row>
                                <span className={"item-page-description"}>{item.description} ₺</span>
                            </Row>
                            <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <button className={"add-to-cart-button"} onClick={() => addItemToCart()}>Add to Cart</button>
                            </Row>
                        </Col>
                    </Row>
                </div>
                : null}
        </Col >)
}

export default ItemPage