import React, {useState} from "react"; 
import Card from "../../../components/UI/Card/Card";
import i18 from "../../../services/i18.services"
import d from "../../../components/UI/index.module.css";
import {getStatus} from "../../../utils/utils";
import Button from "../../../components/UI/Button/Button";
import Modal from "../../../components/UI/Modal/Modal";
import TaskContent from "../../TaskContent/TaskContent"


function Tasks({data, boardId, filterValue}) {
    const [modalState, setModalState] = useState(false);
    const [taskId, setTaskId] = useState("");
    const changeModalState = () => {
        setModalState(!modalState);
    }

    const clickHandeler = (taskId) => {
        setTaskId(taskId);
        setModalState(true);
    }
    if (!data) {
        return (
            <h2>
                {i18.noTasks}
            </h2>
        )
    }
    let filteredTasks = Object.keys(data);
    if (+filterValue !== 0) {
        filteredTasks = filteredTasks.filter(item => {
            
            let task = data[item];
            return +task.status === (filterValue - 1);
        })
    }
   
    let tasks = filteredTasks.map(item => {
        let task = data[item];
        return (
            <Card key={task.id}>
                <h3>{task.title}</h3> 
                <p>{task.description}</p>
                <section className={d.CardFooter}>
                    <div><b>{i18.comments}: {task.commentCount}</b></div>
                    <div><b>{i18.status}: {getStatus(task.status)}</b></div>
                    <div>
                        <Button 
                            btnType="AutoWidth" 
                            name="viewTask"
                            clicked={(taskId) => clickHandeler(task.id)}
                        >
                            {i18.viewTask}
                        </Button>
                    </div>
                </section>
            </Card>
        )
    });
    return (
        <>
            <Modal show={modalState} modalClosed={changeModalState}>
                {taskId !== "" ? <TaskContent taskId={taskId} boardId={boardId} cancle={changeModalState}/> : null} 
            </Modal>
            <section>
                {filteredTasks.length ? tasks : <h1>{i18.notFoundInSelectedFilter}</h1>}
            </section>
        </>
    )
}
export default Tasks;