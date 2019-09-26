import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {

state = {
    student: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

  }

  signSubmitHandler = (event) => {
      event.preventDefault();
      axios.post('http://localhost:4200/dataeng/submitStudentDetails',this.state.student)
      .then(Response => {
          //navigate to thank you page here
          this.props.history.push("/thank-you");

      }).catch(error => {
      })

  }

  signUpChangeHandler = (event) => {

    const key = event.target.name;
    const value = event.target.value;
    const tempStudent = {...this.state.student}
    tempStudent[key]= value;
    this.setState(
        {
            student:tempStudent
        }
    )
/*     this.setState(
        {
        [event.target.name]: event.target.value
    }
    ) */
}

render() {
    return (
                     <header>
                        <body className="text-center">
                            <form className="container" onSubmit={this.signSubmitHandler}>
                                <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                                <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                                <label for="firstName" className="sr-only">First Name </label>
                                <input type="text" id="firstName" className="form-control" name="firstName" value = {this.state.student.firstName} onChange = {this.signUpChangeHandler} placeholder="First Name" required="" autofocus="" /><br></br>
                                <label for="lastName" className="sr-only">Last Name</label>
                                <input type="text" id="lastName" className="form-control" name="lastName" value = {this.state.lastName} placeholder="Last Name" onChange = {this.signUpChangeHandler} required="" autofocus="" /><br></br>
                                <label for="email" className="sr-only">Email address</label>
                                <input type="email" id="email" className="form-control" name="email" value = {this.state.student.email} placeholder="Email" onChange = {this.signUpChangeHandler} required="" autofocus="" /><br></br>
                                <label for="password" className="sr-only">Password</label>
                                <input type="password" id="password" className="form-control" name="password" value = {this.state.student.password} placeholder="Password" onChange = {this.signUpChangeHandler} required="" />
                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                                <p className="mt-5 mb-3 text-muted">© 2019</p>
                            </form>


                        </body>
                    </header>
                    );

        }
    }

    export default SignUp;