import './imageList.css';
import React from 'react';
import ImageDisplay from './imageDisplay';
import ImageCard from  './imageCard';


// 这里绑定this因为类中的方法不会自动绑定指向当前示例，我们需要手动绑定，不然方法中的this将是undefined，这是其中一种绑定的方法，
// 第二种方法是使用箭头函数的方法，如：showModal = () => {}
// 第三种方法是调用的时候绑定，如：this.showModal.bind(this)

class ImageList extends React.Component{
    constructor(props){
        super(props);
        this.state = { visible: false, img:null };
    }

    display = (img) =>{
        this.setState({ visible: true, img:img });
    };

    disableDisplay = () =>{
        this.setState({visible : false});
    };

    render(){
        const images = this.props.images.map((image) => {
            return <ImageCard key={image.id} image={image} display={img => this.display(img)} />;
            });
        //display 做为子组件回传参数的方法

        return (
            <div>
                <div>
                    <ImageDisplay visible={this.state.visible}  img={this.state.img} disableDisplay={this.disableDisplay} />
                </div>
                <div className="image-list">
                    {images}
                </div>
            </div>
        );
    };

};

export default ImageList;
