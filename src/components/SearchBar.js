import React from 'react';

class SerarchBar extends React.Component{
    state ={term:''}; // Can put default value here.

    onFormSubmit = (event) => {
        event.preventDefault(); //Prevent Default submit the whole page/form.
        this.props.onSubmit(this.state.term); // use props inside class base component. reference props with this.
    }

    //onFormSubmit(event){} use the arrow function instand of, => will auto bind the 'this' , make sure this is bind to SearchBar
    //1, We can change to  "onFormSubmit = (event) => {}".
    //if you want to keep in the old style which is "onFormSubmit(event){}"
    //2, We can change the onSubmit action <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">

    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className="ui form">
                <label>Image Search</label>
                <div className='inline fields'>
                    <div className='fourteen wide field'>
                        <input 
                            className='ui input'
                            type="text"
                            value ={this.state.term}
                            onChange={(e)=>this.setState({term: e.target.value})}
                        />
                    </div>
                    <div className='two wide field'>
                        <button className='ui button' type='submit'>Search</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
    //we do not put on a set of parentheses when ever we pass a call back function to an event handler like 'onChange','onClick','onSubmit'
    //Without parentheses we sent the reference to event handler.
    //--below are all useing Uncontrolled element, the value is belong to html code(DOM), not react
    //<input type="text" onChange={this.onInputChange}/>
    //<input type="text" onChange={(e)=>console.log(e.target.value)}/>
    //both way is fine.
    //--here is controlled element - the state change, element get rerender.The value belong to state, so react can controll them.
    //<input type="text" value ={this.state.term} onChange={(e)=>this.setState({term: e.target.value})}/>

}

export default SerarchBar;
