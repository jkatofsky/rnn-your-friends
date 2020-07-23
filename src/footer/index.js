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

    return (
        <footer>
            <Grid container justify="center" alignItems="flex-start" xs={12}>
                <Grid container justify="center" alignItems="flex-start" spacing={2} xs={12} md={11} lg={10}>
                    <Grid item sm={4} xs={11}>
                        <ContentBox>
                            <h4 ><u>About Me</u></h4>
                            <p>Hi! I'm Josh Katofsky. I'm studying Computer Science, Political Science, and Philosphy at <a href="https://www.mcgill.ca/" target="_blank" rel="noopener noreferrer">McGill University</a> in Montreal, Canada. You can take a look at my resumé <a href="https://www.cs.mcgill.ca/~jkatof/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                            <p>I had the idea for this website while reading about the <a href="https://towardsdatascience.com/step-by-step-guide-on-how-to-train-gpt-2-on-books-using-google-colab-b3c6fa15fef0" target="_blank" rel="noopener noreferrer">fun</a> people were having fine-tuning <a href="https://openai.com/blog/better-language-models/" target="_blank" rel="noopener noreferrer">OpenAI's GPT-2 text model</a>.
                            I realized that the <i>most</i> amusing targets for a text-generating AI would be those we know personally - and to this end, there's wealth of untapped training data in our Macs' iMessage databases.</p>
                            <p>If you enjoyed this website and want to buy me a beer - I mean, contribute to server costs - I'm accepting tips.</p>
                            <Grid container direction="row" justify="space-evenly" alignItems="center">
                                <a href="https://paypal.me/jkatofsky" target="_blank" rel="noopener noreferrer">
                                    <img className="payment-logo" src={paypal} alt="logo" />
                                </a>
                                <a href="https://blockchain.com/btc/payment_request?address=14FtmEFkey3sYqoaBmbAaw9BvG2va48nep&amount=0.00021605&message=RNN Your Friends tip" target="_blank" rel="noopener noreferrer">
                                    <img className="payment-logo" src={bitcoin} alt="logo" />
                                </a>
                            </Grid>
                            <br />
                        </ContentBox>
                    </Grid>
                    <Grid item sm={7} xs={11}>
                        <ContentBox>
                            <h4 ><u>About The Website</u></h4>
                            <p>This website does not use a cutting-edge model like GPT-2 - a shame, as GPT-2 provides <a href="https://openai.com/blog/better-language-models/#sample1" target="_blank" rel="noopener noreferrer">incredibly coherent output</a>.
                            Alas, GPT is <i>huge</i> and training it takes hours on beefy GPUs, much less using Google App Engine.</p>
                            <p>RNN Your Friends' frontend parses your iMessage database and randomly selects messages from the selected person. It then sends the text of these messages to the backend, which trains a model with them;
                            it does a few quick training epochs on a <a href="https://en.wikipedia.org/wiki/Recurrent_neural_network" target="_blank" rel="noopener noreferrer">recurrent neural network</a>, hence the site's name. This model is then retained for a period of time, when this front-end can request generated text from it.
                            The output won't make it into any NLP papers, but it's still lots of fun.</p>
                            <p>Here's a list of the main technologies I'm using:</p>
                            <ul>
                                <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a> (front-end framework)</li>
                                <li><a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</a> (front-end components)</li>
                                <li><a href="https://github.com/sql-js/sql.js" target="_blank" rel="noopener noreferrer">sql.js</a> (browser-side DB interpreter)</li>
                                <li><a href="https://github.com/huge-success/sanic" target="_blank" rel="noopener noreferrer">Sanic</a> (web server)</li>
                                <li><a href="https://github.com/minimaxir/textgenrnn" target="_blank" rel="noopener noreferrer">textgenrnn</a> (text generation)</li>
                                <li><a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">Google Cloud</a> (App Engine &amp; Cloud Storage)</li>
                            </ul>
                            <p>Have suggestions? Want to make your own fork? Found a bug? Just want to judge my code? Take a look at this project's GitHub repos:</p>
                            <br />
                            <GitHubButton text="Frontend" link="https://github.com/jkatofsky/rnn-your-friends" />
                            <GitHubButton text="Backend" link="https://github.com/jkatofsky/textgenrnn-api" />
                        </ContentBox>
                    </Grid>
                </Grid>
            </Grid>
            <br />
        </footer >
    );
}


export default Footer;