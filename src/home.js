import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import "./App.css";


const styles={
	wrapper:{
		width: "100%",
		height: "100vh",
		textAlign: "center"
		},
	nav:{
		with: "30px",
		display: "block",
		margin: "1em 0 0 1em"
		},
	nav_first:{
			width: "30px"
			},
		
	nav_second:{
			width: "20px"
			},
	nav_third:{
			width: "25px"
			},
	nav_p:{
		color: "white"
		},
		h_4:{
			color: "white",
			fontWeight: "100",
			fontSize: "28px",
			margin: "0",
			padding: "8em 0 1em 0"
			},
	btn:{
	textDecoration: "none",
	color: "white",
	fontWeight: "100",
	border: "1px #fbbc05 solid",
	padding: "1em 3em",
	borderRadius: "10px"
	}
	
	}
	


class Home extends Component{
	render(){
		return(
		
		<div>
            <div style={styles.wrapper}>
			 <div>
                 <h4 style={styles.h_4}>Find Out How old You are </h4>
				 <Link style={styles.btn} to="/main">Learn More</Link>
			 </div>
		</div>
		</div>
		)
        }};
        
export default Home;