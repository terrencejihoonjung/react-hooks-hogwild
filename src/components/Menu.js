import React from "react";


function Menu({hogs, setFilterBy}) {

    function handleFilter(event) {
        setFilterBy(event.target.value);
    }

    return (
        <div className="Menu">
            <select name="filter" onChange={handleFilter}>
                <option value="All">All</option>
                <option value={false}>Not Greased</option>
                <option value={true}>Greased</option>
            </select>
        </div>
    )
}

export default Menu;