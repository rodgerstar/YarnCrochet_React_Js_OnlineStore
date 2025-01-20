// StoreContextProvider.js
import { createContext } from "react";
import { yarn_piece } from "../assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  console.log('yarn_piece', yarn_piece); // Log to verify the value

  const contextValue = {
    yarn_piece: yarn_piece || {}  // Provide fallback if yarn_piece is undefined
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
