import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { CreateUser } from "./CreateUser/CreateUser"
import { ListUsers } from "./ListUsers/ListUsers"
import { DeleteUser } from "./DeleteUser/DeleteUser"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="create" element={<CreateUser />}></Route>
          <Route path="read" element={<ListUsers />}></Route>
          <Route path="delete" element={<DeleteUser />}></Route>
          <Route path="update" element={<h1>Update</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">create</Link>
          </li>
          <li>
            <Link to="/read">read</Link>
          </li>
          <li>
            <Link to="/delete">delete</Link>
          </li>
          <li>
            <Link to="/update">update</Link>
          </li>
          </ul>  
      </nav>  
      <Outlet />
    </div>
  )
}

export default App;
