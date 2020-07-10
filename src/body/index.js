import React from 'react';
import './style.css';
import '../App.css';
import { isMacOs } from "react-device-detect";
import Grid from '@material-ui/core/Grid';
import ContentBox from '../shared/ContentBox';
import ErrorIcon from '@material-ui/icons/Error';
import Upload from './Upload';
import Train from './Train';
import Generate from './Generate';
import { disableOnTrue } from '../utils/utils';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iMessageDB: null,
            handles: {}, //{id: {name, modelID, profile pic from messages?}}
            selectedHandleID: null
        };
    }

    oniMessageDBInit = (iMessageDB) => {
        this.setState({
            iMessageDB: iMessageDB,
            handles: {},
            selectedHandleID: null
        });
    }

    oniMessageDBProcess = (handles) => {
        this.setState({
            handles: handles,
            selectedHandleID: null
        });
    }

    onHandleSelect = (handleID) => {
        this.setState({ selectedHandleID: handleID });
    }

    onModelTrain = (handleID, modelID) => {
        let { handles } = this.state;
        handles[handleID].modelID = modelID;
        this.setState({ handles: handles });
    }

    render() {
        const { iMessageDB, handles, selectedHandleID } = this.state;

        return <>

            <Grid className="relative-parent" container
                justify="center" alignItems="flex-start" spacing={2} xs={12}>

                {!isMacOs && <div className="absolute-child">
                    <ErrorIcon fontSize="large" /><h2 className="error-title">You don't appear to be on macOS. Return to this website from a Mac to use it.</h2>
                </div>}

                <Grid item sm={5} xs={11}
                    style={disableOnTrue(!isMacOs)}>
                    <ContentBox title="Upload iMessages" content={
                        <Upload oniMessageDBInit={this.oniMessageDBInit} />
                    } />
                </Grid>
                <Grid item sm={6} xs={11}
                    style={disableOnTrue(!isMacOs || !iMessageDB)}>
                    <ContentBox title="Train Models" content={
                        <Train iMessageDB={iMessageDB} handles={handles}
                            oniMessageDBProcess={this.oniMessageDBProcess}
                            onHandleSelect={this.onHandleSelect}
                            onModelTrain={this.onModelTrain} />
                    } />
                </Grid>
                <Grid item xs={11}
                    style={disableOnTrue(!isMacOs || !iMessageDB
                        || Object.keys(handles).length === 0
                        || handles[selectedHandleID].model === null)}>
                    <ContentBox title="Generate Text" content={
                        <Generate selectedHandle={handles[selectedHandleID]} />
                    } />
                </Grid>

            </Grid>
        </>
    }
}

export default Body;