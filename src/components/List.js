import React from "react"
import "./../styles/productList.css"

const List = ({author,url, download_url}) => {


    return (
        <>
            <div className="itemList-container">
                <img src={download_url} alt=" "className="itemList-img"/>

                <p className="itemList-paragraph">{author}</p>
                <a href={url} className="itemList-boton" target="_blank">Ver imagen</a>
            </div>
        </>
    )
}

export default List