import React, {useState, useEffect} from "react"
import "./../styles/productList.css"
import ListItem from "./ListItem"

const Home = () => {
    const [searchResults, setSearchResults] = useState({
        listProduct: [],
        filterList: [],
      })

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list`).then(
            resp => {
              resp.json().then(json => {
                json && setSearchResults({
                  listProduct: json,
                  filterList: json
                })
              })
            }
          )
    }, [])

    return (
        <div className="itemList-container">
            <ListItem filteredAndSortedList={searchResults.filterList}/>
        </div>
    )
}

export default Home