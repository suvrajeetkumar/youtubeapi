import React from "react";
import '../App.css';
import {Container,Row,Col,Card} from 'react-bootstrap';

const info = (props) =>{
    return(
        <div>
        <Container>
            <Row>
               
               <Col md="auto">
               
               <Card style={{ height: '18rem' , boxShadow: "5px 5px 7px 0" , backgroundColor : "#ff7979" }}>
                   <Card.Body>
                       <Card.Title><h1>suscribers count :</h1></Card.Title>
                       <Card.Text>
                       <p style={{fontSize:90 , color:"#0097e6"}}>{props.subscribers}</p>
                       </Card.Text>
                   </Card.Body>
               </Card>
                
                
                
               </Col>
               
                
               <Col>
               <Card style={{ height: '18rem' , boxShadow: "5px 5px 7px 0" , backgroundColor : "#7ed6df" }}>
                   <Card.Body>
                       <Card.Title><h1> video count :</h1></Card.Title>
                       <Card.Text>
                           <p style={{fontSize:90 , color:"#0097e6"}}>{props.videoCount}</p>
                       </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

               <Col>
               <Card style={{ height: '18rem' , boxShadow: "5px 5px 7px 0" , backgroundColor : "#badc58"}}>
                   <Card.Body>
                       <Card.Title><h1> View count :</h1></Card.Title>
                       <Card.Text>
                <p style={{fontSize:90 , color:"#0097e6"}}>{props.viewCount}</p>
                       </Card.Text>
                    </Card.Body>
                </Card>
               </Col>
           </Row>
        </Container>
 
            
            
            
        </div>
    )
}

export default info;
