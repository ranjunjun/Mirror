import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './slider.less';

 // let images=[
 // require('./2.jpg'),
 // require('./1.jpg'),
 // require('./2.jpg')
 // ];

export default class Slider extends Component {
    constructor() {
        super();
        this.state = {index: 0};
    }

    render() {
        let swipeOptions = {
            startSlide: 1,
            speed: 400,
            auto: 1000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: (index) => {
                this.setState({index});
            }
        };

        return (
            <div className="carousel_wrapper">
                <ReactSwipe swipeOptions={swipeOptions}>
                    {
                        this.props.images.map((item, index) => (
                            <div key={index}>
                                <img src={item}/>
                            </div>
                        ))
                    }
                </ReactSwipe>
                <div className="dots">
                    {
                        this.props.images.map((item, index) => (
                            <span key={index} className={this.state.index === index ? 'active' : ''}>
                        </span>
                        ))
                    }
                </div>
            </div>
        )
    }
}