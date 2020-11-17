import React , { Component } from 'react';
import './App.css';
import Search from './Components/search';
import Info from './Components/info';
import youtubeApi from './Components/api/youtube';
import VedioPlayer from './Components/videoplayer';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class app extends Component {

  state = {
    subscribers : 0,
    videoCount : 0,
    viewCount : 0 
  };

  

  searchHandler = async keyword => {
    const response = await youtubeApi.get("/channels",{
      params:{
        id:keyword
      }
    })
    //console.log(response);
    this.setState({
      subscribers: response.data.items[0].statistics.subscriberCount,
      videoCount: response.data.items[0].statistics.videoCount,
         viewCount: response.data.items[0].statistics.viewCount,
    })
    console.log(this.state);
    
  }

  render(){
    return(
      <div className= "view">
        <Container>
          <div className="wrapper">
          <Row className="justify-content-md-center">
            <Col md="auto">
            <Search onSearch={this.searchHandler}/>
            </Col>
          </Row>
          </div>
          
          <Row>
            <Col>
            <Info subscribers={this.state.subscribers} videoCount={this.state.videoCount}  viewCount={this.state.viewCount}/>;
            </Col>
          </Row>
        </Container>
       
       
        {/* <VedioPlayer vedioId = {this.state.selectedVideoId}/> */}
      
      </div>

      
    )
  }
}


export default app;
