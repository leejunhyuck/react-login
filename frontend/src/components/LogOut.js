import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Form,Button,ListGroup} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {doJoin} from "../actions/userAction"
import {Redirect} from 'react-router-dom'
import {doLogout} from '../actions/userAction'

class JoinInput extends Component {



    render() {
    

        return(

  <div>
 
  <Button variant="primary" onClick={() => this.props.doLogout()}>
    로그아웃
  </Button>
 

    
</div>
        )
    }}




const mapDispatchToProps = (dispatch) => {
    return {doLogout: () => dispatch(doLogout())}
}

export default connect(null, mapDispatchToProps)(JoinInput)