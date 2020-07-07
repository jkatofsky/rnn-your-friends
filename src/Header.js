import React from 'react';
import './Header.css';
import './App.css';
import GitHubIcon from '@material-ui/icons/GitHub';

class Header extends React.Component {

    githubButton = (text, link) => {
        return <a className='github-button vertically-align-children'
            target="_blank" rel="noopener noreferrer" href={link}>
            <GitHubIcon className='vertically-aligned-child' />&nbsp;<p className='vertically-aligned-child'>{text}</p>
        </a>
    }

    render() {
        return <header>
            <div className="header-col">
                {this.githubButton("Frontend", "https://github.com/jkatofsky/rnn-your-friends")}
                {this.githubButton("Backend", "https://github.com/jkatofsky/textgenrnn-api")}
            </div>
            <div className="header-col">
                <h1 className="main-title"><u>RNN Your Friends</u></h1>
                <h3 className="sub-title">Train an RNN on your iMessages. Mimic your friends.</h3>
            </div>
        </header>
    }
}

export default Header;
