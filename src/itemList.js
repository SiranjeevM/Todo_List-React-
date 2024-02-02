import React from "react";

import LineItem from "./LineItems";
const ItemList = ({items,handleChange,handleDelete})=>{
    return(
        <ul>
        {items.map((item) => (
            <LineItem 
            item = {item}
            key={item.id}
            handleChange = {handleChange}
            handleDelete = { handleDelete} />
        ))}
    </ul>
    )

}
export default ItemList;