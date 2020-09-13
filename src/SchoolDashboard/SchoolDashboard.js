import React, { Component } from 'react'
import MyAppBar from '../Components/AppBar'
import Footer from '../Components/Footer'
import getUser from '../Database/getUser'
import getDoc from '../Database/getDoc'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from './Home'
import Payments from './Payments'
import Seen from './Seen'
import Unseen from './Unseen'
import Removed from './Removed'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export class SchoolDashboard extends Component {

    state = {
        school: null,
        value: 0,
    }

    componentDidMount() {
        getUser().then(uid => {
            getDoc("UIDS", uid.toString()).then(snap => {
                this.setState({ school: snap })
            })
        })
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue })
    }

    render() {
        return (
            <div>
                <MyAppBar />

                <div style={{ display: "flex" }} >
                    <Tabs
                        orientation="vertical"
                        indicatorColor="primary"
                        value={this.state.value}
                        onChange={this.handleChange}
                        aria-label="Vertical tabs example"
                    >
                        <Tab label="Home" {...a11yProps(0)} />
                        <Tab label="Payments" {...a11yProps(1)} />
                        <Tab label="Seen" {...a11yProps(2)} />
                        <Tab label="Unseen" {...a11yProps(2)} />
                        <Tab label="Trash" {...a11yProps(2)} />
                    </Tabs>
                    <div>
                        {
                            this.state.school !== null ? (
                                <div className="wrap" >
                                    <div style={{ width: "1024px" }} >
                                        <div style={{ display: "flex", alignItems: "center", margin: "0px 20px" }} >
                                            <div>
                                                <img src={this.state.school.logo} width="100px" style={{ marginRight: "20px" }} />
                                            </div>
                                            <div>
                                                <h1>
                                                    {this.state.school.name}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                    <div></div>
                                )
                        }
                        <TabPanel value={this.state.value} index={0}>
                            <Home/>
                        </TabPanel>
                        <TabPanel value={this.state.value} index={1}>
                            <Payments/>
                        </TabPanel>
                        <TabPanel value={this.state.value} index={2}>
                            <Seen/>
                        </TabPanel>
                        <TabPanel value={this.state.value} index={2}>
                            <Unseen/>
                        </TabPanel>
                        <TabPanel value={this.state.value} index={2}>
                            <Removed/>
                        </TabPanel>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default SchoolDashboard
