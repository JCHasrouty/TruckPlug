import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

function Loginpage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
        <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="small">
        <FormLabel>Email</FormLabel>
        <FormControl
    autoFocus
    type="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    />
    </FormGroup>
    <FormGroup controlId="password" bsSize="small">
        <FormLabel>Password</FormLabel>
        <FormControl
    value={password}
    onChange={e => setPassword(e.target.value)}
    type="password"
        />
        </FormGroup>
            <input type="submit" onClick={ActionLink} className="form-control submit" value="Login"/>
            <br></br>
            <FormLabel>No account? </FormLabel>
            <a href="url"> Join now.</a>

        </form>
        <br /> 
    <br /> 
    <br /> 
    <br /> 
    <br />
    <br /> 
    <br /> 
    <br /> 
        </div>
        
);
}

function ActionLink() {
    function handleClick(e) {    e.preventDefault();    console.log('The link was clicked.');  }
    return (
        alert("Logged in")
    );
}

export default Loginpage;