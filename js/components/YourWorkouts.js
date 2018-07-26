import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class YourWorkouts extends Component {

    constructor(props){
        super(props);
        const { database } = props;
        this.state = {
            database
        }
    }

    componentWillReceiveProps(nextProps){
        if (this.state.database.length !== nextProps.database.length){
            this.setState({
                database: nextProps.database
            });
        }
    }

    render(){
        const { database } = this.state;

        return <div className="container">
                <h3>Your workouts</h3>
                <hr/>
            <ul className="list">
                {
                    database.map((workout,index) => {
                            if (workout.author === 'User') {
                                return <li key={index}>
                                <Link to={`/workout/${workout.id}`}>{workout.name}</Link>
                                {workout.workout.join(' ')}
                                {workout.public ? 'Public': 'Private'}
                            </li>}
                    }
                    )
                }
            </ul>

        </div>;
    }
}

export default YourWorkouts;