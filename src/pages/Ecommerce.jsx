import { BsCurrencyDollar } from 'react-icons/bs';
import { Button } from '../components';
import { earningData } from '../data/dummy';

const Ecommerce = () => {
  return (
    <div className="mt-24">
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
        <div className="flex flex-wrap m-3 justify-center items-center gap-1">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondaey-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                className="rounded-full text-2xl opacity-0.9 p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
