import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import { privateWorkouts } from './base';

class YourWorkouts extends Component {

    constructor(props){
        super(props);
        this.state = {
            privateWorkouts
        }
    }

    render(){
        const { privateWorkouts} = this.state;

        return <div className="container">
                <h3>Your workouts</h3>
                <hr></hr>
            <ul className="list">
                {
                    privateWorkouts.map(workout =>
                        <li key={workout.id}>
                            <Link to={`/workout/${workout.id}`}>{workout.name}</Link>
                            {workout.workout.join(' ')}
                            {workout.public ? 'Public': 'Private'}
                        </li>
                    )
                }
            </ul>

        </div>;
    }
}

export default YourWorkouts;