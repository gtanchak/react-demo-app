import React from 'react'

const User = ({ name }) => {
    return (
        <div className='user-card'>
            <h2>Name: {name}</h2>
            <h4>Location: Deharadun</h4>
            <h4>Contact: @gt_7</h4>

        </div>
    )
}

export default User