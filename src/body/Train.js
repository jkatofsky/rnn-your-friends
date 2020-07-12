import React from 'react';
import LabelledLoadingCircle from '../shared/LabelledLoadingCircle';
import { disableOnTrue } from '../utils/utils';
import postJSON from '../utils/api'

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
        const { handles } = this.props;
        const { loading } = this.state;

        // TODO: render component

        return <div className="relative-parent">

            {loading &&
                <div className="absolute-child">
                    <LabelledLoadingCircle label="Training model. This may take a bit..." />
                </div>}

            <div style={disableOnTrue(loading)} >

            </div>
        </div>
    }

}

export default Train;