import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';

import avatar from '../data/avatar.jpg';

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

  const handleClick = () => {};

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavBtn title="Menu" icon={<AiOutlineMenu />} color="blue" customFunc={() => setActiveMenu((prev) => !prev)} />

      <div className="flex">
        <NavBtn title="Cart" icon={<FiShoppingCart />} color="blue" customFunc={() => handleClick('cart')} />
        <NavBtn title="Chat" icon={<BsChatLeft />} color="blue" dotColor="#03C9D7" customFunc={() => handleClick('cart')} />
        <NavBtn title="Notification" icon={<RiNotification3Line />} color="blue" dotColor="#03C9D7" customFunc={() => handleClick('cart')} />
        <div className="flex text-14 text-gray-400 items-center cursor-pointer gap-2 p-1 hover:bg-light-gray rounded-lg">
          <img src={avatar} className="w-8 h-8 rounded-full" alt="Avatar" />
          <p>
            <span>Hi,</span>
            <span className="font-bold ml-1">Dhoni</span>
          </p>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
