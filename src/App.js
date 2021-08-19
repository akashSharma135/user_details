import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./components/Users";
import classes from "./App.module.css";
import Pagination from "./components/Pagination";

function App() {
  // setting the state of data of users
  const [users, setUsers] = useState([]);
  // setting the state of data loaded or not from API
  const [loading, setLoading] = useState(true);
  // setting the current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Fetching the data from API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      console.log(currentPage);
      const res = await axios.get(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      setUsers(res.data);
      setLoading(false);
    };
    fetchUsers();
  }, [currentPage]);

  return (
    <div className={classes.container}>
      <h1 className="text">Users List</h1>

      {/* Users Component */}
      <Users users={users.data} loading={loading} />

      {/* Pagination Component */}
      <Pagination
        onRightClick={() => {
          if (currentPage < users.total_pages) {
            setCurrentPage(currentPage + 1);
          }
        }}
        onLeftClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
        currentPage={currentPage}
        total_pages={users.total_pages}
      />
    </div>
  );
}

export default App;
