import React, { Component } from 'react';



class ArticleModal extends Component {

  componentDidMount(){
    document.getElementById("modalBody").innerHTML = this.props.article.articleBody;

}

    render() {
        return (

         
            <div classNameName="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="full-screen" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                  
                    <h5 className="modal-title" id="exampleModalLongTitle">{this.props.article.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body" id ="modalBody" >
                    {/* {this.props.article.articleBody} */}
                  </div>
                  <div className="modal-footer">
                    <button onClick = {this.props.close} type="button" className="btn btn-primary mr-auto" data-dismiss="modal">Close</button>

                    </div>
                  </div>
                </div>
              </div>
            
        );
    }
}

export default ArticleModal;