/* eslint-disable react/no-array-index-key */
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { chatData } from '../data/dummy';

function Notification() {
  const { currentColor } = useStateContext();
  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 p-8 bg-white dark:bg-[#42464D] rounded-lg w-96">
      <div className="flex items-center mb-5 justify-between">
        <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      {chatData.map((item, index) => (
        <div key={index} className="flex items-center gap-5 leading-8 p-3 border-b-1 border-color cursor-pointer">
          <img className="rounded-full w-10 h-10" src={item.image} alt="ProfileImage" />
          <div>
            <p className="font-semibold dark:text-gray-200">{item.message}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
      <div className="mt-5">
        <Button
          text="See all notifications"
          color="white"
          bgColor={currentColor}
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
}

export default Notification;
