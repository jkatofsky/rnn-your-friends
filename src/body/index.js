import React from 'react';
import './style.css';
import '../App.css';
import { isMacOs } from "react-device-detect";
import Grid from '@material-ui/core/Grid';
import ContentBox from '../shared/ContentBox';
import ErrorIcon from '@material-ui/icons/Error';
import Process from './Process';
import Train from './Train';
import Generate from './Generate';

const disableOnTrue = (flag) => {
    return {
        opacity: flag ? 0.25 : 1,
        pointerEvents: flag ? "none" : "initial"
    }
}

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            incompatibleOS: !isMacOs,
            correpondents: {}, //{id: {name, modelID (null if untrained)}}
            selectedCorrespondentID: null
        };
    }

    render() {

        const { incompatibleOS, correpondents, selectedCorrespondentID } = this.state;

        return <>
            {incompatibleOS && <div><ErrorIcon fontSize="large" /><h3>I've detected that you are not on macOS. Unfortunately, this website will not work for you.</h3></div>}

            <Grid container justify="center" alignItems="flex-start" spacing={2} xs={12}>
                <Grid item sm={5} xs={11} style={disableOnTrue(incompatibleOS)}>
                    <ContentBox title="Process Messages" content={
                        <Process />
                    } />
                </Grid>
                <Grid item sm={6} xs={11}
                    style={disableOnTrue(Object.keys(correpondents).length === 0)}>
                    <ContentBox title="Train Model" content={
                        <Train />
                    } />
                </Grid>
                <Grid item xs={11}
                    style={disableOnTrue(Object.keys(correpondents).length === 0 ||
                        correpondents[selectedCorrespondentID].model === null)}>
                    <ContentBox title="Generate Text" content={
                        <Generate />
                    } />
                </Grid>

            </Grid>
        </>
    }
}

export default Body;