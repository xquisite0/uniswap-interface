import React from "react"

export default function Vote() {
    return (
        <div id="vote--div">
            <div id="vote">
                <div id="vote--description">
                    <h3>Uniswap Governance</h3>
                    <p>UNI tokens represent voting shares in Uniswap governance. You can vote on each proposal yourself or delegate your votes to a third party.</p>
                    <a href="#">Read more about Uniswap governance</a>
                </div>
                <div id="vote--heading">
                    <p>Proposals</p>
                    <button>Create Proposal</button>
                </div>
                <div id="vote--proposals">
                    <div className="vote--proposals--proposal">
                        <p>0.3</p>
                        <p>Uniswap Grants Program v0.1</p>
                        <p>Executed</p>
                    </div>
                    <div className="vote--proposals--proposal">
                        <p>0.2</p>
                        <p>Retroactive Proxy Contract Airdrop — Phase One</p>
                        <p>Defeated</p>
                    </div>
                    <div className="vote--proposals--proposal">
                        <p>0.1</p>
                        <p>Reduce UNI Governance Proposal & Quorum Thresholds</p>
                        <p>Executed</p>
                    </div>
                </div>
                <p>A minimum threshold of 0.25% of the total UNI supply is required to submit proposals</p>
            </div>
        </div>
    )
}