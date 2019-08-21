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
        <div style={{width:"40%",height:400,marginTop:100,marginLeft:"30%",textAlign:'center'}}>
          <div style={{border:"3px solid gold"}}>
          <Card>
            <h2>Sign In</h2>
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
            <br />
            <br/>
            <Button variant="contained" color="primary" onClick={this.signIn}>
              Sign In
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