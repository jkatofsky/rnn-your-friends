import React from 'react';
import LabelledLoadingCircle from '../shared/LabelledLoadingCircle';
import { disableOnTrue } from '../utils/utils';

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
        //TODO: process the database to an list of handle objects
        this.props.oniMessageDBProcess(handles);
        this.setState({ loading: false, loadingLabel: '' });
    }

    handleSelect = (handleID) => {
        this.props.onHandleSelect(handleID);
    }

    modelTrain = (handleID) => {
        this.setState({ loading: true, loadingLabel: 'Training model. This may take a bit...' });
        let modelID;
        //TODO: train the model
        this.props.onModelTrain(handleID, modelID);
        this.setState({ loading: false, loadingLabel: '' });
    }

    render() {

        const { handles } = this.props;
        const { loading, loadingLabel } = this.state;

        //TODO: render component

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