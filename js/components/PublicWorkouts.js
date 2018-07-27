import React, {Component} from 'react';
import {publicWorkouts} from "./database";
import {Link} from "react-router-dom";

class PublicWorkouts extends Component {

    constructor(props){
        super(props);
        const { database } = props;
        this.state = {
            database
        }
    }

    render(){
        const { database } = this.state;

        return <div className="container">
            <h3>Public workouts</h3>
            <hr/>
            <ul className="list">
                {
                    database.map(workout => {
                            if (workout.author !== 'User') {
                                return <li key={workout.id}>
                                    <Link to={`/workout/${workout.id}`}>{workout.name}</Link> {workout.workout.map(activity => activity.join(': ')).join(', ')} <b>{workout.public ? 'Public': 'Private'}</b>
                                </li>}
                        }
                    )
                }
            </ul>

        </div>;
    }
}

export default PublicWorkouts;