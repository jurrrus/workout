import React, {Component} from 'react';

class TopMenu extends Component {
    render(){
        return <div className="bar container">
            <a href="">+ workout</a>
            <div className="right">Signed in as User</div>
        </div>;
    }
}

export default TopMenu;