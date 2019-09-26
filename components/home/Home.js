import React, { Component } from 'react';
import Dashboard from './dashboard/Dashboard';
import SubmitArticle from './submitarticle/SubmitArticle';
import { Route, Link } from 'react-router-dom';


class Home extends Component {

    state = {
        student:{}
    }

    componentDidMount(){
        const loggedInStudent = JSON.parse(localStorage.getItem("loggedInStudent"));
        this.setState(
            {
            student: loggedInStudent
            }
        )
    }
    render() {

        return (
            <div>
                         
                <br></br>
                <br></br>
                <br></br>
                <h1>Welcome Home </h1>
                <div className="container-fluid home-margin-top-less-200px">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/home/dashboard">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                        Dashboard <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/home/submitarticle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                        Submit Articles <span className="sr-only">(current)</span>
                                    </Link>
                                </li>



                            </ul>


                        </div>
                    </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4"><div className="chartjs-size-monitor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}><div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}><div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: '0', top: '0' }}></div></div><div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}><div style={{ position: 'absolute', width: '200%', height: '200%', left: '0', top: '0' }}></div></div></div>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">{this.state.student.firstName}'s Profile</h1>
                        </div>
                        <Route path='/home/dashboard' component={Dashboard}/>
                        <Route path='/home/submitarticle' component={SubmitArticle}/>
                    </main>
                 
                </div>
            </div>

            </div>
        );
    }
}

export default Home;