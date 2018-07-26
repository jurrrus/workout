import React, {Component} from 'react';

class PublicWorkouts extends Component {
    render(){
        return <div className="container">
            <h3>Public workouts</h3>
            <hr></hr>
            <ul className="list">
                <li>1 public wrk name (contraction)</li>
                <li>2 public wrk name (contraction)</li>
                <li>3 public wrk name (contraction)</li>
            </ul>
        </div>;
    }
}

export default PublicWorkouts;