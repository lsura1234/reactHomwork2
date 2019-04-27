import React , { Component } from 'react'
import { Collapse,
        Navbar,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink
        }
         from 'reactstrap';
import BtnLogin from './btnlogin'
import BtnLogout from './btnlogout'
import BtnRegister from './btnregister'
import BtnInsert from './btninsert'
export default class Header extends Component {
    constructor(props) {
        super(props);
            
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false,
        name:( (localStorage.getItem('invoicedata') ) ? localStorage.getItem('invoicedata') : ""),
        status:false,
         login:((localStorage.getItem('invoicedata') ) ?"true":"false"),
            };     
        }
        toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
         }
        changeStatus = () =>{
            this.setState({login:"false"})
        }
    render() {
        return (
                    <div>
                <Navbar color="light" light expand="md">
                  <NavbarBrand href="#">Invoice</NavbarBrand>
                  
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                          <BtnLogin status={this.state.login}/>
                          <BtnRegister status={this.state.login}/>
                          <BtnInsert status={this.state.login}/>
                      <NavItem>
                        <NavLink href="#"><b>{this.state.name}</b></NavLink>
                      </NavItem>
                         {/* <TranferBtn status={this.state.login}/> */}
                         <BtnLogout onClick={(e) => this.changeStatus()} status={this.state.login}/>
                        
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
                )
            }
        }