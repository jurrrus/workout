import React, {Component} from 'react';

import TopMenu from './TopMenu';
import YourWorkouts from './YourWorkouts';
import PublicWorkouts from './PublicWorkouts';


class Main extends Component {
    render(){
        return <div>
            <TopMenu />
            <YourWorkouts />
            <PublicWorkouts />
        </div>;
    }
}

export default Main;