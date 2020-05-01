import React from 'react';
import Post from './post';

const axios = require('axios');


class SinglePost extends React.Component {
    state = {}
    search = (e) => {
        return e.userId === this.state.searchId
    }

    handleSearch = (e) => {
        var self = this;
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                self.setState({
                    data: response.data.filter(self.search),
                })
            })
            
    }

    handleChange = (e) => {
        this.setState({
            searchId: parseInt(e.target.value)

        })
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 mt-5">
                        <div className="input-group mb-3">
                            <input onChange={this.handleChange} id="searchId" type="number" className="form-control" placeholder="Enter user id..." aria-label="Enter user id..." aria-describedby="button-addon2"></input>
                            <div className="input-group-append">
                                <button onClick={this.handleSearch} className="btn btn-outline-secondary" type="button" id="button-search">Search by userId</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="d-flex justify-content-center flex-column">
                    <h2 className="ml-3 text-center">This is my filtered list of Post</h2>
                    {this.state.data && this.state.data.map(item =>
                        <>
                            <Post key={item.id} id={item.id} title={item.title} body={item.body} userId={item.userId} />
                        </>
                    )}
                </div>


            </>
        );
    }
}

export default SinglePost;