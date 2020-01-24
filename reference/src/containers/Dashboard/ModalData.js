import React from "react";
import classes from "./ModalData.css";
function ModalData (props) {

    const [data, setData] = React.useState(props.data);
    return (
        <div className={classes.modalData}>
            <h1>Edit Quantity</h1>
            <div className={classes.inputContainer}>
                <input type="number" value={data} onChange={(e) => setData(e.target.value)} />
            </div>
            <div className={classes.btnContainer}>
                <button className={classes.save} type="button" onClick={() => props.saveDataHandeler(data)}>Save</button>
                <button className={classes.cancel} type="button" onClick={props.closeModal}> Close</button>
            </div>
        </div>
    )
}

export default ModalData;