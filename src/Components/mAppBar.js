import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { IconButton } from '@material-ui/core';
import logo from '../Images/app_bg.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import store from '../Images/store.png'

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function MappBar(props) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <a href='https://play.google.com/store/apps/details?id=com.ds.pidgin' ><img alt='s' src={store} width='100%' /></a>
            <div style={{padding:'0px 15px'}} >
                <List>
                    <ListItem button >
                        <ListItemIcon>{<InfoOutlinedIcon />}</ListItemIcon>
                        <ListItemText primary='About Us' />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>{<ContactPhoneOutlinedIcon />}</ListItemIcon>
                        <ListItemText primary='Contact Us' />
                    </ListItem>
                </List>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar style={{ backgroundColor: 'white', color: 'black', display: 'flex', justifyContent: 'space-between', alignContent: 'center' }} >
                        <Typography variant="h6"><img alt="s" src={logo} width='50px' style={{ marginTop: '10px' }} /></Typography>
                        <IconButton onClick={toggleDrawer('right', true)} color="inherit"><MenuRoundedIcon /></IconButton>
                        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                            {list('right')}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}
export default MappBar;