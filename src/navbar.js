import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';


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



class NavBar extends Component{
    render(){
        return(
            <div className="nav_main" >
            <NavLink style={styles.nav} to="/">
            <div style={styles.nav_first}></div>
            <div style={styles.nav_second}></div>
            <div style={styles.nav_third}></div>
            </NavLink>
            </div>
        )
    }
};

export default NavBar;

