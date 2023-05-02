import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  notification: false,
  userProfile: false,
  cart: false,
};

export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(false)

  return (
    <StateContext.Provider value={{ activeMenu}}>
        {children}
    </StateContext.Provider>
  );
};

export const useStateContext = ()=> useContext(StateContext)