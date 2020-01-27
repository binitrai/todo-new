import React from "react";
import classes from "./Comments.module.css";

function Comments({data}) {
    return (
        <>
            {data === null ? null :
                <section className={classes.Comments}>
                    {data.map(item => <Comment key={item.id} data={item} />)}
                </section>
            }
        </>
    )
}

export default Comments;
function Comment ({data}) {
    return (
        <section>
            <span className={classes.userInfo}>{data.userInfo}</span> : {data.text}
        </section>
    )
}