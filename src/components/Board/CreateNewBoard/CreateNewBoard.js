import React, {useState}from "react";
import classes from "./CreateNewBoard.module.css";
import d from "../../UI/index.module.css";
import {cn} from "../../../utils/utils";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import i18 from "../../../services/i18.services";

function CreateNewBoard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const isDisabled = (title !== "" && description !=="") ? false : true;
    const clickHandeler = () => {
        props.create(title, description);
        setTitle("");
        setDescription("");
    }
    return (
        <section className={classes.NewBoard}>
            <h2>{props.heading}</h2>
            <div className={classes.InputContainer}>
                <Input 
                    value={title} 
                    onChangeHandeler={(e) => setTitle(e.target.value)} 
                    placeholder={i18.titleLable}
                />
            </div>
            <div className={classes.InputContainer}>
                <Input 
                    value={description} 
                    onChangeHandeler={(e) => setDescription(e.target.value)} 
                    placeholder={i18.description}
                />
            </div>
            <div className={cn(d.PullRight, classes.InputContainer)}>
                <Button
                    btnType="AutoWidth" 
                    name="createBoard"
                    clicked={clickHandeler}
                    disabled={isDisabled}
                >
                    {i18.create}
                </Button>
                <Button
                    btnType="AutoWidth" 
                    name="Cancel"
                    classNames = {d.MarginLSM}
                    clicked={props.cancel}
                >
                    {i18.cancel}
                </Button>
            </div>

        </section>
    )
}
export default CreateNewBoard;