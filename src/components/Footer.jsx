import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

let Footer = () => {
    return (
        <footer className="footer">
            <p> Copyright &copy; {currentYear}</p>
        </footer>
    )
}

export default Footer;