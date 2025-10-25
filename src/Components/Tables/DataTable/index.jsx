import { Btn,  Breadcrumbs, H4 } from '../../../AbstractElements';
import React, { Fragment, useState, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import HeadingCommon from '../../../Common/Component/HeadingCommon';
import { DataTableHeading } from '../../../Constant';
import { dummytabledata,tableColumns}  from '../../../Data/DataTable/Defaultdata';

const DataTablesContain = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleDelet, setToggleDelet] = useState(false);
  const [data, setData] = useState(dummytabledata);

  const handleRowSelected = useCallback(state => {
      setSelectedRows(state.selectedRows);
  }, []);

  const handleDelete = () => {
      if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
          setToggleDelet(!toggleDelet);
          setData(data.filter((item) => selectedRows.filter((elem) => elem.id === item.id).length > 0 ? false : true));
          setSelectedRows('');
      }
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Datatable" parent="Tables" title="Datatable" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon Heading={DataTableHeading}  />
              <CardBody className='pt-0'>
                {(selectedRows.length !== 0) &&
                  <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
                      <H4 attrH4={{ className: 'text-muted m-0' }}>Delete Selected Data?</H4>
                      <Btn attrBtn={{ color: 'danger', onClick: () => handleDelete() }}>Delete</Btn>
                  </div>
              }
              <DataTable 
                className='data-tables theme-scrollbar'
                data={data} 
                columns={tableColumns}
                striped={true}
                center={true}
                pagination
                selectableRows
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={toggleDelet}
            />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );

};
export default DataTablesContain;