import React from "react"

export default function () {
    return (
        <div id="pool--div">
            <div id="pool">
                <div id="pool--heading">
                    <p>Pools Overview</p>
                    <div className="dropdown">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content">
                            <a href="#">Create a pool</a>
                            <a href="#">Migrate</a>
                            <a href="#">V2 liquidity</a>
                            <a href="#">Learn</a>
                        </div>
                    </div>
                    <button>+ New Position</button>
                </div>
                <div id="pool--pools">
                    <p>Your active V3 liquidity positions will appear here.</p>
                </div>
                <div id="pool--footer">
                    <div id="pool--footer--learn">
                        <h3>Learn about providing liquidity</h3>
                        <p>Check out our v3 LP walkthrough and migration guides.</p>
                    </div>
                    <div id="pool--footer--top">
                        <h3>Top pools</h3>
                        <p>Explore Uniswap Analytics.</p>
                    </div>
                </div>
                <h1>Pool page belongs here</h1>
            </div>
        </div>
    )
}