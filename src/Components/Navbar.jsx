import { Col, Input, Row } from "antd"
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai"
import { BsWallet } from "react-icons/bs"
import React from "react"
import NavItem from "../GeneralComponents/NavItem"
import { NavLink } from "react-router-dom"

const Navbar = (props) => {
    // Returns search bar prefix icon
    let searchBarPrefix = () => {
        return <AiOutlineSearch style={{ color: "#7b7b7b", fontSize: "24px" }} />
    }

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

    // Cart and profile items
    let cartAndProfileItems = [
        {
            id: 0,
            icon: <BsWallet className="cart-item-icon" />,
            span: <span>{getCartTotal()} ₺</span>
        },
        {
            id: 1,
            icon: <AiOutlineUser className="cart-item-icon" />,
            span: "Kerem"
        }
    ]

    return (
        <Row className="display-flex" style={{ background: "#2A59FE", height: "50px", justifyContent: "center" }}>
            <Col span={20}>
                <Row>
                    <Col span={6} className="display-flex">
                        <NavLink to={"/"}>
                            <span className="span-items">Eteration</span>
                        </NavLink>
                    </Col>
                    <Col span={12} className="display-flex" style={{ justifyContent: "flex-start" }}>
                        <Input
                            value={props.search}
                            className={"search-input"}
                            onChange={(e) => props.setSearch(e.target.value)}
                            placeholder="Search"
                            prefix={searchBarPrefix()} />
                    </Col>
                    <Col span={6} className="display-flex" style={{ justifyContent: "center" }}>
                        {cartAndProfileItems.map(item => (
                            <NavItem key={item.id} id={item.id} icon={item.icon} span={item.span} />
                        ))}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Navbar