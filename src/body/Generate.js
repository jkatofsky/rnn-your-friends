import React from 'react';
import LabelledLoadingCircle from '../shared/LabelledLoadingCircle';
import { dimOnTrue } from '../utils/utils';
import postJSON from '../utils/api'

class Generate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            output: ''
        }
    }

    textGenerate = async () => {
        this.setState({ loading: true });
        const { handle } = this.props;
        let options = {};
        // TODO: get options from options components
        const generateResponse = await postJSON('generate', {
            model_id: handle.modelID,
            options: options
        });
        this.setState({ loading: false, output: generateResponse['output'] });
    }

    render() {

        const { disabled, handle } = this.props;
        const { loading, output } = this.state;

        //TODO: render component

        return <div className="relative-parent">

            {loading &&
                <div className="absolute-child">
                    <LabelledLoadingCircle label='Generating text...' />
                </div>}

            <div style={dimOnTrue(loading)} >

            </div>
        </div>
    }


}

export default Generate;