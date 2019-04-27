import React , { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input,Container, Row, Col  } from 'reactstrap';
import { Redirect } from 'react-router-dom'
export default class Insert extends Component {
 
    state = {
      date:"",
      invoice_number: "",
      invoice_amount:0,
      invoice_due_date:"",
      customer_country:"",
      item_name:"",
      item_cost:0,
      username:( (localStorage.getItem('invoicedata') ) ? localStorage.getItem('invoicedata') : ""),
      item_qty:0,
      status:false,
    }
     date = () => {
      var curr = new Date();
      curr.setDate(curr.getDate());
      var datea = curr.toISOString().substr(0,10);
      if(this.state.date==="")
       this.setState({date:datea})
       //return <div>{datea}</div>
     }
    sendData = async() => {
      const http = await axios.post('http://localhost:3000/insert', {
        invoice_number:this.state.invoice_number,
        Invoice_date:this.state.date,
        Invoice_amount:this.state.invoice_amount,
        due_date:this.state.invoice_due_date,
        Customer_name:this.state.username,
        country:this.state.customer_country,
        item_name:this.state.item_name,
        item_qty:this.state.item_qty
      });
      this.setState({status:true})
      return alert("insert success");
    }
    inserted = () =>{
      if (this.state.status)
      return  <Redirect to='/'/>
    }
    render(){
        return(
            <div>
             {this.date()}
                <Container>
                <Row>
                  <Col xs="3"></Col>
                  <Col xs="6">
                  <Form action="#">
                    <FormGroup>
                        <Label for="invoice_number">Invoice number</Label>
                         <Input required type="text" name="invoice_number" id="invoice_number"  onChange={(e) => this.setState({invoice_number:e.target.value})} placeholder="Enter username"  />
                         <Label for="invoice_data">invoice data</Label>
                         <Input type="date" id="invoice_data" value={ this.state.date} disabled></Input>
                         <Label for="Invoice_amount">Invoice amount</Label>
                         <Input value={this.state.invoice_amount} type="number" name="Invoice_amount" id="Invoice_amount" disabled   />
                         <Label for="Invoice_due_date">Invoice due date</Label>
                         <Input required type="date" max={this.state.date} name="Invoice_due_date" id="Invoice_due_date"  onChange={(e) => this.setState({invoice_due_date:e.target.value})} placeholder="Enter due date"  />
                         <Label for="Customer_country">Customer country</Label>
                         <Input required type="text"  name="Customer_country" id="Customer_country"  onChange={(e) => this.setState({customer_country:e.target.value})} placeholder="enter country"  />
                         <Label for="Item_name">Item name</Label>
                         <Input required type="text"  name="Item_name" id="Item_name"  onChange={(e) => this.setState({item_name:e.target.value})} placeholder="enter item"  />
                         <Label for="item_qty">Item qty</Label>
                         <Input required type="number"  name="item_qty" id="item_qty"  onChange={(e) => this.setState({item_qty:e.target.value,invoice_amount:(e.target.value*this.state.item_cost)})} placeholder="enter cost"  />
                         
                         <Label for="item_cost">Item cost</Label>
                         <Input required type="number"  name="item_cost" id="item_cost"  onChange={(e) => this.setState({item_cost:e.target.value,invoice_amount:(e.target.value*this.state.item_qty)})} placeholder="enter cost"  />
                         
                         
                    </FormGroup>
                    <Row>
                      <Col xs="5"></Col>
                      <Button  color="success" onClick={(e)=>this.sendData()} >Insert</Button>
                    </Row>
                  
                  </Form>
                  </Col>
                </Row>
              </Container>
              {this.inserted()}
            </div>
        )
    }
}