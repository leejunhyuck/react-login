import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Row,Container,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import {Form,Button,ListGroup} from 'react-bootstrap'
import LoginInput from '../components/LoginInput';

const Main = (props) => {

  if(props.type === 'SUCCESS_LOGIN')
        return(
            <div>
                <Redirect to="/reservation"></Redirect>
            </div>
        )
  


  return(
  <div>

  <Container>
  <Row>
    <Col></Col>
    <Col xs={5}><LoginInput></LoginInput></Col>
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

export default connect(mapStateToProps)(Main)
