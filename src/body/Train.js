import React from 'react';
import LabelledLoadingCircle from '../shared/LabelledLoadingCircle';
import { disableOnTrue } from '../utils/utils';
import postJSON from '../utils/api';
import Button from '@material-ui/core/Button';
import TimelineIcon from '@material-ui/icons/Timeline';

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

    modelTrain = async (handleID) => {
        this.setState({ loading: true });
        const { iMessageDB } = this.props;
        let trainingStrings = [];
        // TODO: get the training strings
        const trainingResponse = await postJSON('train', { training_strings: trainingStrings })
        let modelID = trainingResponse['model_id'];
        this.props.onModelTrain(handleID, modelID);
        this.setState({ loading: false });
    }

    render() {
        const { handles, selectedHandleID } = this.props;
        const { loading } = this.state;

        return <div className="relative-parent">

            {loading &&
                <div className="absolute-child">
                    <LabelledLoadingCircle label="Training model. This may take a bit..." />
                </div>}

            <div style={disableOnTrue(loading)} >
                <p>
                    Next, select who you wish to train a network on.
                </p>
                {/* TODO: render two-column list of select-able handles*/}
                <Button variant="contained" component="span"
                    startIcon={<TimelineIcon />}>Train Model On Selected Person</Button>
                <p>Unfortunately, contact names are  not included in the DB. It is reccomended to search your contacts for the desired person <i>then</i> find their number or email in this list.</p>
            </div>
        </div>
    }

}

export default Train;