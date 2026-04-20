// simple table data 
import React from 'react'

const SimpleTable = () => {

   const users = [
    { id: 1, name: 'Arif', email: 'arif@example.com', role: 'Admin' },
    { id: 2, name: 'Sumi', email: 'sumi@example.com', role: 'Editor' },
    { id: 3, name: 'Rakib', email: 'rakib@example.com', role: 'User' },
    { id: 4, name: 'Nila', email: 'nila@example.com', role: 'User' },
  ];
  return (
    <div>
       <div style={{padding:'20px'}}>
        <h2>User List Table</h2>
        <table border = "1" cellPadding = "10" style={{width:"100%", borderCollapse: 'collapse'}}>
            <thead>
                <tr style={{backgroundColor: "#f2f2f2"}}>
                <th>Id</th>
                <th>name</th>
                <th>email</th>
                <th>role</th>
                  </tr>  

            </thead>

            <tbody>
               {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
            </tbody>
            </table>

       </div>
    </div>
  )
}

export default SimpleTable
