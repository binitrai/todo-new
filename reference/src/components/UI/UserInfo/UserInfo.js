import React from 'react';
import {connect} from "react-redux";
function UserInfo (props) {
    if (props.auth) {
        return (
            <div>User : {props.name}</div>
        )
    } else {
        return null;
    }
}
const mapStateToProps = state => {
    return {
        auth : state.auth,
        name : state.name

    }
}

export default connect(mapStateToProps)(UserInfo);
