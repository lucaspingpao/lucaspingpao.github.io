import React from 'react';
import './LucasCard.css';

class HomeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const logo = this.props.logo;
        if(this.props.page === "home") {
            return (
                <div className="card homeCard">
                    <img src={this.props.logo}></img>
                    <br/>
                    <div>{this.props.title}</div>
                </div>
            );
        }
        return (
            <div className="card">
                <img src={this.props.logo}></img>
                <br/><br/>
                <div>{this.props.title}</div>
            </div>
        );
    }
}

export default HomeCard;