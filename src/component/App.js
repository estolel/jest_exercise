
import '../App.css';
import {Component} from "react";
import Account from './Account';

class App extends Component{

  state = {
    isLoading: true,
    inactive_users: [],
    active_users: [],
    error: null
  };

  fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            inactive_users: json,
            isLoading: false
          });
        }).catch((error) => this.setState({ error, isLoading: false }))
  }


  componentDidMount(){
    this.fetchUsers();
  }

  moveUser(changed_user, is_checked){
    const {inactive_users, active_users} = this.state
    const indexOfActiveUser = active_users.indexOf(changed_user)
    const indexOfInactiveUser = inactive_users.indexOf(changed_user)
    console.log("indexOfActiveUser: ")
    console.log(indexOfActiveUser)
    console.log("indexOfInactiveUser: ")
    console.log(indexOfInactiveUser)
    if(indexOfInactiveUser === -1 ){
        this.moveActiveUser(changed_user, indexOfActiveUser);
    }else{
        this.moveInactiveUser(changed_user, indexOfInactiveUser);
    }
    

    inactive_users.forEach(element => {
      console.log(element.username);
    });
    console.log("------Active Users:");
    active_users.forEach(element => {
      console.log(element.username);
    });
  }

  moveInactiveUser(changed_user, index){
    const {inactive_users, active_users} = this.state

    inactive_users.splice(index, 1);
    active_users.push(changed_user)

    this.setState({active_users: active_users})
    this.setState({inactive_users: inactive_users})
  }

  moveActiveUser(changed_user, index){
    const {inactive_users, active_users} = this.state

    active_users.splice(index, 1);
    inactive_users.push(changed_user)

    this.setState({active_users: active_users})
    this.setState({inactive_users: inactive_users})
  }

  render(){
    const {isLoading, active_users, inactive_users, error} = this.state
    inactive_users.forEach(element => {
      console.log(element.name)
    });
    return ( 
      <>
      <div>
        <h1 style={{marginLeft: 10}}>Display Active Account Details</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          active_users.map((user) =>{
            return <Account moveUser={this.moveUser.bind(this)} user={user} />

          })) :
          (<h3>Fetching Users</h3>)}  
      </div>

      <div>
        <h1 style={{marginLeft: 10}}>Display Inactive Account Details</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          inactive_users.map((user) =>{
            return <Account moveUser={this.moveUser.bind(this)} user={user} />

          })) :
          (<h3>Fetching Users</h3>)}  
      </div>
    </>
    )
  }

}

export default App;
