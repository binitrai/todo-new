import React from "react";
import AuxComp from "../../../../hoc/AuxComp/AuxComp";
import Tdata from "../Tdata/Tdata";
import classes from "./Rows.css";

function row(props) {
    const {data, index} = props;
    let rowClass = index % 2 === 0 ? "even" : "odd"
    return (
        <AuxComp>
            <tr className={classes[rowClass]}>
                <td className="first" rowSpan={data.length + 1}>{data[0].name}</td>
            </tr>
            {data.map((item, index) => {
                return (
                    <tr className={classes[rowClass]} key={index}>
                        <Tdata 
                            data={item.data} 
                            editHandeler={props.editHandeler}
                            editableTh={props.editableTh}
                        />
                    </tr>
                )
            })}
            
        </AuxComp>
    )
}

export default row;