import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/intro"}>Intro</Link>
          </li>
          <li>
            <Link to={"/counter"}>Counter</Link>
          </li>
          <li>
            <Link to={"/lifeCycle"}>LifeCycle</Link>
          </li>
          <li>
            <Link to={"/enfant"}>Formulaire</Link>
          </li>
          <li>
            <Link to={"/counter2"}>Counter2</Link>
          </li>
          <li>
            <Link to={"/todo"}>Todo List</Link>
          </li>
          <li>
            <Link
              to={{ pathname: `/article/${1}` }}
              state={{ title: "Page article" }}
            >
              Articles
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
