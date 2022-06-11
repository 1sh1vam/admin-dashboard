import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState();

  const handleClick = (clicked) => setClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider value={{
      activeMenu,
      setActiveMenu,
      isClicked,
      handleClick,
      screenSize,
      setScreenSize,
    }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
