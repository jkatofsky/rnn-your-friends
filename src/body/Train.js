import React from 'react';
import LabelledLoadingCircle from '../shared/LabelledLoadingCircle';
import { dimOnTrue, buttonDisableStyleOnTrue } from '../utils/utils';
import postJSON from '../utils/api';
import Button from '@material-ui/core/Button';
import TimelineIcon from '@material-ui/icons/Timeline';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
class Train extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    handleSelect = (handleID) => {
        this.props.onHandleSelect(handleID);
    }

    modelTrain = async () => {
        this.setState({ loading: true });
        const { handles, selectedHandleID, iMessageDB } = this.props;
        let trainingStrings = [];
        // TODO: get the training strings
        const trainingResponse = await postJSON('train', { training_strings: trainingStrings })
        const modelID = trainingResponse['model_id'];
        this.props.onModelTrain(selectedHandleID, modelID);
        this.setState({ loading: false });
    }


    render() {
        const { handles, selectedHandleID } = this.props;
        const { loading } = this.state;

        const handleSelectDisabled = loading || Object.keys(handles).length === 0;
        const trainButtonDisabled = handleSelectDisabled || !selectedHandleID;

        return <div className="relative-parent">

            {loading &&
                <div className="absolute-child">
                    <LabelledLoadingCircle label="Training model. This may take a few minutes..." />
                </div>}

            <Grid container style={dimOnTrue(loading)} >
                <Grid item xs={3}>
                    <p>
                        Next, select who you wish to train a network on.
                    </p>
                    <p>Unfortunately, contact names are  not included in the DB. Search your contacts for a desired person then use <b>CMD + F</b> to find their number or email in this list.</p>
                </Grid>
                <Grid item xs={9}>
                    <div className='handle-list'>
                        <List component="nav" >
                            {Object.keys(handles).map(id => (
                                <ListItem
                                    key={id}
                                    button
                                    selected={selectedHandleID === id}
                                    onClick={() => this.handleSelect(id)}
                                    style={selectedHandleID === id ? { backgroundColor: 'rgb(90, 90, 90)' } : null}
                                >
                                    {handles[id].name}{handles[id].modelID && <span>&nbsp;<b>(model already trained)</b></span>}
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <Button variant="contained"
                        disabled={trainButtonDisabled} style={buttonDisableStyleOnTrue(trainButtonDisabled)}
                        startIcon={<TimelineIcon />}>Train Model On Selection</Button>
                </Grid>
            </Grid>
        </div >
    }

}

export default Train;