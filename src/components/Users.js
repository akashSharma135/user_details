import classes from "./Users.module.css";

function Users({ users, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    // View Table to users
    <div>
      <table className={classes.list}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <tbody key={index}>
            <tr>
              <td>{user.id}</td>
              <td>
                <img src={user.avatar} alt="" />
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Users;
