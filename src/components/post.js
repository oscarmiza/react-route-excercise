import React from 'react';

class Post extends React.Component {
    state = {  }
    render() {
        return (
            <>
            <div key={this.props.id} className="col-9 mx-auto mt-2">
            <div className="card">
                <div className="card-header">
                    {this.props.title}
                </div>
                <div className="card-body">
                    <h6>{this.props.id}</h6>
                    <p className="card-text"> {this.props.body}
                    </p>
                </div>
            </div>
        </div>
        </>
        );
    }
}

export default Post;