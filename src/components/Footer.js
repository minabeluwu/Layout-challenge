import React from "react"
import "./../styles/footer.css"
import git from "./../img/github.png"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <a href="https://github.com/minabeluwu" className="footer-link" target="_blank">
                    <img src={git} alt="" className="footer-img"/>
                </a>
            </footer>
        </>
    )
}

export default Footer