import React from 'react';
import LabelledLoadingCircle from '../shared/LabelledLoadingCircle';
import { disableOnTrue } from '../utils/utils';
import postJSON from '../utils/api'

class Generate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            output: ''
        }
    }

    textGenerate = async (modelID) => {
        this.setState({ loading: true });
        let options = {};
        // TODO: get options from options components
        const generateResponse = await postJSON('generate', {
            model_id: modelID,
            options: options
        });
        this.setState({ loading: false, output: generateResponse['output'] });
    }

    render() {

        const { handle } = this.props;
        const { loading } = this.state;

        //TODO: render component

        return <div className="relative-parent">

            {loading &&
                <div className="absolute-child">
                    <LabelledLoadingCircle label='Generating text...' />
                </div>}

            <div style={disableOnTrue(loading)} >

            </div>
        </div>
    }


}

export default Generate;