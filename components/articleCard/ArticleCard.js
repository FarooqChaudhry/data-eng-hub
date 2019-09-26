import React, { Component } from 'react';
import ArticleModal from '../articles/ArticleModal';



class ArticleCard extends Component {
  state = {
    articles: [],
    selectedArticle: undefined
  }

  componentDidMount(){
    console.log(this.props);
    this.setState(
        {
            articles: this.props.articles
        }
    )
    
}

componentWillUpdate = () => {
  console.log("component will update props>>>>>",this.props)
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

    render() {
      console.log(this.props.articles, this.props.articles.length)

        if (this.props.articles !== undefined && this.props.articles.length !==0){
        const articles = this.props.articles.map((article) => (
    
                <div className="card  mb-3" >
                    <div className="card-header"> <h3> {article.title} </h3></div>
                    <div className="card-header"><span><strong> {article.authorFirstName} {article.authorlastName}</strong> </span> - {article.date}</div>
                    <div className="card-body">
                        <button className="btn btn-primary"   onClick  = {()=>this.updateSelectedArticle(article)} >View More</button>
                        
                    </div>
                </div>

        ));
        
        return (
            <div className="margintop">
            {articles}
                {this.state.selectedArticle !== undefined ? <ArticleModal article={this.state.selectedArticle} close={this.removeSelectedArticle}/> : ""}
                
            </div>

        )
    }
    console.log("no articles found")
    return <div className="margintop"><h1>Article not found </h1></div> 

}
}

export default ArticleCard