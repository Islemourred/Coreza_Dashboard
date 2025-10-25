import DataTable from 'react-data-table-component';
import { supportColumns, supportData } from '../../Data/SupportTicket';

const TicketTable = () => {
 
  return (
      <div className="table-responsive support-table ">
        <DataTable className='theme-scrollbar'
          columns={supportColumns}
          data={supportData}
          striped={true}
          center={true}
          pagination
        />
      </div>
  );
};
export default TicketTable;