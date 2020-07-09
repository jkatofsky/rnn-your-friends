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
import { disableOnTrue } from '../utils/utils';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            correpondents: {},
            selectedCorrespondentID: null
        };
    }

    onProcess = (correpondents) => {
        this.setState({ correspondents: correpondents });
    }

    onSelect = (selectedCorrespondentID) => {
        this.setState({ selectedCorrespondentID: selectedCorrespondentID });
    }

    onTrain = (trainedCorrespondentID, modelID) => {
        let { correpondents } = this.state;
        correpondents[trainedCorrespondentID].modelID = modelID;
        this.setState({ correspondents: correpondents });
    }

    render() {

        const { correpondents, selectedCorrespondentID } = this.state;

        return <>
            {!isMacOs && <div><ErrorIcon fontSize="large" /><h3>You don't appear to be on macOS. Return to this website from a Mac to use it.</h3></div>}

            <Grid container justify="center" alignItems="flex-start" spacing={2} xs={12}>
                <Grid item sm={5} xs={11}
                    style={disableOnTrue(!isMacOs)}>
                    <ContentBox title="Process Messages" content={
                        <Process onProcess={this.onProcess} />
                    } />
                </Grid>
                <Grid item sm={6} xs={11}
                    style={disableOnTrue(!isMacOs ||
                        Object.keys(correpondents).length === 0)}>
                    <ContentBox title="Train Model" content={
                        <Train correspondents={correpondents}
                            onSelect={this.onSelect} onTrain={this.onTrain} />
                    } />
                </Grid>
                <Grid item xs={11}
                    style={disableOnTrue(!isMacOs ||
                        Object.keys(correpondents).length === 0 ||
                        correpondents[selectedCorrespondentID].model === null)}>
                    <ContentBox title="Generate Text" content={
                        <Generate selectedCorrespondent={correpondents[selectedCorrespondentID]} />
                    } />
                </Grid>

            </Grid>
        </>
    }
}

export default Body;