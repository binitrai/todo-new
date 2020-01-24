import React, {useEffect} from "react";
import {connect} from "react-redux";

import classes from './Login.css';
import * as actionCreators from "../../store/actions/actionCreators";
import {Redirect } from "react-router-dom";

function Login(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const submitHandeler = (e) => {
        e.preventDefault();
        props.onAuth(email, password);
    } 

    useEffect(() => {
        props.isLoggedIn();
    }, []);

    if (props.auth) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className={classes.main}>
            <p className={classes.sign}>Sign in</p>
            <form className={classes.form1} onSubmit={submitHandeler}>
                <input className={classes.un} type="text"  placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className={classes.pass} type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className={classes.submit} type="submit">Sign in</button>
                {props.authError && <p>Username or password is incorrect</p>}
            </form>      
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth : state.auth,
        authError : state.authError
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onAuth : (login, password) => dispatch(actionCreators.auth(login, password)),
      isLoggedIn : () => dispatch(actionCreators.authCheckState())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
