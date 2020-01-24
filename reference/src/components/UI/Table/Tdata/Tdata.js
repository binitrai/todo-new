import React from "react";
import editicon from "../../../../assets/images/edit.png"
import classes from "./Tdata.css"

function tdata(props) {
    let {data} = props
    let id = data.id;
    let keys = Object.keys(data);
    keys.shift();
    return keys.map(item => {
         let content = ""
         if (typeof data[item] === "object") {
             content = <span className={classes[data[item].style]}>{data[item].text}</span>
         } else {
             content = data[item];
         }
        return (
            <td 
                key={id + item}
            > 
                {content}
                {props.editableTh.indexOf(item) !== -1 &&
                  <span 
                    className={classes.edit_icon}
                    onClick={() => props.editHandeler(id, item)}
                  >
                        <img src={editicon} alt="Edit icon"/>
                    </span>
                }
            </td>
        )
    })
}
export default tdata;
