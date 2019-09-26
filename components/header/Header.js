import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '/Users/farooqchaudhry/Documents/student-portal/src/App.css';


const divStyle = {
  display: 'flex',
  flexDirection:'row'
};


class Header extends Component {

    state = {
      email:'',
      password: ''

    }


  signInChangeHandler = (event) => {
      const key = event.target.name;
      const value = event.target.value
      // console.log("key and value in change Handler before setting state>>>>",key,value)
      this.setState(
          {
            [key] : value
          // [event.target.name]: event.target.value
      }
      )
      // console.log("search word after change handler >>>",this.state.searchWord)
  }

   
        


  signInSubmitHandler = (event) => {
    event.preventDefault();
    const student = {email: this.state.email,
    password: this.state.password }

    axios.post('http://localhost:4200/dataeng/login',student)
    .then(response => {
      //storing the user's data inside the browser for future us
      const loginStudent = response.data;
      localStorage.setItem("loggedInStudent",JSON.stringify(loginStudent));
      //navigate to home page
      this.props.history.push("/");
    }).catch(error =>{

    })
  }


  signOut = () =>{
    localStorage.removeItem("loggedInStudent");
    this.props.history.push("/");
  }

    render() {

      let defaultSignInSignOut = (
        <form onSubmit={this.signInSubmitHandler} className="form-inline mt-2 mt-md-0">
        <input className="form-control mr-sm-2" name="email" value = {this.state.email} onChange = {this.signInChangeHandler} type="text" placeholder="Email" aria-label="Email"/>
        <input className="form-control mr-sm-2" name="password" value = {this.state.password} onChange = {this.signInChangeHandler} type="Password" placeholder="Password" aria-label="Password"/>
        <button className="btn btn-primary" type="submit">Sign In</button>
      </form>

      )

      let dafaultSearch = (
        <form  className="form-inline mt-2 mt-md-0"> 
        <input className="form-control mr-sm-2" name="searchWord" value = {this.props.searchWord} onChange = {this.props.updateSearch} ref={input => this.query=input} type="text" placeholder="Search" aria-label="Search"/>
        {/* <Link to="/search"> <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick= {this.props.getArticleBySearchWord} >Search</button></Link> */}
        
        <Link className="btn btn-primary" to="/search" onClick= {this.props.getArticleBySearchWord} >Search</Link>  
      </form>
      )

        




      if (localStorage.getItem("loggedInStudent")){
        defaultSignInSignOut = <button type="button" onClick={this.signOut} className="btn btn-primary">SignOut</button>
      }
        return (
            <header>
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <Link className="navbar-brand" to="/">DataEngHub</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        
{         



<div style={divStyle}>
<li className="nav-item active">
          <Link className="nav-link" to="/about-us" >About Us<span className="sr-only">(current)</span></Link>  
          </li>
          <li className="nav-item active">
          <Link className="nav-link" to="/articles" >Articles<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
          <Link className="nav-link" to="/scripts" >Scripts<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
          <Link className="nav-link" to="/sign-up" >Signup<span className="sr-only">(current)</span></Link>
          </li>
          {dafaultSearch}
          </div>
        /*
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li> */
        }
      </ul>
      {defaultSignInSignOut}
     

    </div>
  </nav>
</header>

        );
    }
}

export default Header;