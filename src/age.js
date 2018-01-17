import React, { Component } from 'react';



class Age extends Component{

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


    timeSince(date){
        let today= new Date().getTime();
        let other_date = new Date(date).getTime();
        let diffrence = Math.abs(today - other_date);

        let days = Math.floor(diffrence / (1000*3600*24))
        let years = Math.floor(days/365);
        days -=years*365;
        let months = Math.floor(days/31);
        days -= months*31

        return ` ${years} years, ${months} months, and ${days} days`
    }
    render(){
        return(
            
            <div>
            {this.props.date}
            <h4>Congrate on {this.timeSince(this.props.date)}! </h4>
            </div>
        )
    }
};

export default Age;