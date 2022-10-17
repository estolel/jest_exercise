
import '../App.css';
import {Component} from "react";
import Account from './Account';

class App extends Component{

  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            users: json,
            isLoading: false
          });
        }).catch((error) => this.setState({ error, isLoading: false }))
  }

  componentDidMount(){
    this.fetchUsers();
  }

  render(){
    const {isLoading, users, error} = this.state
    return ( 
      <div>
        <h1 style={{marginLeft: 10}}>Display Account Details</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map((user) =>{
            return <Account user = {user} />

          })) :
          (<h3>Fetching Users</h3>)}  
      </div>
    )
  }

}

export default App;