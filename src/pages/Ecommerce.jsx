import { BsCurrencyDollar } from 'react-icons/bs';
import { Button } from '../components';

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-center bg-cover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 font-bold">Earnings</p>
              <p className="text-2xl">$23,000</p>
            </div>
            <button className="blue rounded-full">
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              text="Download"
              color="white"
              bgColor="blue"
              size="sm"
              borderRadius="10px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
