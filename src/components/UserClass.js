import React from "react"


class UserClass extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h4>Location: Deharadun</h4>
                <h4>Contact: @gt_7</h4>
            </div>
        )
    }
}

export default UserClass