import React , {Component } from 'react'

class connectButton extends Component {
    render(){
    return (
    <button className='connectbutton' onClick={(e)=> {
        e.preventDefault() 
        console.log("hello button")
        this.props.loadBlockchain() 
       } }> </button>
        ) 
    }
}

export default connectButton;

