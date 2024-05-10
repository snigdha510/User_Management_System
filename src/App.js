import React, { useState, useEffect } from 'react';
import { fetchUsers, searchUsers } from './services/UserService'; 
import UserTable from './components/UserTable';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleSearch = async () => {
    try {
      const searchData = await searchUsers(searchTerm);
      setUsers(searchData);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>User Data Management System</h1>
      </header>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search by name..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="table-container">
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default App;
