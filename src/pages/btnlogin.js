import React , { Component } from 'react'
import { NavItem,NavLink }from 'reactstrap';
export default class LoginBtn extends Component {
         show = () =>{
           if(this.props.status==="false"){
               return( <NavItem>
                <NavLink href="/login">Login</NavLink>
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