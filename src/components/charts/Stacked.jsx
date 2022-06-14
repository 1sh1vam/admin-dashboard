/* eslint-disable react/no-array-index-key */
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

function Stacked({ width, height }) {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? 'rgb(51 55 62)' : '#fff'}
      legendSettings={{ background: '#fff' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={`stack-${index}`} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default Stacked;
