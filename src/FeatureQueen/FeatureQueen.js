import React, { Component } from "react";
import "./FeatureQueen.css";
import SeasonStats from "./SeasonStats/SeasonStats.js";
import ChallengeStats from "./ChallengeStats/ChallengeStats.js";
import Lipsyncs from "./Lipsyncs/Lipsyncs.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


class FeatureQueen extends Component {
    constructor() {
        super();
        this.state = {
            featureClick: true,
        }
    }

    render(){
        return (
            <div className="wrapper featureWrapper">
                <span className="icon">
                    <FontAwesomeIcon icon={faTimesCircle} 
                    onClick={() => this.props.clearFeature(false)}
                    />
                </span>

                <h2>{this.props.feature.name}</h2>
                <p className="quote">"{this.props.feature.quote}"</p>
                <div className="featureImageContainer">
                    <img src={this.props.feature.image_url} alt=""/>
                </div>
                <div className="featureInfoPanel">
                    <p className="stats">Season Stats</p>
                    <SeasonStats 
                        seasons={this.props.feature.seasons}
                    />
                    <p className="stats">Challenge Wins</p>
                    <ChallengeStats 
                        challenges={this.props.feature.challenges}
                        
                    />
                    <p className="stats">Lipsyncs</p>
                    <Lipsyncs 
                        lipsyncs={this.props.feature.lipsyncs}
                    />
                </div>  
            </div>
        )
    }
}

export default FeatureQueen;