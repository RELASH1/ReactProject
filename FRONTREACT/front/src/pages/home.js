import React, { Component } from "react";
import { Outlet } from 'react-router-dom';
import NavBar from "../components/navbar";
import Footer from "../components/footer";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

  
  componentDidMount() {
    fetch("http://localhost:9000/api/user/SaveUserToken", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    
    return(

        <>
        <div>
        <NavBar/>
        
        
        <Outlet/>
    
    
        <Footer/>
        </div>
        
        </>
    );
    
}
}
