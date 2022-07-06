import React from 'react'
import "./TimeLine.css"

const TimeLine = ({ timelines }) => {
    return (
        <div className="timelines">
            <h1>Timeline</h1>
            {
                timelines.map((item, index) => (
                    <div className='timeline-info' key={index}>
                        <h2>{index + 1}. {item.title}</h2>
                        <small>{item.date.toString().split("T")[0]}</small>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default TimeLine
