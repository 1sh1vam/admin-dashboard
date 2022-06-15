/* eslint-disable react/no-array-index-key */
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import Button from './Button';

function Cart() {
  const { currentColor } = useStateContext();

  return (
    <div className="w-full bg-half-transparent fixed nav-item top-0 right-0">
      <div className="float-right h-screen bg-white dark:bg-[#484B52] transition-all duration-1000 ease-in-out dark:text-gray-200 md:w-400 p-8">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold ">Shopping Cart</p>
          <Button icon={<MdOutlineCancel />} bgHoverColor="light-gray" color="rgb(153, 171, 180)" size="2xl" borderRadius="50%" />
        </div>
        {cartData.map((item, index) => (
          <div key={index} className="p-4 flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600">
            <img className="rounded-lg w-24 h-80" src={item.image} alt="item img" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
              <div className="flex items-center gap-4 mt-2">
                <p className="font-semibold text-lg">{item.price}</p>
                <div className="flex items-center border-1 border-color rounded-lg">
                  <p className="p-2 text-red-600 cursor-pointer"><AiOutlineMinus /></p>
                  <p className="border-r-1 border-l-1 p-2 dark:border-gray-600 border-color text-red-600">0</p>
                  <p className="p-2 dark:border-gray-600 text-green-400 cursor-pointer"><AiOutlinePlus /></p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex mt-3 mb-3 items-center justify-between">
          <p className="text-gray-500 dark:text-gray-200 ">Sub Total</p>
          <p className="font-semibold">$399</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500 dark:text-gray-200 ">Total</p>
          <p className="font-semibold">$599</p>
        </div>
        <div className="mt-5">
          <Button text="Place Order" color="white" bgColor={currentColor} borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  );
}

export default Cart;
