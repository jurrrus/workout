import React, {Component} from 'react';

class AddWorkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newWorkout: [
                ['prepare', 10],
                ['work', 15],
                ['rest', 5],
                ['work', 15],
                ['cool down', 30]
            ]
        }
    }

    addWorkoutHandler(event){
        event.preventDefault();
        this.props.addWorkout({
            id: 9,
            author: 'User',
            name: 'private workout 1',
            public: false,
            sets: 1,
            tags: [],
            workout: this.state.newWorkout
        })
    }

    removeActivity(event, index){
        event.preventDefault();
        const newWorkout = this.state.newWorkout;
        newWorkout.splice(index, 1 );
        this.setState({
            newWorkout
        });
    }

    onActivityChange(event, index){
        event.preventDefault();
        const newWorkout = this.state.newWorkout;
        newWorkout[index] = event.target.value;
        this.setState({
            newWorkout
        });
    }

    addActivity(event){
        event.preventDefault();
        this.setState({
            newWorkout: [...this.state.newWorkout, ['work', 15]]
        });
    }

    render(){
        const { newWorkout } = this.state;
        return <form action="">
            <input type="text" name="name" placeholder="Name of your workout"/><br/>
            {
                newWorkout.map((activity, index) => {
                    return <div key={index}>
                        <select key={index} name="workout" value={activity[0]} onChange={(event) => {
                            this.onActivityChange(event. index)}}>
                            <option value="prepare">prepare</option>
                            <option value="work">work</option>
                            <option value="rest">rest</option>
                            <option value="cool down">cool down</option>
                        </select>
                        <input type="number" min="0" max="1200" value={activity[1]}/>[s]
                        <button onClick={(event) => {
                            this.removeActivity(event, index)}}>Remove</button>
                    </div>
                })
            }
            <button onClick={this.addActivity.bind(this)}>Add activity</button><br/>

            <input type="number" name="sets" placeholder="Number of sets" min="0" max="100"/><br/>
            <input onClick={this.addWorkoutHandler.bind(this)} type="submit"/>
        </form>;
    }
}

export default AddWorkout;