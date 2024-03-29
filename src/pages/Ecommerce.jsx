import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Button, SparkLine, Stacked } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { earningData, SparklineAreaData } from '../data/dummy';

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-center bg-cover">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 font-bold">Earnings</p>
              <p className="text-2xl">$23,000</p>
            </div>
            <button style={{ backgroundColor: currentColor }} className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4">
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              text="Download"
              color="white"
              bgColor={currentColor}
              size="sm"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex flex-wrap m-3 justify-center items-center gap-1">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
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
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p className="text-3xl font-semibold">
                  $93,438
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23%</span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button color="white" bgColor={currentColor} text="Download Report" borderRadius="10px" />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
