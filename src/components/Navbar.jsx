import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';
import { useStateContext } from '../contexts/ContextProvider';

const NavBtn = ({ title, icon, color, dotColor, customFunc }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      style={{ color }}
      onClick={customFunc}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex top-2 right-2 rounded-full h-2 w-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

function NavBar() {
  const { setActiveMenu } = useStateContext();
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavBtn title="Menu" icon={<AiOutlineMenu />} color="blue" customFunc={() => setActiveMenu((prev) => !prev)} />
    </div>
  );
}

export default NavBar;
