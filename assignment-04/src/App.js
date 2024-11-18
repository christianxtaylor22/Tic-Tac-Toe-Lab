import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';
import UserDetails from './UserDetails';

//used chat gpt for only the styling and suggestions for the add, update, and delete functions
function App() {

  const [users, setUsers] = useState([
    
  ]);

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/UserList" element = {<UserList users={users} deleteUser={deleteUser} />}>
          <Route path = "EditUser/:id" element = {<EditUser users={users} updateUser={updateUser} />}/>
          <Route path = "UserDetails/:id" element = {<UserDetails users={users} />}/>
        </Route>
        <Route path = "/AddUser" element = {<AddUser addUser={addUser} />}/>
      </Routes>
    </Router>
  );
}

export default App;
