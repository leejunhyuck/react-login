import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Form,Button,ListGroup} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {doLogin} from "../actions/userAction"

class LoginInput extends Component {

    state = {userid:'user11', userpw:'user11'}


    render() {
        return(
            <div>
<a className="logo">회의실 예약</a>
<ListGroup.Item className="auth">
  
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>아이디</Form.Label>
    <Form.Control type="text" placeholder="아이디를 입력해주세요."  onChange = {(e) => { this.setState({userid:e.target.value}) } } />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>비밀번호</Form.Label>
    <Form.Control type="password" placeholder="비밀번호를 입력해주세요."  onChange = {(e) => { this.setState({userpw:e.target.value}) } } />
  </Form.Group>
  
  <Button variant="primary"   onClick={() => this.props.doLogin(this.state)}>
    로그인
  </Button>


  <Link to="/join">
  <Button variant="warning">
    회원가입
  </Button>
  </Link>
  
</Form>
    </ListGroup.Item>

        
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {doLogin: (userObj) => dispatch(doLogin(userObj))}
}

export default connect(null, mapDispatchToProps)(LoginInput)