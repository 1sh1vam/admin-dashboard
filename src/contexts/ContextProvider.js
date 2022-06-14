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
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');

  const handleClick = (clicked) => setClicked({ ...initialState, [clicked]: true });

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  return (
    <StateContext.Provider value={{
      activeMenu,
      setActiveMenu,
      isClicked,
      handleClick,
      screenSize,
      setScreenSize,
      currentColor,
      currentMode,
      setColor,
      setMode,
      themeSettings,
      setThemeSettings,
    }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
