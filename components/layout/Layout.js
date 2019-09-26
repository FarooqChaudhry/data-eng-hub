import React, { Component } from 'react';
import Header from '../header/Header';
import SignUp from '../signup/SignUp';
import {Route, withRouter} from 'react-router-dom';
import AboutUs from '../aboutus/AboutUs';
import ThankYou from '../thankyou/ThankYou'
import Home from '../home/Home'
import GeneralHome from '../generalHome/GeneralHome'
import Article from '../articles/Article';
import axios from 'axios';
import ArticleCard from '../articleCard/ArticleCard';


class Layout extends Component {

    state = {

        searchWord: '',
        articles: []
  
      }



      updateSearch = (event) => {
        this.setState(
          {
            searchWord : event.target.value
        }
        );
        // console.log("searchWord after updateSearch >>>>", this.state.searchWord);
      }
    
    
      

    getArticleBySearchWord =(event) => {
        // event.preventDefault();
         console.log("value in getArticleBySearchWord >>>>>",this.state.searchWord);
         axios
             .get(`http://localhost:4200/dataeng/findByWordSearch?searchWord=${this.state.searchWord}`,{
             }).then(
               (response ) => {
              const filteredarticles = response.data;
               if(filteredarticles){
                 this.setState({
                   articles:filteredarticles
                 }) 
               }
             }
             )
           }


    render() {
        let routes = (
            <React.Fragment>
            <Route exact path="/" component={GeneralHome}/>
            <Route exact path="sign-up" component={SignUp}/>
            </React.Fragment>
        );
            if (localStorage.getItem("loggedInStudent")){
                routes = (
                    <React.Fragment>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    </React.Fragment>
                )
            }


        return (
            <div>
                <Header {...this.props } getArticleBySearchWord={this.getArticleBySearchWord} updateSearch={this.updateSearch} searchWord={this.state.searchWord}/>
                {routes}
                {/* <Route exact path="/" component={SignUp}/>*/
                <Route  path="/sign-up" component={SignUp}/> }
                <Route  path="/about-us" component={AboutUs}/>
                <Route  path="/articles" component={() => <Article isArticle={true}/>} />
                <Route  path="/scripts" component={() => <Article isArticle={false}/>} />
                <Route  path="/search" component={() => <ArticleCard articles={this.state.articles}/>} />
                <Route  path="/thank-you" component={ThankYou}/>

                
            </div>
        );
    }
}

export default withRouter(Layout);