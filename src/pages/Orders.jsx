/* eslint-disable react/no-array-index-key */
import { ColumnDirective, ColumnsDirective, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Inject, Page, PdfExport, Resize, Sort } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="bg-white m-2 p-2 md:m-10 md:p-10 mt-24 rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
