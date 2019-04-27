import React , { Component } from 'react'
import { NavItem,NavLink }from 'reactstrap';
export default class RegisterBtn extends Component {
         show = () =>{
           if(this.props.status==="false"){
               return( <NavItem>
                <NavLink href="/register">Register</NavLink>
                </NavItem>
                )
           }
         }
    render(){
        return(
           <div>
               {this.show()}
           </div>
        )
    }
        
}