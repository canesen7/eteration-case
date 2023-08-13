import { Input, Radio, Space } from "antd"
import Checkbox from "../GeneralComponents/Checkbox"
import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

const FilterItem = (props) => {
    // Changes filter value for radio buttons
    const changeFilterValueForRadio = (e) => {
        let index = props.index
        let filters = [...props.filters]

        filters[index].value = e.target.value

        props.setFilters(filters)
    }

    // Changes filter value for checkboxes
    const changeFilterValueForCheckbox = (item) => {
        let index = props.index
        let filters = [...props.filters]

        if (filters[index].value.includes(item)) {
            filters[index].value = filters[index].value.filter(value => value !== item)
        } else {
            filters[index].value.push(item)
        }

        props.setFilters(filters)
    }

    // Return search bar prefixes (icons)
    let searchBarPrefix = () => {
        return <AiOutlineSearch style={{ color: "#7b7b7b", fontSize: "12px" }} />
    }

    // Sets checkbox filter's search
    let setFilterSearch = (value) => {
        let filters = [...props.filters]

        filters[props.index].searchText = value

        props.setFilters(filters)
    }

    // Gets filtered items
    let getFilteredItems = () => {
        return props.items[props.filter.type].filter(item => item.toUpperCase().includes(props.filters[props.index].searchText.toUpperCase()))
    }

    // Returns checkboxes status
    let isFilterChecked = (filterItem) => {
        let isFilterCheck = props.filters[props.index]
            ? props.filters[props.index].value.filter(filters => filters === filterItem).length > 0
                ? true
                : false
            : false

        return isFilterCheck
    }

    return (
        <>
            <span className={"filter-header-area"}>{props.filter.label}</span>
            <div className={"filter-content-area"} style={{ alignItems: props.filter.filterType === "radio" ? "flex-start" : "center", flexDirection: "column" }}>
                {props.filter.filterType === "radio" ?
                    <Radio.Group style={{ marginLeft: "15px" }} value={props.filters[props.index].value} onChange={(e) => changeFilterValueForRadio(e)}>
                        <Space direction="vertical">
                            {props.sortByOptions.map(option => (
                                <Radio key={option.value} value={option.value}>
                                    <span style={{ fontSize: "12px", color: "#626262" }}>{option.label}</span>
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group> :
                    <>
                        <Input
                            className={"search-input"}
                            style={{ width: "90%", marginTop: "10px" }}
                            size="small"
                            placeholder={props.filter.label}
                            prefix={searchBarPrefix()}
                            value={props.filter.search}
                            onChange={(e) => setFilterSearch(e.target.value)} />

                        <div className={"combobox-area"}>
                            {getFilteredItems().map((item, i) => (
                                <Checkbox
                                    changeFilterValueForCheckbox={changeFilterValueForCheckbox}
                                    isFilterChecked={isFilterChecked}
                                    key={i}
                                    item={item} />
                            ))}
                        </div>
                    </>}
            </div>
        </>

    )
}

export default FilterItem