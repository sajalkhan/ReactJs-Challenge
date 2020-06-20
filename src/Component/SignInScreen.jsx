import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//Redux connect
import { connect } from 'react-redux';
import { loginAction } from '../Action/loginAction';

class SigninScreen extends Component {

    constructor()
    {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {

        const { username, password } = this.state;

        const updateData = (e) => {
            this.setState({ ...this.state, [e.target.name]: e.target.value })
        }

        if (this.props.isAuthenticated) {
            return <Redirect to='/homePage' />
        }

        const submitHandler = (e) => {
            e.preventDefault();
            this.props.loginAction(username, password);
        }

        return (
            <div className="form">
                <form onSubmit={submitHandler} >
                    <ul className="form-container">
                        <li>
                            <img className="logo" src={process.env.PUBLIC_URL + '/images/avengers-logo.png'} alt="logo" />
                        </li>
                        <li>
                            <label htmlFor="name">
                                Name
                    </label>
                            <input type="text" name="username" placeholder="User Name" required value={username} onChange={(e) => updateData(e)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" required value={password} onChange={(e) => updateData(e)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className="button btn-primary">Signin</button>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.loginLogoutState.isAuthenticated
    }
}

export default connect(mapStateToProps, { loginAction })(SigninScreen);