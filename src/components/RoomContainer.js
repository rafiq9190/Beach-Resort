import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading,  rooms, sortedRooms } = context;
  console.log(context);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from "./RoomList";
// import {RoomConsumer} from "../Context";
// import Loading from "./Loading";

// export default function RoomContainer(){
//     return(
//         <RoomConsumer>
//             {
//                 (value)=>{
//                     const{loading,sortRooms,rooms}=value;
//                     if(loading){
//                         return <Loading/>;
//                     }
//                     return(
//                         <div>
//             Hello from rooms container
//             <RoomFilter rooms={rooms}/>
//             <RoomList rooms={sortRooms}/>
//         </div>
//                     )
//                 }
//             }

//         </RoomConsumer>

//     )

// }
