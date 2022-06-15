/* eslint-disable react/no-array-index-key */
import { MdOutlineCancel } from 'react-icons/md';
import Button from './Button';

import avatar from '../data/avatar2.jpg';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

function UserProfile() {
  const { currentColor } = useStateContext();
  return (
    <div className="nav-item top-16 absolute right-1 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex items-center gap-5 mt-6 pb-6 border-b-1 border-color">
        <img className="rounded-full w-24 h-24" src={avatar} alt="Avatar" />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">Amanda Julie</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Writer</p>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">info@amanda.com</p>
        </div>
      </div>
      {userProfileData.map((item, index) => (
        <div key={index} className="flex gap-5 p-4 items-center border-b-1 border-color hover:bg-light-gray dark:hover:bg-[#42464D] cursor-pointer">
          <button style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-xl rounded-lg p-3 hover:bg-light-gray">
            {item.icon}
          </button>
          <div>
            <p className="font-semibold dark:text-gray-200">{item.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
          </div>
        </div>
      ))}
      <div className="mt-5">
        <Button
          text="Logout"
          color="white"
          bgColor={currentColor}
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
}

export default UserProfile;
