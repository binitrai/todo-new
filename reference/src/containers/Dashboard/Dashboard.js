import React, {Component} from "react";
import classes from "./Dasboard.css";
import {getGroupedData} from "./data.js";
import Table from "../../components/UI/Table/Table";
import Modal from "../../components/UI/Modal/Modal";
import ModalData from "./ModalData.js";
import * as actionCreators from "../../store/actions/actionCreators";
import {connect} from "react-redux";

class Dashboard extends Component{
   
    editDataSet = (id, key) => {
        this.props.onEditData(id, key);
    }
    getHeaders = (data, role) => {
        let headers = role === "manager" ?  [...data.headers] : [...data.headers_chef];
        headers.unshift("");
        return headers;
    }
    closeModal =() => {
        this.props.onModalChanged(false);
    }

    saveData = (data) =>  {
        this.props.onDataChanged(Number(data));
        this.props.onModalChanged(false);
    }
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        return (
            <div className={classes.Dashboard}>
                <Modal show={this.props.showHideModal} modalClosed={this.closeModal}>
                    {this.props.showHideModal && 
                        <ModalData 
                            data={this.props.editInput} 
                            saveDataHandeler= {this.saveData}
                            closeModal= {this.closeModal} 
                        />
                    }
                </Modal>
                {!this.props.loading ?
                    <Table 
                        header={this.getHeaders(this.props.gridData, this.props.role)}
                        data={getGroupedData(this.props.gridData.data, this.props.role)}
                        editHandeler={this.editDataSet}
                        editableTh={["vendor_1", "vendor_2"]}
                /> : "Loading"
                }
                
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        gridData : state.gridData,
        showHideModal : state.showHideModal,
        editInput : state.editInput,
        loading : state.loading,
        role : state.role,
        auth : state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onDataChanged : (qty) => dispatch(actionCreators.savQuantity(qty)),
      onModalChanged : (val) => dispatch(actionCreators.modalAction(val)),
      onEditData     : (id, key) => dispatch(actionCreators.edit(id, key)),
      fetchData      : () => dispatch(actionCreators.fetchData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

