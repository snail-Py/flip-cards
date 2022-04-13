import React from "react"

function FlipCard() {
    return (
    <div className="card">
        
        <div className="front-card">
        <h2>Here goes a question</h2>
        </div>
            
        <div className="back-card">
        <h2>Here goes an answer</h2>
        </div>
    </div>
    )
}

function Question() {
    return (
        <div></div>
    )
}


function Answer() {
    return (
        <div></div>
    )
}

export default FlipCard
export default Question
export default Answer