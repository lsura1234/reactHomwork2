import React , { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input,Container, Row, Col  } from 'reactstrap';
import { Redirect } from 'react-router-dom'
export default class Register extends Component {
    state = {
        username : "",
        pass1 : "",
        pass2 : "",
        status :false
    }
    sendData = async() => {
        if(this.state.username===""||this.state.pass1===""||this.state.pass2===""){
            return alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        }
        else if(this.state.pass1!==this.state.pass2){
            this.setState({pass2:""})
            return alert("รหัสไม่ตรงกัน")
        }
        else{
            const http = await axios.post('http://localhost:3000/user/register', {
                username:this.state.username,
                password:this.state.pass1,
                passwordConfirm:this.state.pass2
            })
            if(http.data==="fall1"){
                return alert("username นี้ถูกใช้แล้ว")
            }
            else {
                 this.setState({status:true})
            }
        }
    }
    check = () => {
        if(this.state.status)
        return <Redirect to='/login'/>
    }
    render(){
        return(
            <div>
                <Container>
                <Row>
                  <Col xs="3"></Col>
                  <Col xs="6">
                  <Form action="#">
                    <FormGroup>
                        <Label for="username">Username</Label>
                         <Input required type="text" name="username" id="username"  onChange={(e) => this.setState({username:e.target.value})} placeholder="Enter username"  />
                         <Label for="pass1">Password</Label>
                         <Input required type="password" name="middleName" id="pass1"  onChange={(e) => this.setState({pass1:e.target.value})} placeholder="Enter password"  />
                         <Label for="pass2">Confirm Password</Label>
                         <Input required type="password" name="lastName" id="pass2" value={this.state.pass2} onChange={(e) => this.setState({pass2:e.target.value})} placeholder="Enter confirm password"  />
                    </FormGroup>
                    <Row>
                      <Col xs="5"></Col>
                      <Button type="submit" color="success" onClick={(e)=>this.sendData()} >Register</Button>
                    </Row>
                  
                  </Form>
                  </Col>
                </Row>
              </Container>
              {this.check()}
            </div>
        )
    }
}