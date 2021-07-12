import React from "react";
import {
  cleanOBJ,
  useDebounce,
  useDebounceSimple,
  useMount,
} from "../../utils";
import List from "./List";
import SearchPanel from "./SearchPanel";

const api_url = process.env.REACT_APP_SERVER_URL;

export default function ProjectList() {
  let [param, setParam] = React.useState({
    name: "",
    id: "",
  });
  let [list, setList] = React.useState([]);
  let [users, setUsers] = React.useState([]);

  useMount(() => {
    (async () => {
      let res = await fetch(`${api_url}/users`);
      if (res.ok) {
        let data = await res.json();
        setUsers(data);
      }
    })();
    return () => {};
  });

  useDebounceSimple(() => {
    (async () => {
      const queryObj = cleanOBJ(param);
      let queryStr =
        `${api_url}/projects` + (Object.keys(queryObj).length ? "?" : "");

      for (let key in queryObj) {
        queryStr += `${key}=${queryObj[key]}`;
      }
      let res = await fetch(queryStr);
      if (res.ok) {
        let data = await res.json();
        setList(data);
      }
    })();
    return () => {};
  }, [param]);

  return (
    <>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </>
  );
}
