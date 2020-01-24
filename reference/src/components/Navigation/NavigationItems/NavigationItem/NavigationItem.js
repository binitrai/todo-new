import React from 'react';
import {connect} from "react-redux";
import classes from './NavigationItem.css';
import * as actionCreators from "../../../../store/actions/actionCreators";
import { useHistory } from 'react-router-dom'


const navigationItem = ( props ) => {
    let history = useHistory();
    const logout = (e) => {
        e.preventDefault();
        props.logout(() => {history.push("/"); window.location.reload()})
    }
    if (props.auth) {
        return (
            <li className={classes.NavigationItem}>
            <a 
                href={props.link}
                onClick={logout}
                className={props.active ? classes.active : null}>{props.children}</a>
        </li>
        )
    }
    return null;
}

const mapStateToProps = state => {
    return {
        auth : state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
      logout : (cb) => dispatch(actionCreators.logout(cb))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navigationItem);