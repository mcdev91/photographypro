import React from 'react';
import './Logo.scss';

let fadeOut;
let fadeOutOut;

class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: <div className="logoContainer">
                <a><img id="logo" className="logo hide" src={require('../../logo.png')} alt=""/></a>
            </div>
        }
    }

    componentDidMount() {

        setTimeout(() => {
            document.getElementById('logo').classList.remove('hide');
        }, 0);



        fadeOut = setTimeout(() => {
            document.getElementById('logo').classList.add('hide');
        }, 5000)

        fadeOutOut = setTimeout(() => {
            document.getElementById('logo').remove();
            document.querySelector('.overlay').remove();
        }, 7000)
    }

    load() {
        clearTimeout(fadeOut)
        clearTimeout(fadeOutOut)
        document.getElementById('logo').remove();
        document.querySelector('.overlay').remove();
    }

    render() {
        return (
            <div>
                <div className="logoContainer">
                    <a><img onClick={this.load.bind(this)} id="logo" className="logo hide" src={require('../../logo.png')} alt=""/></a>
                </div>
            </div>
        )
    }
}

export default Logo;