import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Form,Button,ListGroup} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {doJoin} from "../actions/userAction"
import {Redirect} from 'react-router-dom'
class JoinInput extends Component {

    state = {name:'user11', userid:'user11', userpw:'user11'}


    render() {
    




        return(
<div>
<a className="logo mb-5 col-8">회원가입</a>
<ListGroup.Item className="auth">
  
    <Form>

    <Form.Group controlId="formBasicEmail">
    <Form.Label>이름</Form.Label>
    <Form.Control type="text" placeholder="이름을 입력하여주세요." onChange = {(e) => { this.setState({name:e.target.value}) } } />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>아이디</Form.Label>
    <Form.Control type="text" placeholder="아이디를 입력하여주세요." onChange = {(e) => { this.setState({userid:e.target.value}) } } />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

 

  <Form.Group controlId="formBasicPassword">
    <Form.Label>비밀번호</Form.Label>
    <Form.Control type="password" placeholder="비밀번호를 입력하여주세요."  onChange = {(e) => { this.setState({userpw:e.target.value}) } }/>
  </Form.Group>
  
 
  <Button variant="warning" onClick={() => this.props.doJoin(this.state)}>
    회원가입
  </Button>
 

</Form>
    </ListGroup.Item>

    
</div>
        )
    }}




const mapDispatchToProps = (dispatch) => {
    return {doJoin: (userObj) => dispatch(doJoin(userObj))}
}

export default connect(null, mapDispatchToProps)(JoinInput)