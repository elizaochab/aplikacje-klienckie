import React from 'react'


const CFooter = () => {
    let date = new Date();
    return (
        <div>
            <h5>
                PPFront-end, przykładowy serwis React. Dzisiaj mamy:{" "}
                {date.toDateString()}{" "}
            </h5>
        </div>
    )
}

export default CFooter

