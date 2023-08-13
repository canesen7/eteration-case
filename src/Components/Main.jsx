import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import "../Styles/main.css"
import Content from "./Content"

const Main = () => {
    // Search
    const [search, setSearch] = useState("")

    // Cart
    const [cart, setCart] = useState([])

    // Items
    const [items, setItems] = useState({
        items: [],
        filteredItems: [],
        brands: [],
        models: [],
    })

    // Filters
    const [filters, setFilters] = useState([
        { type: "sortBy", filterType: "radio", value: "oldToNew", label: "Sort by" },
        { type: "brands", filterType: "checkbox", value: [], label: "Brands", searchText: "" },
        { type: "models", filterType: "checkbox", value: [], label: "Models", searchText: "" }
    ])

    // When component mount gets items given url
    useEffect(() => {
        fetch("https://5fc9346b2af77700165ae514.mockapi.io/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                let items = []
                let brands = new Set()
                let models = new Set()

                for (let i = 0; i < data.length; i++) {
                    let item = data[i]

                    items.push(item)
                    brands.add(item.brand)
                    models.add(item.model)
                }

                let settedItems = {
                    items: items,
                    filteredItems: items,
                    brands: Array.from(brands),
                    models: Array.from(models)
                }

                setItems(settedItems)
            })

            let localStorageCart = localStorage.getItem("cart")
            let parsedCart = JSON.parse(localStorageCart)

            setCart(parsedCart)
    }, [])

    // Sorts item by given radio-button value
    const getItemsBySortFilter = (items, filterType) => {
        switch (filterType) {
            case "oldToNew":
                return items.sort(function (a, b) { return new Date(a.createdAt) - new Date(b.createdAt) })
            case "newToOld":
                return items.sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt) })
            case "pHighToLow":
                return items.sort(function (a, b) { return new Date(+b.price) - new Date(+a.price) })
            case "pLowToHigh":
                return items.sort(function (a, b) { return new Date(+a.price) - new Date(+b.price) })
            default:
                return items.sort(function (a, b) { return new Date(a.createdAt) - new Date(b.createdAt) })
        }
    }

    // Trigger when a filter change, sets filtered items by selected filters and selected sort option. 
    useEffect(() => {
        let willFilteredItems = [...items.items]

        // Search Filter
        willFilteredItems = willFilteredItems.filter(item => item.name.toUpperCase().includes(search.toUpperCase()))

        // Sort Filter
        willFilteredItems = getItemsBySortFilter(willFilteredItems, filters[0].value)

        // Brand Filter
        willFilteredItems = filters[1].value.length > 0 ? willFilteredItems.filter(item => filters[1].value.includes(item.brand)) : willFilteredItems

        // Model Filter
        willFilteredItems = filters[2].value.length > 0 ? willFilteredItems.filter(item => filters[2].value.includes(item.model)) : willFilteredItems

        setItems({ ...items, filteredItems: willFilteredItems })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters, search, items.items])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <>
            <Navbar
                search={search}
                setSearch={setSearch}
                cart={cart}
                setCart={setCart} />
            <Content
                filters={filters}
                setFilters={setFilters}
                items={items}
                setCart={setCart}
                cart={cart} />
        </>
    )
}

export default Main