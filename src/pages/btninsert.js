import React , { Component } from 'react'
import { NavItem,NavLink }from 'reactstrap';
export default class insertBtn extends Component {
      
         show = () =>{
           if(this.props.status==="true"){
               return( <NavItem>
                <NavLink href="/insert" ><u>insert invoice</u></NavLink>
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