import { Col, Row } from "antd"
import React from "react"
import FilterItem from "./FilterItem"
import CartAndPriceUtils from "./CartAndPriceUtils"
import ItemsList from "./ItemsList"
import { Route, Routes } from "react-router-dom"
import ItemPage from "../GeneralComponents/ItemPage"

const Content = (props) => {
    const sortByOptions = [
        { id: 0, label: "Old to New", value: "oldToNew" },
        { id: 1, label: "New to Old", value: "newToOld" },
        { id: 2, label: "Price High To Low", value: "pHighToLow" },
        { id: 3, label: "Price Low To High", value: "pLowToHigh" },
    ]

    // Returns filters group
    const returnFiltersGroup = () => {
        return props.filters.map((filter, i) => (
            <div style={{ marginBottom: "25px" }} key={i}>
                <FilterItem
                    sortByOptions={sortByOptions}
                    filter={filter}
                    filters={props.filters}
                    setFilters={props.setFilters}
                    index={i}
                    items={props.items} />
            </div>
        ))
    }

    return (
        <Row className="display-flex" style={{ justifyContent: "center", marginTop: "15px" }}>
            <Col span={20}>
                <Row>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Col span={6}>
                                    {returnFiltersGroup()}
                                </Col>
                                <Col span={12}>
                                    <ItemsList setCart={props.setCart} cart={props.cart} items={props.items} filters={props.filters} />
                                </Col>
                            </>}>
                        </Route>
                        <Route path="/:id" element={
                            <ItemPage items={props.items} cart={props.cart} setCart={props.setCart}/>
                        } />
                    </Routes>

                    <Col span={6}>
                        <CartAndPriceUtils cart={props.cart} setCart={props.setCart} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )

}

export default Content