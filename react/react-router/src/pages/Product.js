import React from "react";
import { Link } from "react-router-dom";
import {
  Route,
  Switch,
  useParams,
  useHistory,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";

export default function Product() {
  const { id } = useParams();
  const history = useHistory();
  const gotoabout = () => {
    history.push("/about");
  };

  if (id === "3") {
    return <Redirect to="/" />;
    // back skip product/3
  }
  /*
  Redirect

  Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.

  whereas History

  push function Pushes a new entry onto the history stack
 */

  return (
    <div>
      {console.log(id)}
      <h3>ID: {id}</h3>
      {id ? (
        <>
          <div>Peoduct ID : {id}</div>
          <button onClick={gotoabout}>about page</button>
        </>
      ) : (
        <>
          <div>Product</div>
          <ul>
            <li>
              <Link to="/product/1">Product 1</Link>
            </li>
            <li>
              <Link to="/product/2">Product 2</Link>
            </li>
            <li>
              <Link to="/product/3">Product 3</Link>
            </li>
          </ul>

          {/* <div>
            <Switch>
              <Route path="/product/1">Product 1</Route>
              <Route path="/product/2">Product 2</Route>
              <Route path="/product/3">Product 3</Route>
            </Switch>
          </div> */}
        </>
      )}
    </div>
  );
}
