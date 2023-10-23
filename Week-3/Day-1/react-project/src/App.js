import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // Removed unnecessary imports and updated the import paths
import Login from './Components/Login'; // Updated import paths
import Signup from './Components/Signup'; // Updated import paths

function App() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSignup = (email, password) => {
    setUsers([...users, { email, password }]);
  };

  const handleLogin = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setLoggedInUser(user);
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      </Routes>

      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>

      {loggedInUser && <div>Welcome, {loggedInUser.email}!</div>}
    </Router>
  );
}

export default App;
