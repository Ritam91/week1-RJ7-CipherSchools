import React, {Component} from "react";

// const UserDetails = ({user = {}}) => {
//     const UserDetails = ({user = {}}) => {
//         // let user = props.user;
//         // let {user} = props;
//     return(
//         <div>
//             <h3>{user.name}</h3>
//             <h5>
//                 Email : {user.email} <br/>
//                 Phone Number: {user.phoneNumber}
//             </h5>
//         </div>
//     )
// }

class UserDetails extends Component{
    user = this.props.user;
    render(){
        
        return(
            <div><h3>{this.user.name}</h3>
                        <h5>
                            Email : {this.user.email} <br/>
                            Phone Number: {this.user.phoneNumber}
                        </h5>
                        </div>
        )
    }
}
export default UserDetails;