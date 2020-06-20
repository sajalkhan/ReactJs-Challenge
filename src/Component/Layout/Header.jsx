import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import { logOut } from '../../Action/loginAction';

const Header = ({ auth: { isAuthenticated }, logOut }) => {

    if (!isAuthenticated) {
        return <Redirect to='/' />
    }
    const handleLogout = () => {
        logOut();
    }

    return (
        <Fragment>
            <header className="header">
                <div className="brand">
                    <img className="headerlogo" src={process.env.PUBLIC_URL + '/images/avengers-logo.png'} alt="headerlogo" />
                    <Link to="/homepage">Dashboard</Link> {'  '}
                    <Link to="/items">Item List</Link>
                </div>
                <div className="header-links">
                    {
                        isAuthenticated? 
                            <a href="#" onClick={handleLogout} >Logout</a>:
                            <Link to="/">Login</Link>
                    }
                </div>
            </header>
        </Fragment>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.loginLogoutState
    }
}

export default connect(mapStateToProps, { logOut })(Header);