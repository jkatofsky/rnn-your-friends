import React from 'react';
import './style.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import paypal from './paypal.png';
import bitcoin from './bitcoin.png';
import ContentBox from '../shared/ContentBox';


function GitHubButton(props) {
    return <a className='github-button'
        target="_blank" rel="noopener noreferrer" href={props.link}>
        <Grid container direction="row" justify="center" alignItems="center">
            <GitHubIcon />&nbsp;<p>{props.text}</p>
        </Grid>
    </a>
}


function Footer(props) {

    return <>
        <Grid container justify="center" alignItems="flex-start" spacing={2} xs={12}>
            <Grid item sm={4} xs={11}>
                <ContentBox title="About Me" content={
                    <>
                        <p>Hi! I'm Josh Katofsky. I'm studying Computer Science, Political Science, and Philosphy at <a href="https://www.mcgill.ca/" target="_blank" rel="noopener noreferrer">McGill University</a> in Montreal, Canada.
                        I built this website during the Summer of 2020 because I thought it would be really funny to mimic my friends. You can take a look at my resumé <a href="https://www.cs.mcgill.ca/~jkatof/" target="_blank" rel="noopener noreferrer">here</a>.</p>
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
                    </>
                } />
            </Grid>
            <Grid item sm={7} xs={11}>
                <ContentBox title="About The A.I." content={
                    <>
                        <p>I had the idea for this website while reading the astonishingly-lifelike output of <a href="https://openai.com/blog/better-language-models/" target="_blank" rel="noopener noreferrer">OpenAI's GPT-2 model</a>.
                        I realized that the <i>most</i> amusing targets for a text-generating AI would be those we know personally - and to this end, there's wealth of untapped training data in our Macs' iMessage databases.</p>
                        <p>This website does not use GPT - a shame, as GPT provides <a href="https://openai.com/blog/better-language-models/#sample1" target="_blank" rel="noopener noreferrer">incredibly coherent output</a>.
                        Alas, GPT is <i>huge</i> and training it takes hours on beefy GPUs, much less using the starter tier of Google App Engine.</p>
                        <p>RNN Your Friends needs to train a new model for every set of messages uploaded. So, when this web page sends over a batch of messages to my API, it does a few quick training epochs on a <a href="https://en.wikipedia.org/wiki/Recurrent_neural_network" target="_blank" rel="noopener noreferrer">recurrent neural network</a> (hence the site's name). This model is then retained for a period of time, where it can be queried for text.
                        The output you get won't make it in any NLP papers, but it's still lots of fun.</p>
                    </>
                } />
            </Grid>
            <Grid item xs={11}>
                <ContentBox title="About The Code" content={
                    <>
                        <Grid container justify="center" alignItems="flex-start">
                            <Grid item sm={7} xs={12}>
                                <p>Here's a list of the main technologies I'm using:</p>
                                <ul>
                                    <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a> (front-end framework)</li>
                                    <li><a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</a> (front-end components)</li>
                                    <li><a href="https://github.com/sql-js/sql.js" target="_blank" rel="noopener noreferrer">sql.js</a> (browser-side DB interpreter)</li>
                                    <li><a href="https://github.com/huge-success/sanic" target="_blank" rel="noopener noreferrer">Sanic</a> (web server)</li>
                                    <li><a href="https://github.com/minimaxir/textgenrnn" target="_blank" rel="noopener noreferrer">textgenrnn</a> (text generation)</li>
                                    <li><a href="https://cloud.google.com/appengine" target="_blank" rel="noopener noreferrer">Google App Engine</a> (hosting)</li>
                                </ul>
                            </Grid>
                            <Grid item sm={5} xs={12}>
                                <p>Have suggestions? Want to make your own fork? Found a bug? Just want to judge my code? Take a look at this project's GitHub repos:</p>
                                <GitHubButton text="Frontend" link="https://github.com/jkatofsky/rnn-your-friends" />
                                <GitHubButton text="Backend" link="https://github.com/jkatofsky/textgenrnn-api" />
                            </Grid>
                        </Grid>
                        <br />
                    </>
                } />
            </Grid>
        </Grid>
        <br />
        <br />
    </>;
}


export default Footer;