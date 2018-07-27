import React, {Component} from 'react';

import YourWorkouts from './YourWorkouts';
import PublicWorkouts from './PublicWorkouts';
import AddWorkout from './AddWorkout';
import Workout from './Workout';

import database from './database';


const TopMenu = () => {
        return <div className="bar container">
            <a href="">+ workout</a>
            <div className="right">Signed in as User</div>
        </div>;
};

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            database,
            addWorkoutVisibility: false,
            yourWorkoutsVisibility: true,
            publicWorkoutsVisibility: true,
            activeWorkoutVisibility: false
        }
    }

    onAddWorkoutHandler(workout){
        this.setState({
            database: [...this.state.database, workout]
        });
    }

    render(){
        return <div>
            <TopMenu />
            <AddWorkout addWorkout={this.onAddWorkoutHandler.bind(this)}/>
            <YourWorkouts database={this.state.database}/>
            <PublicWorkouts database={this.state.database}/>
            <Workout activeWorkout={this.state.database[0].workout}/>
        </div>;
    }
}

export default Main;