import React from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import CartItem from "../GeneralComponents/CartItem"

const Cart = (props) => {
    return (
        <>
            {
                props.cart.length === 0 ?
                    <div style={{ padding: "15px", color: "#626262", display: "flex", alignItems: "center", gap: "10px" }}>
                        <span><AiOutlineShoppingCart style={{ fontSize: "27px", color: "#626262" }} /></span>
                        <span>You didn't add a item to Cart.</span>
                    </div>
                    :
                    <>
                        {props.cart.map(cartItem => (
                            <CartItem key={cartItem.id} cartItem={cartItem} cart={props.cart} setCart={props.setCart} />
                        ))}
                    </>
            }
        </>)
}

export default Cart