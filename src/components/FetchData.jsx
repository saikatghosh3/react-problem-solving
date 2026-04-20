import React, { useState, useEffect } from 'react';


const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [userId]);

 
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user found.</p>;

  return (
    <div>
      <h2>User: {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};


const FetchData = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserProfile userId={1} />
    </div>
  );
};

export default FetchData;