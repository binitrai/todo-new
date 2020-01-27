import React, {useEffect, useState}from "react";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";
import i18 from "../../services/i18.services";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Comments from "../../components/Board/Comments/Comments";
import d from "../../components/UI/index.module.css";
import {getStatus} from "../../utils/utils";
import Select from "../../components/UI/Select/Select";

function TaskContent(props) {
    const {
        taskId, 
        getTaskWithComments,
        userId,
        boardId,
        tasks,
        cancle
    } = props;


    const [commentText, setComment] = useState("");
    const isDisabled = commentText !== ""  ? false : true;
    let taskStatus = tasks === null ? 0 : tasks.status;
    const [selectvalue, setSelectValue] = useState(taskStatus);
    const clickHandeler = () => {
        props.createComment(taskId, userId, commentText, boardId);
        setComment("");
    }
    useEffect(() => {
        getTaskWithComments(taskId);
        setSelectValue(taskStatus);
    }, [getTaskWithComments, taskId, taskStatus]);

    const selectHandeler = (val) => {
        setSelectValue(val);
        props.updateTaskStatus(val, taskId, boardId);
    }

    return (
        <section>
            {tasks === null ? "loading" : 
                <>
                    <h1>{tasks.title}</h1>
                    <p>{tasks.description}</p>
                    <div className={d.MarginBSM}>
                        Status : <Select options={getStatus()} value={selectvalue}  onChange={e => selectHandeler(e.target.value)}/>
                    </div>
                    <Comments data={tasks.comment} />
                    <div className={d.MarginBSM}>
                        <Input 
                            value={commentText} 
                            onChangeHandeler={(e) => setComment(e.target.value)} 
                            placeholder={i18.writeComment}
                        />
                    </div>
                    <div className={d.PullRight}>
                    <Button
                        btnType="AutoWidth" 
                        name="postComment"
                        clicked={clickHandeler}
                        disabled={isDisabled}
                    >
                        {i18.postComment}
                    </Button>

                    <Button
                        btnType="AutoWidth" 
                        name="postComment"
                        clicked={cancle}
                        classNames = {d.MarginLSM}
                    >
                        {i18.close}
                    </Button>
                    </div>
                </>
            }
           
        </section>
    )
}

const mapStateToProps = state => {
    return {
        loading : state.loading,
        tasks : state.taskContent,
        userId : state.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateTaskStatus : (val, taskId, boardId) => dispatch(actionCreators.updateTaskStatus(val, taskId, boardId)),
        getTaskWithComments : (taskId) => dispatch(actionCreators.getTaskWithComments(taskId)),
        createComment : (taskId, createdBy, text, boardId) => dispatch(actionCreators.createComment(taskId, createdBy, text, boardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContent);