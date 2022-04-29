import React from "react"

export default function Pool() {
    return (
        <div id="pool--div">
            <div id="pool">
                <div id="pool--heading">
                    <span id="pool--heading--desc">Pools Overview</span>
                    <div className="dropdown" id="pool--heading--more">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content">
                            <a href="#">Create a pool</a>
                            <a href="#">Migrate</a>
                            <a href="#">V2 liquidity</a>
                            <a href="#">Learn</a>
                        </div>
                    </div>
                    <button id="pool--heading--newpos">+ New Position</button>
                </div>
                <div id="pool--pools">
                    <p>Your active V3 liquidity positions will appear here.</p>
                </div>
                <div id="pool--footer">
                    <div id="pool--footer--learn">
                        <span>Learn about providing liquidity</span>
                        <span>Check out our v3 LP walkthrough and migration guides.</span>
                    </div>
                    <div id="pool--footer--top">
                        <span>Top pools</span>
                        <span>Explore Uniswap Analytics.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}