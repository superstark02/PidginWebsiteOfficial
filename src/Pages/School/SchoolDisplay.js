import React, { Component } from 'react'
import MyAppBar from '../../Components/AppBar'
import Footer from '../../Components/Footer'
import MappBar from '../../Components/mAppBar'
import '../../CSS/Pages/Schools/SchoolDisplay.css'
import getDoc from '../../Database/getDoc'
import getSubCollection from '../../Database/getSubCollection'
import { FaStoreAlt, FaSwimmingPool, FaSnowflake, FaRobot, FaSkating } from 'react-icons/fa';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: "inherit",
        color: "white",
        padding: "6px 10px",
        fontFamily: "inherit",
        background: "transparent"
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#F4BD51",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#F4BD51",
        },
    },
}))(TableRow);

const StyledTableRowPoints = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#0abf8c80",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#0abf8c80",
        },
    },
}))(TableRow);

const StyledTableRowFees = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#78D6FA",
            borderRadius: "10px"
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#78D6FA",
        },
    },
}))(TableRow);

const StyledTableCellMoreInfo = withStyles((theme) => ({
    body: {
        fontSize: "inherit",
        padding: "6px 10px",
        fontFamily: "inherit"
    },
}))(TableCell);

const StyledTableRowMoreInfo = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export class SchoolDisplay extends Component {

    state = {
        school: null,
        school_images: null,
        school_admissions: null,
        school_points: null,
        more_info: null
    }

    componentDidMount() {
        getDoc("Schools", this.props.match.params.id).then(snap => {
            this.setState({ school: snap })
        })
        getSubCollection("Schools", this.props.match.params.id, "Images").then(snap => {
            this.setState({ school_images: snap })
        })
        getSubCollection("Schools", this.props.match.params.id, "Admissions").then(items => {
            this.setState({ school_admissions: items })
        })

        getSubCollection("Schools", this.props.match.params.id, "Fees").then(items => {
            this.setState({ school_fees: items })
        })

        getSubCollection("Schools", this.props.match.params.id, "Points").then(items => {
            this.setState({ school_points: items })
        })

        getSubCollection("Schools", this.props.match.params.id, "Other").then(items => {
            this.setState({ more_info: items })
        })
    }

    render() {
        return (
            <div>
                <MyAppBar />
                <div className="mobile" >
                    <MappBar />
                </div>
                {
                    this.state.school !== null ? (
                        <div>
                            <div>
                                <div className="images-container" >
                                    {
                                        this.state.school_images &&
                                        this.state.school_images.map(item => {
                                            return (
                                                item.images.map(image => {
                                                    return (
                                                        <img height="100%" src={image} />
                                                    )
                                                })
                                            )
                                        })
                                    }
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }} >
                                    <div></div>
                                    <div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: "center", flexWrap: "wrap" }} >
                                    <div className="school-display-container" >
                                        <h1>
                                            {this.state.school.name}
                                        </h1>
                                        <div>
                                            {this.state.school.address}
                                        </div>
                                        <div>
                                            <a href={this.state.school.location} >
                                                <button className="standard-button" style={{ margin: "10px 0px" }}  >Show On Map</button>
                                            </a>
                                        </div>

                                        <div>
                                            <h2>
                                                Vision
                                        </h2>
                                            <p>
                                                {this.state.school.vision}
                                            </p>
                                        </div>

                                        <div>
                                            <h2>
                                                Features
                                        </h2>
                                            <div style={{ width: "80%", display: "flex", flexWrap: "wrap", marginBottom: "10px", boxShadow: "0px 0px 10px #617ea369", borderRadius: "5px" }} >
                                                <div className="features-item" >
                                                    <div>
                                                        CBSE
                                                </div>
                                                    <div className="features-caption" >
                                                        Board
                                                </div>
                                                </div>
                                                <div className="features-item" >
                                                    <div>
                                                        <FaSnowflake />
                                                    </div>
                                                    <div className="features-caption" >
                                                        AC
                                                </div>
                                                </div>
                                                <div className="features-item" >
                                                    <div>
                                                        <FaStoreAlt />
                                                    </div>
                                                    <div className="features-caption">
                                                        Canteen
                                                </div>
                                                </div>
                                                <div className="features-item" >
                                                    <div>
                                                        <FaSwimmingPool />
                                                    </div>
                                                    <div className="features-caption">
                                                        Pool
                                                </div>
                                                </div>
                                                <div className="features-item" >
                                                    <div>
                                                        <FaRobot />
                                                    </div>
                                                    <div className="features-caption">
                                                        Robotics Lab
                                                </div>
                                                </div>
                                                <div className="features-item" >
                                                    <div>
                                                        <FaSkating />
                                                    </div>
                                                    <div className="features-caption">
                                                        Skating Arena
                                                 </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h2>
                                                Admissions
                                            </h2>
                                            <div>
                                                <div style={{ boxShadow: "0px 0px 10px #617ea369", borderRadius: "5px" }} >
                                                    {
                                                        this.state.school_admissions &&
                                                        this.state.school_admissions.map(item => {
                                                            return (
                                                                <div>
                                                                    <Accordion elevation={0} >
                                                                        <AccordionSummary
                                                                            expandIcon={<ExpandMoreIcon />}
                                                                            aria-controls="panel1a-content"
                                                                            id="panel1a-header"
                                                                        >
                                                                            Seats
                                                        </AccordionSummary>
                                                                        <AccordionDetails>
                                                                            <Table aria-label="customized table">
                                                                                <TableBody>
                                                                                    {
                                                                                        item.seats.map(item => {
                                                                                            return (
                                                                                                <StyledTableRow>
                                                                                                    <StyledTableCell>
                                                                                                        {item.name}
                                                                                                    </StyledTableCell>
                                                                                                    <StyledTableCell>
                                                                                                        {item.number}
                                                                                                    </StyledTableCell>
                                                                                                </StyledTableRow>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </TableBody>
                                                                            </Table>
                                                                        </AccordionDetails>
                                                                    </Accordion>
                                                                    <Accordion>
                                                                        <AccordionSummary
                                                                            expandIcon={<ExpandMoreIcon />}
                                                                            aria-controls="panel1a-content"
                                                                            id="panel1a-header"
                                                                        >
                                                                            Procedure
                                                        </AccordionSummary>
                                                                        <AccordionDetails>
                                                                            <Table aria-label="customized table">
                                                                                <TableBody>
                                                                                    {
                                                                                        item.procedure.map(item => {
                                                                                            return (
                                                                                                <StyledTableRow>
                                                                                                    <StyledTableCell>
                                                                                                        {item}
                                                                                                    </StyledTableCell>
                                                                                                </StyledTableRow>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </TableBody>
                                                                            </Table>
                                                                        </AccordionDetails>
                                                                    </Accordion>
                                                                    <Accordion>
                                                                        <AccordionSummary
                                                                            expandIcon={<ExpandMoreIcon />}
                                                                            aria-controls="panel1a-content"
                                                                            id="panel1a-header"
                                                                        >
                                                                            Dates
                                                                        </AccordionSummary>
                                                                        <AccordionDetails>
                                                                            <Table aria-label="customized table">
                                                                                <TableBody>
                                                                                    {
                                                                                        item.dates.map(item => {
                                                                                            return (
                                                                                                <StyledTableRow>
                                                                                                    <StyledTableCell>
                                                                                                        {item.name}
                                                                                                    </StyledTableCell>
                                                                                                    <StyledTableCell>
                                                                                                        {item.date}
                                                                                                    </StyledTableCell>
                                                                                                </StyledTableRow>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </TableBody>
                                                                            </Table>
                                                                        </AccordionDetails>
                                                                    </Accordion>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <h2>
                                            Point System
                                        </h2>
                                        <div style={{ borderRadius: "5px" }} >
                                            <Table aria-label="customized table">
                                                <TableBody>
                                                    {
                                                        this.state.school_points &&
                                                        this.state.school_points.map(item => {
                                                            return (
                                                                item.points.map(points => {
                                                                    return (
                                                                        <StyledTableRowPoints>
                                                                            <StyledTableCell>
                                                                                {points.name}
                                                                            </StyledTableCell>
                                                                            <StyledTableCell>
                                                                                {points.value}
                                                                            </StyledTableCell>
                                                                        </StyledTableRowPoints>
                                                                    )
                                                                })
                                                            )
                                                        })
                                                    }
                                                </TableBody>
                                            </Table>
                                        </div>

                                        <h2>
                                            Fee Structure
                                        </h2>
                                        <div style={{ boxShadow: "0px 0px 10px #617ea369", borderRadius: "5px" }} >
                                            {
                                                this.state.school_fees &&
                                                this.state.school_fees.map(f => {
                                                    return (
                                                        f.fees &&
                                                        f.fees.map(i => {
                                                            return (
                                                                <Accordion elevation={0} >
                                                                    <AccordionSummary
                                                                        expandIcon={<ExpandMoreIcon />}
                                                                        aria-controls="panel1a-content"
                                                                        id="panel1a-header"
                                                                    >
                                                                        {i.name}
                                                                    </AccordionSummary>
                                                                    <AccordionDetails>
                                                                        <Table aria-label="customized table">
                                                                            <TableBody>
                                                                                {
                                                                                    i.items.map(_i => {
                                                                                        return (
                                                                                            <StyledTableRowFees>
                                                                                                <StyledTableCell>
                                                                                                    {_i.name}
                                                                                                </StyledTableCell>
                                                                                                <StyledTableCell>
                                                                                                    {_i.value}
                                                                                                </StyledTableCell>
                                                                                            </StyledTableRowFees>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </TableBody>
                                                                        </Table>
                                                                    </AccordionDetails>
                                                                </Accordion>
                                                            )
                                                        })
                                                    )
                                                })
                                            }
                                            <Table aria-label="customized table">
                                                <TableBody>

                                                </TableBody>
                                            </Table>
                                        </div>

                                        <h2>
                                            Other Information
                                        </h2>
                                        <div>
                                            {
                                                this.state.more_info &&
                                                this.state.more_info.map(i => {
                                                    return (
                                                        <div style={{ boxShadow: "0px 0px 10px #617ea369", borderRadius: "5px" }} >
                                                            <div style={{ padding: "15px 10px", color: "white", backgroundColor: "#242429", borderRadius: "5px" }} >
                                                                {i.title}
                                                            </div>
                                                            <Table aria-label="customized table">
                                                                <TableBody>
                                                                    {
                                                                        i.items.map(_i => {
                                                                            return (
                                                                                <StyledTableRowMoreInfo>
                                                                                    <StyledTableCellMoreInfo>
                                                                                        {_i.name}
                                                                                    </StyledTableCellMoreInfo>
                                                                                    <StyledTableCellMoreInfo>
                                                                                        {_i.value}
                                                                                    </StyledTableCellMoreInfo>
                                                                                </StyledTableRowMoreInfo>
                                                                            )
                                                                        })
                                                                    }
                                                                </TableBody>
                                                            </Table>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>

                                    <div className="add-to-list" >
                                        <div style={{display:"flex"}} >
                                            <div>
                                                <img src={this.state.school.logo} style={{marginRight:"10px"}} width="50px" />
                                            </div>
                                            <div>
                                                <h4>
                                                    {this.state.school.name}
                                                </h4>
                                            </div>
                                        </div>
                                        <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}} >
                                            <div>
                                                Form - Fees
                                            </div>
                                            <div>
                                                {this.state.school.fees}
                                            </div>
                                        </div>
                                        <div className="wrap" >
                                            <button className="standard-button" style={{borderRadius:"5px",marginTop:"20px",width:"100%"}} >
                                                Add To List
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="school-footer" >
                                    Pidgin 2020 trusted by {this.state.school.name}.
                                </div>
                            </div>
                        </div>
                    ) : (
                            <div className="wrap" style={{ minHeight: "100vh" }} >Please Wait</div>
                        )
                }
                <Footer />
            </div>
        )
    }
}

export default SchoolDisplay
