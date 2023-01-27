import React, {useState} from "react";
import UserDetails from "./UserDetails";
import Test from "./Test";

const AllUserList =() =>{
    const [state,setState] = useState({
        name : "Ritam Kumar Sinha",
    });
    // state = {

    //     name: "Ritam Kumar Sinha"
    // };

     let allUser =[{
        name: "Ritam",
        email: "sham@gmail.com",
        phoneNumber: "93284357"
    },
    {
        name: "Sham",
        email: "ritam@gmail.com",
        phoneNumber: "374374357"
    },
    {
        name: "Shilpi",
        email: "shilpi@gmail.com",
        phoneNumber: "937684357"
    },
    {
        name: "Shakshi",
        email: "shakshii@gmail.com",
        phoneNumber: "389489768"
    }
    ];

    let setStateName = (name) =>
    {
        setState({...state, name});
    };

// //   let array = [
// //     <UserDetails user = {allUser[0]}/>,
// //     <UserDetails user = {allUser[1]}/>,
// //     <UserDetails user = {allUser[2]}/>,
// //   ];
// render() {
//     setTimeout(() => {
//         this.setState({ name: "Riya" });
//     }, 5000);
    // return (
    //     <div>
    //         <h1>This name is {this.state.name} </h1>
    //         {this.allUser.map((user, index) => (
    //             <UserDetails key={index} user={user} />
    //         ))}
    //     </div>
    // );
// }
// };
// const AllUserList = () => {
//  const [state, setState] = useState({name : "Ritam Kumar Sinha"});
//  return(
//     <h1>The name is {state.name}</h1>
//  )
// };
return (
    <div>
        <Test user = {state.name} setName = {setStateName}/>
        {allUser.map((user, index) => (
            <UserDetails key={index} user={user} />
        ))}
    </div>
);
        }
export default AllUserList;