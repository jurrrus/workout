import React, {Component} from 'react';

import YourWorkouts from './YourWorkouts';
import PublicWorkouts from './PublicWorkouts';
import AddWorkout from './AddWorkout';

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
            <PublicWorkouts  database={this.state.database}/>
        </div>;
    }
}

export default Main;