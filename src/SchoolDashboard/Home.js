import React, { Component } from 'react'
import getSubCollection from '../Database/getSubCollection'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { db } from '../firebase';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontFamily:"inherit"
    },
    body: {
        fontSize: 14,
        fontFamily:"inherit"
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export class Home extends Component {

    state = {
        student: null,
    }

    getData = () => {
        getSubCollection("UIDS", this.props.uid, "Students").then(snap=>{
            this.setState({student:snap})
        })
    }

    componentDidMount() {
        this.getData();
    }

    handleConfirm = (id) => {
        db.collection("UIDS").doc(this.props.uid).collection("Students").doc(id).update({
            confirm: true,
        })
    }

    handleDelete = (id,item) => {
        db.collection("UIDS").doc(this.props.uid).collection("Trash").doc(id).set(item)
        db.collection("UIDS").doc(this.props.uid).collection("Students").doc(id).delete()
        this.getData();
    }

    render() {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>SNO.</StyledTableCell>
                                <StyledTableCell >First Name</StyledTableCell>
                                <StyledTableCell >Last Name</StyledTableCell>
                                <StyledTableCell >DOB</StyledTableCell>
                                <StyledTableCell ></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.student &&
                                this.state.student.map(item => {
                                    return (
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                1
                                            </StyledTableCell>
                                            <StyledTableCell >
                                                {item.first_name}
                                            </StyledTableCell>
                                            <StyledTableCell >
                                                {item.last_name}
                                            </StyledTableCell>
                                            <StyledTableCell >
                                                {item.dob}
                                            </StyledTableCell>
                                            <StyledTableCell >
                                                <Button variant="contained" onClick={()=>{this.handleConfirm(item.id)}} color="primary" disabled={disableButton(item.confirm)} >
                                                    CONFIRM
                                                </Button>
                                                <Button onClick={()=>{this.handleDelete(item.id,item)}}>
                                                    DELETE
                                                </Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default Home

function disableButton(confirmed){
    if(confirmed){
        return true
    }
    else{
        return false
    }
}