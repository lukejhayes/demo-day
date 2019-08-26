import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user:'root',
//   password:'rootroot',
//   database:'react-sql-db'
//   });

//   connection.connect(function(err){
//     (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
//     });
    
//     require('../public/')(app, connection);
// import Background from '../public/miller-lite-login.jpg';

// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: "url(https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiSgt2cyaHkAhWnuVkKHQhhAUIQjRx6BAgBEAQ&url=https%3A%2F%2Ffineartamerica.com%2Ffeatured%2Fmiller-lite-barn-door-dan-sproul.html%3Fproduct%3Diphone-case-cover%26phoneCaseType%3Diphone10&psig=AOvVaw0LqZ9abj-rYAESyYrsruIN&ust=1566944483133277" + { Background } + ")"
// };
class App extends React.Component{
  state = {
    email: "",
    password: ""
  }
  signIn = () =>{
    console.log(this.state.email,this.state.password);
    //write my JS code here to make a request to my server so you can save the email and password
    //query
  }
  createAccount = ()=>{
    console.log(this.state.email,this.state.password);
    //write my JS code here to make a request to my server so you can create an account
  }
  
  render(){
    let {email,password} = this.state;
    return(
      <div>
        {/* <h1> HAYES BEER DISTRIBUTING COMPANY </h1> */}
        <div style={{width:"40%",height:400,marginLeft:"30%",textAlign:'center'}}>
          <div>
          <Card class="field">
            <h2>* Hayes Beer Employees Only *</h2>
            
            <TextField
              label="Email"
              value={email}
              onChange={(e)=>this.setState({email:e.target.value})}
              margin="normal"
              variant="outlined"
            />
            <br/>
            <br/>
            <TextField
              label="Password"
              value={password}
              type="password"
              onChange={(e)=>this.setState({password:e.target.value})}
              margin="normal"
              variant="outlined"
            />
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={this.signIn}>
              Sign In
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="primary" onClick={this.signIn}>
              Sign Up
            </Button>
            <div style={{height:80}}/>
          </Card>
      
        </div>
        
        </div>
      </div>
    )
  }
}

export default App;