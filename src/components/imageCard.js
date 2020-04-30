import React from 'react';


class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = { spans : 0 };
        this.imageRef = React.createRef(); // create a ref element for access img high
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans: spans});
    }

    showRaw = () => {
        this.props.display(this.props.image);
    }

    render () {
        const{description, urls} = this.props.image; //destructure the props, to instand of  this.props.image.xxxxxxx
        //console.log(urls);
        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref = {this.imageRef} alt = {description} src = {urls.small} onClick={this.showRaw} />
            </div>
        );
    }
}

export default ImageCard;

////<a href = {urls.raw} onClick={()=>{console.log(urls.raw)}} >
