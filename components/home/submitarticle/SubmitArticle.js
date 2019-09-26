import React from 'react';
import axios from 'axios';
import {markdown} from 'markdown';

class SubmitArticle extends React.Component {

state = {
    
    article: {
    title: '',
    date: '',
    authorFirstName: '',
    authorlastName: '',
    articleBody: '',
    isArticle: true,
    unformattedBody: ''
}

  }

  submitArticleHandler = (event) => {
      event.preventDefault();
      console.log(this.state);
      axios.post('http://localhost:4200/dataeng/submitArticle',this.state.article)
      .then(Response => {
          //navigate to thank you page here
          this.props.history.push("/thank-you");

      }).catch(error => { console.log(error);
      })

  }

  ChangeHandler = (event) => {

    const key = event.target.name;
    const value = event.target.value;
    const tempArticle = {...this.state.article}
    console.log(value);
    tempArticle[key]= value;
    this.setState(
        {
            article:tempArticle
        }
    )

}

TextChangeHandler = (event) => {

    const key = event.target.name;
    const value = event.target.value;
    const tempArticle = {...this.state.article}
    console.log(key,value);
    tempArticle.unformattedBody = value;
    tempArticle.articleBody = markdown.toHTML(value);
    this.setState(
        {
            article:tempArticle
        }
    )

}

render() {
    return (
                     <header>
                        <body className="text-center">
                            <form className="container" onSubmit={this.submitArticleHandler}>
                                <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                                <h1 className="h3 mb-3 font-weight-normal">Please Submit Article Or Script</h1>
                                <label for="title" className="sr-only">Article Title </label>
                                <input type="text" id="title" className="form-control" name="title" value = {this.state.article.articleTitle} onChange = {this.ChangeHandler} placeholder="Title" required="" autofocus="" /><br></br>
                                <label for="date" className="sr-only">Submit Date</label>
                                <input type="date" id="date" className="form-control" name="date" value = {this.state.date} placeholder="Submit Date" onChange = {this.ChangeHandler} required="" autofocus="" /><br></br>
                                <label for="authorFirstName" className="sr-only">Author FirstName</label>
                                <input type="text" id="authorFirstName" className="form-control" name="authorFirstName" value = {this.state.article.authorFirstName} placeholder="Author First Name" onChange = {this.ChangeHandler} required="" autofocus="" /><br></br>
                                <label for="authorlastName" className="sr-only">Author LastName</label>
                                <input type="text" id="authorlastName" className="form-control" name="authorlastName" value = {this.state.article.authorlastName} placeholder="Author Last Name" onChange = {this.ChangeHandler} required="" />
                                <label for="articleBody" className="sr-only">Article Body</label>
                                <textarea rows="10" cols="50" type="textarea" id="articleBody" className="form-control" name="articleBody" value = {this.state.article.unformattedBody} placeholder="Body" onChange = {this.TextChangeHandler} required="" />
                                <div className="checkbox mb-3">
                                    <label>
                                    <div onChange={event => this.ChangeHandler(event)}>
                                        <input type="radio" name="isArticle" value="false" /> Script
                                        <input type="radio" name="isArticle" value="true" /> Article
                                    </div>
                                    </label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                                <p className="mt-5 mb-3 text-muted">© 2019</p>
                            </form>


                        </body>
                    </header>
                    );

        }
    }

    export default SubmitArticle;