import React, {useState, useEffect}from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";
import i18 from "../../services/i18.services";
import s from "./Board.module.css";
import d from "../../components/UI/index.module.css";
import {cn, getStatus} from "../../utils/utils"; 
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import CreateNewBoard from "../../components/Board/CreateNewBoard/CreateNewBoard";
import Tasks from "./Tasks/Tasks";
import Select from "../../components/UI/Select/Select";


function Board(props) {
    const boardId = props.match.params.boardId;
    const [modalState, setModalState] = useState(false);
    const [selectvalue, setSelectValue] = useState(0);
    const filter_params = getStatus();
    filter_params.unshift("Please Select");
    
    const selectHandeler = (val) => {
        setSelectValue(val);
        //props.updateTaskStatus(val, taskId, boardId);
    }
    const changeModalState = () => {
        setModalState(!modalState);
    }
    const create = (title, description) => {
        props.createTask(title, description, boardId, props.userId);
        changeModalState();
    }

    const {getTasks} = props;

    useEffect(() => {
        getTasks(boardId);
    }, [getTasks, boardId]);

    if (boardId === "") {
        return <Redirect to="/dashboard" />;
    } 

    return (
        <>
            <section>
                <h1 className={cn(d.inlineBlock, d.marginNone)}>Board : {props.boardData[boardId].title}</h1> 
                <div className= {cn(d.PullRight, d.inlineBlock)}>
                    <span>
                        {i18.filterTasks} 
                        <Select 
                            options={filter_params} 
                            value={selectvalue}  
                            onChange={e => selectHandeler(e.target.value)}
                        />
                    </span>
                    <Button 
                            btnType="AutoWidth" 
                            name="createNewTask"
                            clicked={changeModalState}
                            classNames={d.MarginLMD}
                        >
                            {i18.createNewTask}
                    </Button>
                </div>
            </section>
            <div className={s.Board}>
                <Modal show={modalState} modalClosed={changeModalState}>
                    <CreateNewBoard cancel={changeModalState} create={create} heading={i18.createNewTask}/>
                </Modal>
                {props.loading ? i18.loading : 
                    <Tasks data={props.tasks} boardId={boardId} filterValue={selectvalue}/> 
                }
            </div>
        </>
    )
    
}

const mapStateToProps = state => {
    return {
        loading : state.loading,
        boardData : state.boardData,
        tasks : state.tasks,
        userId : state.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTasks : (boardId) => dispatch(actionCreators.getTasks(boardId)),
        createTask : (title, description, boardId, userId) => dispatch(actionCreators.createTask(title, description, boardId, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);