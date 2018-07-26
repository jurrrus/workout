import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import InspectWorkout from './InspectWorkout';

class Priv extends Component {
    render(){
        return <div>
            <InspectWorkout />
            <button>
                <Link to="/workout">Start</Link>
            </button>
        </div>;
    }
}

export default Priv;