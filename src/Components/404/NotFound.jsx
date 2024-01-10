import { Link } from "react-router-dom";

import './NotFound.scss'

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="container">
                <h1>Oops! You seem to be lost.</h1>
                <div className="not-found-img-wrapper"><img src="../undraw_page_not_found_re_e9o6.svg" alt="" /></div>
                <Link to='/'>Navigate Home</Link>
            </div>
        </div>
    )
}