import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Workout extends Component {

    render(){
        return <div className="container">
            <div className="container">
                <div className="container">current activity</div>
                <div><h1>TIMER</h1></div>
                <div className="container">NEXT ACTIVITY</div>
                <button>
                    PREV  activity
                </button>
                <button className="right">
                    NEXT  activity
                </button>
            </div>
            <button>
                Pause/Unpause
            </button>
            <button className="right">
                Exit Workout
            </button>
        </div>;
    }
}

export default Workout;