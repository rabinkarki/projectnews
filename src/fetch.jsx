import React, { useEffect, useState } from "react";
import "./index.css"
const Fetch = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let api = "https://jsonplaceholder.typicode.com/users";
      try {
        const res = await fetch(api);
        const data = await res.json();
        setUser(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {user.map((curUser) => {
            const { id, name, email } = curUser;
            const { street, city, zipcode } = curUser.address;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  {street}, {city}, , {zipcode}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Fetch;
