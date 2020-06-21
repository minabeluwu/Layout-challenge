import React from "react"
import "./../styles/header.css"

const Header = () => {

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <h1 className="header-title">Lorem Ipsum</h1>

                    <ul className="header-nav">
                        <li className="header-item">
                            <a href="#" src="" className="header-link">Lorem</a>
                        </li>
                        <li className="header-item">
                            <a href="#" src="" className="header-link">Lorem</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
