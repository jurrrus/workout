import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {privateWorkouts} from "./database";

class InspectWorkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            workout: privateWorkouts.find(workout => {
                return workout.id == this.props.match.params.id;
            })
        }
    }
    render(){
        const { workout } = this.state;
        return <div>
            <h2>{workout.name}</h2>
            <div>
                <ul>
                    {
                        workout.workout.map((activity, index) =>
                            <li key={index}>{activity[0]}{activity[1]}</li>
                        )
                    }
                </ul>
            </div>
        </div>;
    }
}

export default InspectWorkout;