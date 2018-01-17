import React, {Component } from 'react';
import Age from './age';

class App extends Component{
    constructor(props){
        super(props)
        this.state = { 
            newDate: " ",
            birthday: " ",
            showState: false 
        }
    }

    changeBirthday(){
        console.log(this.state)
        this.setState({ birthday: this.state.newDate,
        showState: true })
    }
    render(){
        return(
            <div className="flexbox-container">

                <h2>Input Your Birthday</h2>
                <label htmlFor="age">Age In Put</label>
                {" "} 
                <input 
                className="age" 
                type="date" id="age"
                onChange={ event=>this.setState({newDate: event.target.value})}/>
                {" "}
                <button 
                type="button"
                onClick={()=> this.changeBirthday()}>
                Submit
                </button>
                {this.state.showState ?
                  <Age date={this.state.birthday}/>
                :
                <div></div>
                 }
               </div>
        )
    }
};

export default App;