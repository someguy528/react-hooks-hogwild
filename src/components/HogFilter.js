import React from "react";

function HogFilter({isGreased, onChangeShowGreased, sortBy, onChangeSortBy}){
    function handleShowGreased(event){
        onChangeShowGreased(event.target.checked)
    }
    function handleChangeSortBy(event){
        onChangeSortBy(event.target.value)
    }
    return (
        <div>
            <label>Show Greased Only</label>
            <input 
            type="checkbox" 
            checked={isGreased}
            onChange={handleShowGreased}
            />

            <label>Sort By...</label>
            <select
            name="sort"
            onChange={handleChangeSortBy}
            value={sortBy}
            >
                <option value="name">name</option>
                <option value="weight">weight</option>
            </select>
            
        </div>
    )
}

export default HogFilter