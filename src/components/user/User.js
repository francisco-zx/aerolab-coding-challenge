import React from 'react';

export default class User extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          'user': {}
        }
    }

    componentWillMount(){
      fetch(
        'https://aerolab-challenge.now.sh/user/me',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.apiToken
          }
        }
      )
      .then(response => response.json())
      .then(user => {
        localStorage.setItem('userName',user.name);
        localStorage.setItem('userPoints',user.points);

      });
    }

    render() {
        return ('');
    }
}
