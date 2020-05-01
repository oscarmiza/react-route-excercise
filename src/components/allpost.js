import React from 'react';

import Post from './post';
const axios = require('axios');

class AllPost extends React.Component {
    state = {}



    componentDidMount() {
        var self = this;
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success

                self.setState({
                    data: response.data,
                    visible: true
                })
                console.log(response.data);
                
            })
    }
    render() {
        return (
            <>
                <div className="">
                    <h2 className="ml-3 text-center">This is your list of Post</h2>
                    {this.state.data && this.state.data.map(item =>
                        <>
                            <Post key={item.id} id={item.id} title={item.title} body={item.body} userId={item.userId} search={this.state.searchUserId ? this.state.searchUserId : undefined} />
                        </>
                    )}
                </div>

            </>
        );
    }
}

export default AllPost;