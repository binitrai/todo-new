import React from "react";
import classes from "./Table.css";
import Thead from "./Thead/Thead";
import Row from "./Row/Row";


function table(props) {
    const {data, header} = props;
    return (
        <table 
            className={classes.tableContainer} 
            width="100%" 
            role="table" 
            aria-label="inventory stock"
        >
            <Thead data={header} />
            <tbody>
                {
                    Object.keys(data).map((item, index) => {
                        return <Row 
                                key={index} 
                                index={index} 
                                data={data[item]}
                                editHandeler={props.editHandeler}
                                editableTh={props.editableTh}
                            />
                    })
                }
            </tbody>
        </table>
    );
}
export default table;