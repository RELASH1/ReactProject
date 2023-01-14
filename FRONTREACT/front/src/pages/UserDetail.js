import React, { Component } from "react";

export default class UserDetails extends Component {
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
    return (
      <div class="conatiner">
      <div class="text-center pt-5 mb-5">
        <h1 class="text-danger">You Are logged in as</h1>
        <h4>Name:{this.state.userData.name}</h4>
       <h4>Email:{this.state.userData.email}</h4>
      </div></div>
    );
  }
}