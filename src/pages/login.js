import React ,{Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input,Container, Row, Col  } from 'reactstrap';
export default class Login extends Component{
    state ={
        user : "",
        pass : "",
        status : false
    }
    clickLogin = async () =>{
        if(this.state.user === "" || this.state.pass === ""){
            return (alert("กรุณากรอกข้อมูลให้ครบถ้วน !!"))
        }
        else{
           const http = await axios.post('http://localhost:3000/user/login', {
                username:this.state.user,
                password:this.state.pass

            })
            if(http.data==="fall"){
                await this.setState({pass:""});
                return alert("login fall")
            }
            else {
                await localStorage.setItem('invoicedata', this.state.user)
                
                this.setState({status:true})
               
            }
        }

    }
    gotoHome = () =>{
        if(this.state.status)
        {
            return <Redirect to='/'/>
        }
    }
    render() {
        return (
            <div>
              
              <Container>
                <Row>
                  <Col xs="3"></Col>
                  <Col xs="6">
                  <Form>
                    <FormGroup>
                    <Label for="exampleEmail">Username</Label>
                    <Input type="text" name="email" id="exampleEmail" onChange={(e) => this.setState({user:e.target.value})} placeholder="Enter username"  />
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={(e) => this.setState({pass:e.target.value})} placeholder="Enter password" value={this.state.pass} />
                    </FormGroup>
                    <Row>
                      <Col xs="5"></Col>
                         <Button color="success" onClick={ (e) => this.clickLogin()}>Login</Button>
                    </Row>
                  
                  </Form>
                  </Col>
                </Row>
              </Container>
              {this.gotoHome()}
            </div>
        );
    }
}