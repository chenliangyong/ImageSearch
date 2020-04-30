import React, { Component } from 'react';
import './imageDisplay.css';
class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false}; //this state get update everytime when props pass!!!
  }

  // Everytime received the props update, will update the state of visible. But not work for the first time load.
  componentWillReceiveProps(props) {
    //console.log('props pass and visible in ImageDisplay ='+ props.visible);
    this.setState({ visible: props.visible });
  }

  // chick close button will set the visible to false
  closeModal = () =>  {
    this.props.dis();
    //this.setState({ visible: false });
  }

  download = () => {
    const aLink = document.createElement('a');
    //add "?force=true" ,because the image API
    aLink.setAttribute('href', this.props.img.links.download+"?force=true");
    aLink.setAttribute('download', this.props.img.id+".jpg");
    aLink.click();
    // windows open also working, just open a new tab for download then close
    // window.open(this.props.img.links.download+"?force=true")
    //this.setState({ visible: false })
    this.props.dis();
  }

  maskClick= () =>  {
    //this.setState({ visible: false})
    this.props.dis();
  }

  render() {
    // use visible state to control the modal on/off
    const { visible } = this.state;
    const { img } = this.props;
    return visible && <div className="modal-wrapper">
      <div style={{ width : `${(window.document.body.offsetHeight-150)*img.width/img.height}px`,
                    height : `${window.document.body.offsetHeight-50}px`
                  }} className="modal" >
        <div className="modal-title">
          {img.description!=null ? img.description:img.alt_description}
        </div>
        <div style={
          { backgroundImage : `url(${img.urls.full})` ,
            width : `${(window.document.body.offsetHeight-150)*img.width/img.height}px` ,
            height : `${window.document.body.offsetHeight-150}px`
          } } className="modal-content">
        </div>
        <div className="modal-operator">
          <button onClick={this.closeModal} className="modal-operator-close" >Close</button>
          <button onClick={this.download} className="modal-operator-confirm" >Download</button>
        </div>
      </div>
      <div
        className="mask"
        onClick={this.maskClick}
      ></div>
    </div>
  }
}

export default ImageDisplay;
