/* eslint-disable react/no-array-index-key */
import { ColumnsDirective, Inject, ColumnDirective, GridComponent, Search, Page } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="grid-comp-emplyoees"
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCound: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
