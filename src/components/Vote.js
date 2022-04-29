import React from "react"

export default function Vote() {
    return (
        <div id="vote--div">
            <div id="vote">
                <div id="vote--description">
                    <h3>Uniswap Governance</h3>
                    <p>UNI tokens represent voting shares in Uniswap governance. You can vote on each proposal yourself or delegate your votes to a third party.</p>
                    <a href="https://uniswap.org/blog/unis">Read more about Uniswap governance</a>
                </div>
                <div id="vote--heading">
                    <p id="vote--heading--desc">Proposals</p>
                    <button id="vote--heading--create">Create Proposal</button>
                </div>
                <div id="vote--proposals">
                    <div className="vote--proposals--proposal">
                        <p>0.3</p>
                        <p className="vote--proposals--proposal--title">Uniswap Grants Program v0.1</p>
                        <p className="vote--proposals--proposal--status executed">Executed</p>
                    </div>
                    <div className="vote--proposals--proposal">
                        <p>0.2</p>
                        <p className="vote--proposals--proposal--title">Retroactive Proxy Contract Airdrop — Phase One</p>
                        <p className="vote--proposals--proposal--status defeated">Defeated</p>
                    </div>
                    <div className="vote--proposals--proposal">
                        <p>0.1</p>
                        <p className="vote--proposals--proposal--title">Reduce UNI Governance Proposal & Quorum Thresholds</p>
                        <p className="vote--proposals--proposal--status executed">Executed</p>
                    </div>
                </div>
                <p id="vote--footer">A minimum threshold of 0.25% of the total UNI supply is required to submit proposals</p>
            </div>
        </div>
    )
}