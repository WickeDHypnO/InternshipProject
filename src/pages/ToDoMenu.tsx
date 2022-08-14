import { Outlet, Link } from "react-router-dom";
import React from "react";

class ToDoMenu extends React.Component {
    render () {
        return <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">List</Link>
                    </li>
                    <li>
                        <Link to="/add">Add</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    }
}

export default ToDoMenu;