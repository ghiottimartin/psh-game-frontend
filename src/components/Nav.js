import React from "react";
import { useDispatch } from 'react-redux';

//Actions
import { downloadCsv } from "../actions/StatActions";

function Nav() {

    const dispatch = useDispatch();

    /**
     * Downloads the report as a csv.
     * 
     * @param {SyntheticBaseEvent} e 
     */
    const csv = (e) => {
        e.preventDefault();
        dispatch(downloadCsv());
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">PSH Game</a>
            <form className="form-inline" onSubmit={(e) => csv(e)}>
                <button className="btn btn-outline-success" type="submit">CSV</button>
            </form>
        </nav>
    )
}

export default Nav;