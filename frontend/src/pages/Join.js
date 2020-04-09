import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Row,Container,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import JoinInput from '../components/JoinInput'


const Join = (props) => {

  
    // if(props.type === 'SUCCESS_JOIN')
    //     return(
    //         <div>
    //             <Redirect to="/"></Redirect>
    //         </div>
    //     )

 



  return(
  <div>

  <Container>
  <Row>
    <Col></Col>
    <Col xs={5}><JoinInput></JoinInput></Col>
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

export default connect(mapStateToProps)(Join)
