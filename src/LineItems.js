import React from "react";
import { FaTrash } from "react-icons/fa6";
const LineItem = ({ item, handleChange, handleDelete }) =>{
    return (
        <li className="item" key={item.id}>
        <input
            type="checkbox"
            onChange={() => handleChange(item.id)} 
            checked={item.checked}
        />
        <label 
            style={(item.checked) ? {textDecoration:"line-through"}:null}
            onDoubleClick={()=>handleChange(item.id)}>{item.title}</label>
        <FaTrash role="button" onClick={()=>handleDelete(item.id)} tabIndex="0" aria-label={`Delete ${item.item}`}/>
    </li>
    )
}
export default LineItem;