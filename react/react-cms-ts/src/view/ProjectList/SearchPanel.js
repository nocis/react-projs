import React from "react";

export default function SearchPanel({ param, setParam, users }) {
  return (
    <div>
      <input
        type="text"
        value={param.name}
        onChange={(evt) => setParam({ ...param, name: evt.target.value })}
      ></input>
      <select
        value={param.id}
        onChange={(evt) => setParam({ ...param, id: evt.target.value })}
      >
        <option value="">{"manager"}</option>
        {users.map((u, idx) => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>
    </div>
  );
}
