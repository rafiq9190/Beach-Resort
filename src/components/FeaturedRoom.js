import React from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from './Title';


export default class FeaturedRoom extends React.Component {
  static contextType = RoomContext;
  render() {
    let{loading,featuredRooms:rooms}=this.context;
    rooms=rooms.map(room=>{
      return <Room key={room.id} room={room}/>
    })
    return (
      <>
        <section className="featured-rooms">
          <Title title="Featured Rooms "/>
          <div className="featured-rooms-center">
            {loading?<Loading/>:rooms}
          </div>

        </section>
    
      
        {/* <RoomContext.Consumer>
          {data => (
            <div>
              <h2>{data.name}</h2>
              <h5>{data.age}</h5>
            </div>
          )}
        </RoomContext.Consumer> */}
      </>
    );
  }
}
