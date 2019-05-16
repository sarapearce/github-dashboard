import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import DataTable from './sections/table';
import Footer from './sections/footer';
import Header from './sections/header';

// import BottomNavigation from '@material-ui/core/BottomNavigation';


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
    return (
      <DataTable github_data={this.state.data.login}{...this.state} />
    );
  }

  render() {
    return (
      <div className="App">

        <React.Fragment>
          <Header />
        </React.Fragment>

        <React.Fragment>
          {this.createDataTable()}
        </React.Fragment>
        
        <React.Fragment>
          <Footer />
        </React.Fragment>

      </div >
    );
  }
}

export default App;
