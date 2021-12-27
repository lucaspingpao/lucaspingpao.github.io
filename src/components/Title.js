import React from 'react';
import '../styles/Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div>
            <br/><br/>
            <div className="header" style={{backgroundColor: this.props.color}}>
                <h1>{this.props.emoji} {this.props.title} {this.props.emoji}</h1>
                <h2>{this.props.subtitle}</h2>
                <div className="text-top">Check out some of my projects by clicking one of the icons below!</div>
            </div>
        </div>
        );
    }
}

export default Title;