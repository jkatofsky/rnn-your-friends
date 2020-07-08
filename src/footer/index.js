import React from 'react';
import './style.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import paypal from './paypal.png';
import bitcoin from './bitcoin.png';
import Box from '@material-ui/core/Box';

function GitHubButton(props) {
    return <a className='github-button'
        target="_blank" rel="noopener noreferrer" href={props.link}>
        <Grid container direction="row" justify="center" alignItems="center">
            <GitHubIcon />&nbsp;<p>{props.text}</p>
        </Grid>
    </a>
}

class Footer extends React.Component {



    render() {
        //https://blockchain.com/btc/payment_request?address=14FtmEFkey3sYqoaBmbAaw9BvG2va48nep&amount=0.00021605&message=RNN Your Friends tip
        //https://paypal.me/jkatofsky

        return <>
            <Grid container justify="center" alignItems="flex-start" spacing={2} xs={12}>
                <Grid item sm={4} xs={12}>
                    <Box border={1} borderRadius={16} borderColor="grey.600">
                        <h3><u>About The Dev</u></h3>
                        <p>Hi! I'm Josh Katofsky. I'm studying Computer Science, Political Science, and Philosphy at <a href="https://www.mcgill.ca/" target="_blank" rel="noopener noreferrer">McGill University</a> in Montreal, Canada.
                        I built this website during the Summer of 2020 because I thought it would be really fun to mimic my friends. You can take a look at my resumé <a href="https://www.cs.mcgill.ca/~jkatof/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        <p>Also, if you enjoyed this website and want to buy me a beer - I mean, contribute to server costs - I'm accepting tips.</p>
                        <Grid container direction="row" justify="space-evenly" alignItems="center">
                            <a href="https://paypal.me/jkatofsky" target="_blank" rel="noopener noreferrer">
                                <img className="payment-logo" src={paypal} alt="logo" />
                            </a>
                            <a href="https://blockchain.com/btc/payment_request?address=14FtmEFkey3sYqoaBmbAaw9BvG2va48nep&amount=0.00021605&message=RNN Your Friends tip" target="_blank" rel="noopener noreferrer">
                                <img className="payment-logo" src={bitcoin} alt="logo" />
                            </a>
                        </Grid>
                        <br />
                    </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Box border={1} borderRadius={16} borderColor="grey.600">
                        <h3><u>About The A.I.</u></h3>
                        <p>I had the idea to train a text model on iMessages while reading about <a href="https://openai.com/blog/better-language-models/" target="_blank" rel="noopener noreferrer">OpenAI's GPT-2 language model</a>.
                        I realized that there's an untapped wealth of training data living on our Macs' iMessage databases, data which would be create uniquely fun outputs, since we know exactly who it's mimicking.</p>
                        <p>This website does not use GPT, however. That's a shame, because GPT provides <a href="https://openai.com/blog/better-language-models/#sample1" target="_blank" rel="noopener noreferrer">incredibly coherent output</a>.
                        Alas, GPT is <i>huge</i>, so while it is possible to pre-train it, bundle it with the server code, and make a web API to query that model, it was not feasible to repeatedly re-train it on the cloud (much less using the starter tier of Google App Engine).</p>
                        <p>Instead, I'm doing a few quick training epochs on a <a href="https://en.wikipedia.org/wiki/Recurrent_neural_network" target="_blank" rel="noopener noreferrer">recurrent neural network</a> (hence the site's name).
                        It's not always going to make perfect sense, but it's still lots of fun.</p>
                    </Box>
                </Grid>
                <Grid item sm={10} xs={12}>
                    <Box border={1} borderRadius={16} borderColor="grey.600">
                        <h3><u>About The Code</u></h3>
                        <Grid container justify="center" alignItems="flex-start">
                            <Grid item xs={6}>
                                <p>I'm hosting both the frontend and API for this website using Google Cloud App Engine. As for the code, here's a list of the main technologies I'm using:</p>

                                <ul>
                                    <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a> (front-end)</li>
                                    <li><a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</a> (front-end)</li>
                                    <li><a href="https://github.com/sql-js/sql.js" target="_blank" rel="noopener noreferrer">sql.js</a> (browser-side DB interpreter)</li>
                                    <li><a href="https://github.com/huge-success/sanic" target="_blank" rel="noopener noreferrer">Sanic</a> (web server)</li>
                                    <li><a href="https://github.com/minimaxir/textgenrnn" target="_blank" rel="noopener noreferrer">textgenrnn</a> (RNN)</li>
                                    <li><a href="https://cloud.google.com/appengine" target="_blank" rel="noopener noreferrer">Google App Engine</a> (hosting)</li>
                                </ul>
                            </Grid>
                            <Grid item xs={6}>
                                <p>Have suggestions? Want to make your own fork? Found a bug? Just want to judge my code? Take a look at this project's GitHub repos:</p>
                                <GitHubButton text="Frontend" link="https://github.com/jkatofsky/rnn-your-friends" />
                                <GitHubButton text="Backend" link="https://github.com/jkatofsky/textgenrnn-api" />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <br />
            <br />
        </>;
    }
}

export default Footer;