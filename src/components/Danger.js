import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cssfiles/danger.css'

export default class  extends Component {
  

    render() {
        const tokens2= this.props.tokens2
        const imgURLs= this.props.imgURLs
        window.onload = function (event) {
            var myitem = document.querySelectorAll(".dangerrow");
            for(var h=0; h<myitem.length; h++){
                myitem[h].onclick = function(e){
                    var myitem = document.querySelectorAll(".dangerrow");
        
                    for(h=0; h<myitem.length; h++){
                        myitem[h].classList.remove("bordered");
                    }
        
                    this.classList.add("bordered");
        
                };
            }
        };
        return (
            
        <div className='mintpage'>
            <br/>
            <h2>YOUR JALALS IN DANGER</h2>
            <div className='dangerdiv'>
            { tokens2.map((token,index) => (
                <Row onClick={(e)=> {
                    e.preventDefault() 
                    this.props.setrevive(token)}} className='dangerrow'
                    >
                    <Col ><h3>{token}</h3></Col>
                    <Col><img  src={ imgURLs[index] } height={70} />{' '} </Col>
                </Row>
            ))}

            </div>
            <btn  > <h3 onClick={(e)=> {
                    e.preventDefault() 
                    this.props.revivefunc()}} className="btn4">Revive</h3> </btn>
        </div>
        )
  }
}
