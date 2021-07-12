import React from "react";

export default function List({ list, users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>proj</th>
          <th>manager</th>
        </tr>
      </thead>
      <tbody>
        {list.map((l, idx) => (
          <tr key={idx}>
            <td>{l.name}</td>
            <td>
              {users.find((user) => user.id === l.personId).name || "unknown"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
