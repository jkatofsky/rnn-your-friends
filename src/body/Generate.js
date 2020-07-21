import React from 'react';
import LabelledLoadingCircle from '../shared/LabelledLoadingCircle';
import { disableOnTrue, buttonDisableStyleOnTrue } from '../utils/utils';
import postJSON from '../utils/api';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import Slider from '@material-ui/core/Slider';


class Generate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            temperature: null,
            output: ''
        }
    }

    textGenerate = async () => {
        this.setState({ loading: true });
        const { handle } = this.props;
        const { temperature } = this.state;
        let options = {};
        const prompt = document.getElementById('prompt').value;
        if (prompt) options['prompt'] = prompt + " ";
        options['temperature'] = temperature;
        //TODO: remove when done testing
        console.log(options);
        const generateResponse = await postJSON('generate', {
            model_id: handle.modelID,
            options: options
        });
        const output = !prompt ? generateResponse['output'] : generateResponse['output'].slice(prompt.length);
        this.setState({ loading: false, output: output });
    }

    render() {

        const { handle } = this.props;
        const { loading, output } = this.state;

        const generateInputDisabled = !handle || !handle.modelID || loading;

        return <div className="relative-parent">

            {loading &&
                <div className="absolute-child">
                    <LabelledLoadingCircle label='Generating text...' />
                </div>}

            <div style={disableOnTrue(loading)} >
                <h3 ><u>Step 3: Generate Text</u></h3>
                <Grid container alignItems="center">
                    <Grid item xs={4}>
                        <p>Finally, you can generate text from the model.</p>
                        <p>You can optionally provide a (very short) <b>prompt</b> for the output. Be warned: the dataset is small, so sometimes the model won't know how to respond.</p>
                        <p>The <b>temperature</b> slider dictates how much "risk" the RNN will take when generating. Anything over 0.7 gets pretty crazy.</p>
                    </Grid>
                    <Grid item xs={8} style={{ padding: '20px 30px 0 30px' }}>
                        <Grid container justify="flex-end" style={disableOnTrue(generateInputDisabled)}>
                            <div className="message-bubble prompt tri-right round btm-right-in">
                                <div className="message-text prompt">
                                    <p className="message-p"><textarea wrap="soft" rows={1} disabled={generateInputDisabled} id="prompt" placeholder="Enter prompt..." maxLength={15} /></p>
                                </div>
                            </div>
                        </Grid>
                        <Grid container justify="flex-start" style={disableOnTrue(generateInputDisabled)}>
                            <div className="message-bubble output tri-right round btm-left-in">
                                <div className="message-text">
                                    <p className="message-p">{output}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid container justify="center">
                            <div style={disableOnTrue(generateInputDisabled)}>
                                <p style={{ fontSize: '14px' }}>Temperature (0-1)</p>
                                <Slider disabled={generateInputDisabled}
                                    onChange={(_, value) => this.setState({ temperature: value })}
                                    style={{ color: 'rgb(150, 150, 150)', width: '250px', marginRight: '30px' }} id="temperature" defaultValue={0.4} valueLabelDisplay="auto" step={0.1} marks min={0} max={1}
                                />
                            </div>
                            <br />
                            <Button variant="contained" className="button" onClick={() => this.textGenerate()}
                                disabled={generateInputDisabled} style={buttonDisableStyleOnTrue(generateInputDisabled)}
                                startIcon={<ChatIcon />}>Generate Text</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div >
    }
}

export default Generate;