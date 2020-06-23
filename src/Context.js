import React from "react";
export const RoomContext = React.createContext();

// # THIS PROVIDER IS A COMPONENT IT'S SELF YOU JUST USE IT IN YOUR TOP COMONENT
// # PASS YOUR DATA IN VALUE E.G value={you data}
//  https://www.taniarascia.com/using-context-api-in-react/

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export const RoomProvider = RoomContext.Provider;
export const RoomConsumer = RoomContext.Consumer;

export default RoomContext;
