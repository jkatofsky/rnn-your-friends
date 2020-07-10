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
            correpondents: {}, //{id: {name, modelID, profile pic from messages?}}
            selectedCorrespondentID: null
        };
    }

    oniMessageDBInit = (iMessageDB) => {
        this.setState({
            iMessageDB: iMessageDB,
            correpondents: {},
            selectedCorrespondentID: null
        });
    }

    oniMessageDBProcess = (correspondents) => {
        this.setState({
            correpondents: correspondents,
            selectedCorrespondentID: null
        });
    }

    onCorrespondentSelect = (selectedCorrespondentID) => {
        this.setState({ selectedCorrespondentID: selectedCorrespondentID });
    }

    onModelTrain = (trainedCorrespondentID, modelID) => {
        let { correpondents } = this.state;
        correpondents[trainedCorrespondentID].modelID = modelID;
        this.setState({ correspondents: correpondents });
    }

    render() {
        const { iMessageDB, correpondents, selectedCorrespondentID } = this.state;

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
                        <Train iMessageDB={iMessageDB} oniMessageDBProcess={this.oniMessageDBProcess}
                            onCorrespondentSelect={this.onCorrespondentSelect}
                            onModelTrain={this.onModelTrain} />
                    } />
                </Grid>
                <Grid item xs={11}
                    style={disableOnTrue(!isMacOs || !iMessageDB
                        || Object.keys(correpondents).length === 0
                        || correpondents[selectedCorrespondentID].model === null)}>
                    <ContentBox title="Generate Text" content={
                        <Generate selectedCorrespondent={correpondents[selectedCorrespondentID]} />
                    } />
                </Grid>

            </Grid>
        </>
    }
}

export default Body;