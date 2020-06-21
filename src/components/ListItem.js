import React from "react"
import "./../styles/productList.css"
import List from './List'

const ListItem = (props) => {
    const listProduct = props.filteredAndSortedList.map( (product, index) => (
        <List {...product }  key={index}/>
    ))

    return (
        <div className="itemList">{listProduct}</div>
    )
}

export default ListItem