import React, { useEffect, useState } from 'react'

const MediumTable = () => {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            }) // Ekhane .then() sesh
    }, []); // <--- Dependency array ekhane hobe, useEffect bondho hobar agey

    if (loading) {
        return <h3 style={{ textAlign: 'center' }}>Loading Data...</h3>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>User list</h2>
            <table border="1" cellPadding="12" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#333', color: '#fff' }}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MediumTable