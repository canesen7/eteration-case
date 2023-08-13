import { Col, Pagination, Row } from "antd"
import React, { useEffect, useState } from "react"
import Item from "../GeneralComponents/Item"

const ItemsList = (props) => {
    const [currentPage, setCurrentPage] = useState(1)

    // On change page, sets current page
    const pageOnChange = (page) => {
        setCurrentPage(page)
    }

    // Returns items by selected page
    const returnPagedItems = () => {
        let pagedItems = props.items.filteredItems ? props.items.filteredItems.slice((currentPage - 1) * 12, currentPage * 12 ) : []

        return pagedItems
    }

    // When a filter update, sets current page first page
    useEffect(() => {
        setCurrentPage(1)
    }, [props.filters])

    return (
        <div style={{ width: "100%", height: "100%", boxSizing: "border-box", marginTop: "20px" }}>
            <Row gutter={[16, 16]} wrap={true}>
                {returnPagedItems().map((item, i) => (
                    <Item setCart={props.setCart} key={i} item={item} cart={props.cart}/>
                ))}
            </Row>

            <Row>
                <Col span={24} className="display-flex" style={{justifyContent: "center", marginTop: "15px"}}>
                    <Pagination
                        total={props.items.filteredItems ? props.items.filteredItems.length : 1}
                        current={currentPage}
                        showSizeChanger={false}
                        showQuickJumper={false}
                        onChange={pageOnChange}
                        pageSize={12}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ItemsList