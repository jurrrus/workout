import React, {Component} from 'react';

import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import Main from './Main.js';
import Priv from './Priv.js';
import Workout from './Workout';
import InspectWorkout from "./InspectWorkout";

class App extends Component {
    render(){
        return <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/priv' component={Priv}/>
                    <Route path='/workout/:id' component={InspectWorkout}/>
                </Switch>
            </div>
        </BrowserRouter>;
    }
}

export default App;