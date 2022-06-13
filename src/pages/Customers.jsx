/* eslint-disable react/no-array-index-key */
import { ColumnDirective, Selection, Page, Toolbar, Edit, Sort, Filter, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="grid-comp-customer"
        dataSource={customersData}
        enableHover={false}
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Sort, Filter, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
