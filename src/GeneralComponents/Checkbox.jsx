const Checkbox = (props) => {
    return (
        <div className="display-flex" key={props.key}>
            <input type="checkbox" style={{ width: "16px", height: "16px" }} checked={props.isFilterChecked(props.item)} onChange={() => props.changeFilterValueForCheckbox(props.item)} />
            <span className="checkbox-span" style={{ fontSize: "12px", color: "#626262", marginLeft: "5px" }}>{props.item}</span>
        </div>)
}

export default Checkbox