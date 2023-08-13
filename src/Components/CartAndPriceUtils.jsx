import React from "react"
import Cart from "./Cart"
import TotalPrice from "./TotalPrice"

const CartAndPriceUtils = (props) => {
    // Gets cart total
    let getCartTotal = () => {
        let total = 0

        for (let i = 0; i < props.cart.length; i++) {
            let cartItem = props.cart[i]
            let price = +cartItem.cost * cartItem.count

            total += price
        }

        return total
    }

    return (
        <div style={{ width: "100%", marginTop: "20px", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <div className="cart-content-area" style={{ width: "90%", height: "auto", flexDirection: "column", maxHeight: "400px", overflow: "auto" }}>
                <Cart cart={props.cart} setCart={props.setCart} />
            </div>

            <TotalPrice getCartTotal={getCartTotal} cart={props.cart} />
        </div>
    )
}

export default CartAndPriceUtils