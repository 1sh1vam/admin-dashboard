/* eslint-disable react/no-array-index-key */
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { themeColors } from '../data/dummy';

function ThemeSettings() {
  const { setThemeSettings, currentColor, currentMode, setMode, setColor } = useStateContext();

  return (
    <div className="w-screen bg-half-transparent nav-item fixed top-0 right-0">
      <div className="w-400 float-right h-screen bg-white dark:bg-[#484B52] dark:text-gray-200">
        <div className="flex items-center justify-between p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => setThemeSettings(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="p-4 ml-4 border-t-1 border-color">
          <p className="text-xl font-semibold">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
          </div>
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="text-xl font-semibold">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
