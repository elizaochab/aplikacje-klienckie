import React from 'react'
import logo from '../94504786_1533767853472409_7833829200384491520_n.jpg'

const CHeader = () => {
    let facebookProfileLink = "https://www.facebook.com/eliza.ochab.5"
    return (
        <div>
            <img src={logo} className="headerLogo" alt="logo"/>
            <h2>
                Eliza Ochab - <a href={facebookProfileLink}>To mój Faceboook</a>
            </h2>
        </div>
    )
}

export default CHeader

