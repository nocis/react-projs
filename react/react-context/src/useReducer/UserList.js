import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "USERS_REQUEST":
      return { ...state, loading: true };
      break;
    case "USERS_SUCCESS":
      return { ...state, users: action.data, loading: false, error: "" };
      break;
    case "USERS_FAIL":
      return { ...state, error: action.err, loading: false };
      break;
    default:
      return state;
  }
};

export default function UserList() {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
    users: [],
    error: "",
  });

  const loadUsers = async () => {
    dispatch({ type: "USERS_REQUEST" });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch({ type: "USERS_SUCCESS", data: [...data] });
    } catch (error) {
      dispatch({ type: "USERS_FAIL", err: error.message });
    }
  };

  React.useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <button onClick={() => loadUsers()}>Reload</button>
      {state.loading ? (
        <div>Loading...</div>
      ) : state.error ? (
        <div>Error:{state.error}</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Web</th>
            </tr>
          </thead>
          {state.users.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
          <tbody></tbody>
        </table>
      )}
    </div>
  );
}
