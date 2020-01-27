import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import s from "./Dasboard.module.css";
import d from "../../components/UI/index.module.css"
import {cn} from "../../utils/utils"; 
import * as actionCreators from "../../store/actions/actionCreators";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import CreateNewBoard from "../../components/Board/CreateNewBoard/CreateNewBoard";
import Boards from "./Boards/Boards";
import i18 from "../../services/i18.services";

function Dashboard(props) {
   const {userId, getBoards} = props;
    useEffect(() => {
        getBoards(userId);
    }, [getBoards, userId]);

    const [modalState, setModalState] = useState(false);
    const changeModalState = () => {
        setModalState(!modalState);
    }
    const create = (title, description) => {
       props.createBoard(title, userId, description);
       changeModalState();

    }
    return (
        <>
            <section>
                <h1 className={cn(d.inlineBlock, d.marginNone)}>Dasboard : {props.userName}</h1> 
                <div className= {cn(d.PullRight, d.inlineBlock)}>
                    <Button 
                            btnType="AutoWidth" 
                            name="createNewBoard"
                            clicked={changeModalState}
                        >
                            {i18.createNewBoard}
                        </Button>
                </div>
            </section>
            <div className={s.Dashboard} >
                <Modal show={modalState} modalClosed={changeModalState}>
                    <CreateNewBoard cancel={changeModalState} create={create} heading={i18.createNewBoard}/>
                </Modal>
                {props.loading ? i18.loading : 
                    <Boards data={props.boardData} /> 
                } 
            </div>
        </>
    )
}



const mapStateToProps = state => {
    return {
        userId : state.userId,
        userName : state.userName,
        loading : state.loading,
        boardData : state.boardData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getBoards : (userId) => dispatch(actionCreators.getBoards(userId)),
        createBoard : (title, userId, description) => dispatch(actionCreators.createBoard(title, userId, description))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

