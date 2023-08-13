const TotalPrice = (props) => {
    return (
        <>
            {props.cart.length > 0 ?
                <div className="cart-content-area" style={{ marginTop: "15px", padding: "15px", display: "flex", gap: "15px" }}>
                    <span style={{ color: "#626B8B" }}>Total Price:
                        <span style={{ color: "rgb(43, 89, 254)", marginLeft: "5px", fontWeight: "bold", cursor: "pointer" }}>{props.getCartTotal()} ₺</span>
                    </span>
                    <button className="checkout-button">Checkout</button>
                </div> : null}
        </>
    )
}

export default TotalPrice