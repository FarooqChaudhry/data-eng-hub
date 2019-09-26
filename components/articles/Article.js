import React, { Component } from 'react';
import axios from 'axios';
import ArticleCard from '../articleCard/ArticleCard';


class Article extends Component {

    state = {
        articles: [],
        selectedArticle: undefined
    }


    updateSelectedArticle(article){
        console.log(article)
        this.setState ({
            selectedArticle: article
        })
        
    }

    removeSelectedArticle = () =>{
        this.setState({
            selectedArticle:undefined
        }
        )
    }


    componentDidMount(){
        console.log(this.props);
        axios
            .get(`http://localhost:4200/dataeng/findAllArticles?isArticle=${this.props.isArticle}`,{})
            .then(response => this.setState({articles: response.data}) )
    }

    render() {
        return  <ArticleCard articles={this.state.articles} />
  
    }
}

export default Article; 