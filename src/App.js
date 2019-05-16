import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import DataTable from './sections/table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'data': ''
    };
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/defunkt')
      .then(res => {
        console.log(res.data)
        this.setState({ 
          data: {
            avatar: res.data.avatar_url,
            login: res.data.login,
            blog: res.data.blog,
            bio: res.data.bio
          }
         });
      });
  }

  createDataTable() {
    console.log(this.state.data);
    return <DataTable github_data={ this.state.data } />;
  }

  render() {


    return (
      <div className="App">
        <div className="App-header">
          <h2>Title</h2>
        </div>
          <React.Fragment>
          {this.createDataTable()}
        </React.Fragment> 
      </div >
    );
  }
}

export default App;
