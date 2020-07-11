import React from 'react';
import LabelledLoadingCircle from '../shared/LabelledLoadingCircle';
import { disableOnTrue } from '../utils/utils';
import postJSON from '../utils/api'

class Train extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            loadingLabel: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.iMessageDB !== prevProps.iMessageDB) {
            this.iMessageDBProcess(this.props.iMessageDB);
        }
    }

    iMessageDBProcess = (iMessageDB) => {
        this.setState({ loading: true, loadingLabel: 'Processing database...' });
        const handles = {};
        // TODO: process the database to a list of handle objects
        this.props.oniMessageDBProcess(handles);
        this.setState({ loading: false, loadingLabel: '' });
    }

    handleSelect = (handleID) => {
        this.props.onHandleSelect(handleID);
    }

    modelTrain = async (iMessageDB, handleID) => {
        this.setState({ loading: true, loadingLabel: 'Training model. This may take a bit...' });
        let trainingStrings = [];
        // TODO: get the training strings
        const trainingResponse = await postJSON('train', { training_strings: trainingStrings })
        let modelID = trainingResponse['model_id'];
        this.props.onModelTrain(handleID, modelID);
        this.setState({ loading: false, loadingLabel: '' });
    }

    render() {
        const { iMessageDB, handles } = this.props;
        const { loading, loadingLabel } = this.state;

        // TODO: render component

        return <div className="relative-parent">

            {loading &&
                <div className="absolute-child">
                    <LabelledLoadingCircle label={loadingLabel} />
                </div>}

            <div style={disableOnTrue(loading)} >

            </div>
        </div>
    }

}

export default Train;