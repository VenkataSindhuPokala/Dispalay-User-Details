import React from "react";
// import user from './data.js';
export default function MyTable({user}) {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>email</th>
          <th>gender</th>
          <th>ip_address
          </th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        {user.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.ip_address}</td>
            <td><img src={item.image}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
