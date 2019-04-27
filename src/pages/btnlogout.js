import React , { Component } from 'react'
import { NavItem,NavLink }from 'reactstrap';
export default class LogoutBtn extends Component {
      logoutUser = () =>{
            localStorage.clear();
            window.location.reload();
         }
         show = () =>{
           if(this.props.status==="true"){
               return( <NavItem>
                <NavLink href="#" onClick={(e)=>this.logoutUser()}><u>Logout</u></NavLink>
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