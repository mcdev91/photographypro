import React from 'react';
import './Pages.scss';
import About from './Modal'
import Coverflow from 'react-coverflow';
import { SocialIcon } from 'react-social-icons';
import Logo from '../onload/Logo';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { martynas: false, image: '', portretas: false }
    }

    zoomImg = (event) => {
        var imageSize = this.imageSize(event.currentTarget.src);
        console.log(imageSize)
        if (imageSize.width < imageSize.height) {
            this.setState({
                portretas: true,
                image: event.currentTarget.src,
                martynas: true
            })
        } else {
            this.setState({
                portretas: false,
                image: event.currentTarget.src,
                martynas: true
            })
        }
    }
    imageSize = (image) => {
        var img = new Image();
        img.src = image;

        return { width: img.width, height: img.height }
        // return img.onload = function() { return (this.naturalWidth +' '+ this.naturalHeight)}
    }
    closeModal = () => {
        this.setState({ martynas: false })
    }
    render() {
        return (
            <div className="page">
                <Logo />
                <div className="overlay"></div>
                <div className="mobile-hide">
                    <Coverflow
                        width={960}
                        height={480}
                        displayQuantityOfSide={2}
                        navigation={false}
                        enableHeading={false}
                    >
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (1).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (2).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (3).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (4).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (5).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (6).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (7).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (8).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (9).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (10).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (11).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (12).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (13).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (14).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (15).jpeg' />
                            </Coverflow>
                </div>
                <div className="mobile-show">
                    <div className="photo_wrapper">
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (1).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (1).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (2).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (3).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (4).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (5).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (6).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (7).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (8).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (9).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (10).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (11).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (12).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (13).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (14).jpeg' />
                        <img className="slidePhoto" alt="" onClick={this.zoomImg} src='./assets/photo (15).jpeg' />
                    </div>
                </div>
                {/* <div><hr></hr></div> */}

                <div className="contacts">
                    +3706xxxxxxx
                    <br></br>
                    lorem.ipsum@gmail.com
                    </div>

                <div className="social">
                    {/* <div>
                        Favorite Food: <FontAwesomeIcon icon="stroopwafel" url="www.google.com" />
                    </div> */}
                    <div className="soc">
                        <SocialIcon url="https://www.facebook.com/" />
                    </div>
                    <div className="soc">
                        <SocialIcon url="https://www.instagram.com/" />
                    </div>
                </div>
                <About />
                <div className={this.state.martynas ? 'modal_overlay active' : 'modal_overlay'} onClick={this.closeModal} >
                    <div className={this.state.portretas ? 'modal_image portrait' : 'modal_image landscape'} >
                        <img alt="" src={this.state.image} />
                    </div>
                </div>
                <div className="shadow"></div>
            </div>
        )
    }
}


export default HomePage;