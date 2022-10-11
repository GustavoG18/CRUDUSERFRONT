import axios from "axios";
import { useEffect, useState } from "react";

export const ListUsers = () => {
  const [state, setState] = useState({
    users: []
  });
  
  useEffect(() => {
    const getData = () => {
      axios.get("http://localhost:3001/api/listUsers").then((response) => {
        setState({
          users: response.data,
        });
      }).catch((error) => {
        console.error(error);
      })
    }
    getData();
  }, [])

  return (
    <div>
      <div>Usuario Registrados</div>
      { 
        state.users.map((user) => {
          return (
            <div key={user.id} style={{ border: "1px solid red", width: "200px", display: "flex", flexDirection:"column", padding: "10px" }}>
              <h3>Name: {user.name}</h3>
              <span>Last Name: {user.lastname}</span>
              <span>Age: {user.age}</span>
              <span>Type ID: {user.typeId}</span>
              <span>ID: {user.id}</span>
            </div>
          )
        })
      }
    </div>

  );
};