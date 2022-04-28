import React from "react"

export default function Header(props) {
    return (
        <div id="header">
            <button><img className="logo" src="https://seeklogo.com/images/U/uniswap-logo-782F5E6363-seeklogo.com.png" alt="Uniswap Logo" /></button>

            <div id="middle--menu">
                <button id="middle--menu--swap--button" value="swap" className={props.chosenPage == "swap" ? 'middle--menu--chosen' : ""} onClick={() => props.setChosenPage("swap")}>Swap</button>
                <button id="middle--menu--pool-button" value="pool" className={props.chosenPage == "pool" ? 'middle--menu--chosen' : ""} onClick={() => props.setChosenPage("pool")}>Pool</button>
                <button id="middle--menu--vote--button" value="vote" className={props.chosenPage == "vote" ? 'middle--menu--chosen' : ""} onClick={() => props.setChosenPage("vote")}>Vote</button>
                <button id="middle--menu--charts--button">Charts</button>
            </div>

            <div id="right--menu">
                <div className="dropdown">
                    <button className="dropbtn">Ethereum</button>
                    <div className="dropdown-content">
                        <p id="dropdown-content--text">Select a network</p>
                        <a href="#">Polygon</a>
                        <a href="#">Optimism</a>
                        <a href="#">Arbitrum</a>
                    </div>
                </div>
                <p id="connect-button">0 ETH</p>
                <button id="more--button">...</button>
            </div>
        </div>
    )
}