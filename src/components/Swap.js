import React from "react"

export default function Swap() {
    const [chosenTokens, setChosenTokens] = React.useState({ "from": "Select", "to": "Select" })
    const [inputAmounts, setInputAmounts] = React.useState({ "from": 0, "to": 0 })

    function updateTokens(fromTo, token) {
        setChosenTokens(prevChosenTokens => {
            return { ...prevChosenTokens, [fromTo]: token }
        })
    }

    function handleFromChange(event) {
        setInputAmounts(prevInputAmounts => {
            return { ...prevInputAmounts, "from": event.target.value }
        })
    }
    function handleToChange(event) {
        setInputAmounts(prevInputAmounts => {
            return { ...prevInputAmounts, "to": event.target.value }
        })
    }

    return (
        <div id="swap--div">
            <div id="swap">
                <div id="swap--heading">
                    <p>Swap</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/640px-Windows_Settings_app_icon.png" alt="Settings Logo" className="logo" />
                </div>
                <form id="swap--form">
                    <input type="text" value={inputAmounts.from} placeholder="0.0" id="swap--form--from" onChange={handleFromChange} />
                    <div className="dropdown" id="swap--form--fromoptions">
                        <button className="dropbtn">{chosenTokens.from}</button>
                        <div className="dropdown-content">
                            <p id="dropdown-content--text">Select a token</p>
                            <a href="#" onClick={() => updateTokens("from", "BTC")}>BTC</a>
                            <a href="#" onClick={() => updateTokens("from", "ETH")}>ETH</a>
                            <a href="#" onClick={() => updateTokens("from", "USDT")}>USDT</a>
                        </div>
                    </div>
                    <input type="text" value={inputAmounts.to} placeholder="0.0" id="swap--form--to" onChange={handleToChange} />
                    <div className="dropdown" id="swap--form--tooptions">
                        <button className="dropbtn">{chosenTokens.to}</button>
                        <div className="dropdown-content">
                            <p id="dropdown-content--text">Select a token</p>
                            <a href="#" onClick={() => updateTokens("to", "BTC")}>BTC</a>
                            <a href="#" onClick={() => updateTokens("to", "ETH")}>ETH</a>
                            <a href="#" onClick={() => updateTokens("to", "USDT")}>USDT</a>
                        </div>
                    </div>
                    <button id="swap--button">{chosenTokens.from == 'Select' || chosenTokens.to == 'Select' ? "Select tokens" : inputAmounts.from == 0 || inputAmounts.to == 0 ? "Enter an amount" : "Swap"}</button>
                </form>
            </div>
        </div>

    )
}