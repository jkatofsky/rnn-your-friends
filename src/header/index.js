import React from 'react';
import './style.css';
import logo from './logo.png';
import Grid from '@material-ui/core/Grid';

function Header(props) {

    return <header>
        <Grid container direction="row" justify="center" alignItems="center">
            <img className="logo" src={logo} alt="logo" />
            <div>
                <h1 className="main-title">RNN Your Friends</h1>
                <h3 className="sub-title">Train a text model on your iMessages. Mimic your friends.</h3>
            </div>
        </Grid>
    </header>
}

export default Header;
