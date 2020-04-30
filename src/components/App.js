import React from 'react';
import unsplash from  '../api/unsplash';
import SerarchBar from './SearchBar';
import ImageList from './imageList';


class App extends React.Component{
    state = {images:[]}; //initial a state for images, set it to [] ,so we can use .map function build in the [] or other proporty.
    onSearchSubmit = async (term) =>{
        const response = await unsplash.get(
            '/search/photos',
            {
                params:{query:term, per_page:30}
            }
        );
        this.setState({images: response.data.results });
    };




/* ----CODE INCLUDING API INFO----
    onSearchSubmit = async (term) => {
        const response = await axios
            .get('https://api.unsplash.com/search/photos',{
                params:{ query:term },
                headers:{
                    Authorization: 'Client-ID 5b0fd4935f84611dc713c314de4b14bbea6d832bc636c9922b0a0f9d578e750f'
                }
        //To authenticate requests in this way, pass your application’s access key via the HTTP Authorization header:
        //Authorization: Client-ID YOUR_ACCESS_KEY
        //You can also pass this value using a client_id query parameter:
        //https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
        });


        //.then((response)=>{
        //   console.log(response.data.results);
        //});

        // add .then(()=>{}); to catch the response after the API sent back data
        // async and await keyword is more simply to catch the data

        this.setState({images: response.data.results });
    };

*/



    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SerarchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
};
//"onSubmit" is a custom parameter down to the component, you can make any name you want.


export default App;

