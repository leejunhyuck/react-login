import React from 'react'
import {Redirect} from 'react-router-dom'
import {Row,Container,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import {connect} from 'react-redux'
import LogOut from '../components/LogOut'

const Reservations = (props) => {

   if(props.type === 'SUCCESS_LOGOUT')
        return(
            <div>
                <Redirect to="/"></Redirect>
            </div>
        )
    
  
    return(
    <div>
  
    <Container>


    <Row>
      <Col></Col>
      <Col xs={5}><LogOut></LogOut></Col>
      <Col></Col>
    </Row>
  </Container>
      
  
        
     
  
    </div>
    )
  }

  const mapStateToProps = ({userReducer}) => {
    console.log(userReducer.type)
    return {type: userReducer.type }
  }
  
  export default connect(mapStateToProps)(Reservations)
  
