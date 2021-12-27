import React from 'react';
import '../styles/LucasCard.css';

class HomeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={this.props.styleClass}>
                <img src={this.props.logo}></img>
                <br/>
                <div>{this.props.title}</div>
            </div>
        );
    }
}

export default HomeCard;