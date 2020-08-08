import React from 'react';
import LabelledLoadingCircle from '../shared/LabelledLoadingCircle';
import { disableOnTrue, buttonDisableStyleOnTrue } from '../utils/utils';
import postJSON from '../utils/api';
import Button from '@material-ui/core/Button';
import TimelineIcon from '@material-ui/icons/Timeline';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


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
        const { selectedHandleID, iMessageDB } = this.props;
        const messageCount = 500;
        const handleClause = `where handle_id == ${selectedHandleID} and is_from_me == 0`;
        const query = `select text from message ${handleClause}
                        and ROWID in (select ROWID from message ${handleClause} ORDER BY RANDOM() LIMIT ${messageCount})`;
        const messageTable = iMessageDB.exec(query);
        let trainingStrings = [];
        messageTable[0].values.forEach(row => {
            if (row[0]) trainingStrings.push(row[0]);
        });
        //TODO: remove when done testing
        console.log(trainingStrings);
        const trainingResponse = await postJSON('train', { training_strings: trainingStrings })
        const modelID = trainingResponse['model_id'];
        this.props.onModelTrain(selectedHandleID, modelID);
        this.setState({ loading: false });
    }


    render() {
        const { handles, selectedHandleID } = this.props;
        const { loading } = this.state;

        const noHandles = Object.keys(handles).length === 0;
        const handleSelectDisabled = loading || noHandles;
        const trainButtonDisabled = handleSelectDisabled || !selectedHandleID;

        return <div className="relative-parent">

            {loading &&
                <div className="absolute-child">
                    <LabelledLoadingCircle label="Training model. This may take a few minutes. I couldn't afford a virtual machine with a GPU." />
                </div>}

            <div style={disableOnTrue(loading)}>
                <h3 ><u>Step 2: Train Models</u></h3>
                <Grid container alignItems="center">
                    <Grid item sm={3} xs={12}>
                        <p>
                            Next, select who you wish to train a network on.
                    </p>
                        <p>Unfortunately, contact names are  not included in the DB. Search your contacts for a desired person then use <b>CMD + F</b> to find their number or email in this list.</p>
                    </Grid>
                    <Grid item sm={9} xs={12}>


                        <div className='handle-list relative-parent' style={disableOnTrue(noHandles)}>

                            {noHandles &&
                                <small className="absolute-child">Nobody to display yet.</small>}

                            <List component="nav" >
                                {Object.keys(handles).map(id => (
                                    <div key={id}>
                                        <ListItem
                                            disabled={handleSelectDisabled}
                                            button
                                            selected={selectedHandleID === id}
                                            onClick={() => this.handleSelect(id)}
                                            style={selectedHandleID === id ? { backgroundColor: 'rgb(90, 90, 90)' } : null}
                                        >
                                            {handles[id].name}{handles[id].modelID && <span>&nbsp;<b>(trained)</b></span>}

                                        </ListItem>

                                        <Divider />
                                    </div>
                                ))}
                            </List>
                        </div>
                        <Button variant="contained" className="button" onClick={() => this.modelTrain()}
                            disabled={trainButtonDisabled} style={buttonDisableStyleOnTrue(trainButtonDisabled)}
                            startIcon={<TimelineIcon />}>Train Model On Selection</Button>
                    </Grid>
                </Grid>
            </div >
        </div >
    }

}

export default Train;