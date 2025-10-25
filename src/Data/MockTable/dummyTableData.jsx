import React from 'react';

export const tableData = [
    {
        id: '1',
        name: 'Product Menu',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2023-04-18T00:00:00'
    },
    {
        id: '2',
        name: 'Category Menu',
        status: <i className="fa fa-circle font-warning f-12" />,
        creat_on: '2023-04-18T00:00:00'
    },
    {
        id: '3',
        name: 'Subcategory Menu',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2023-04-18T00:00:00'
    },
    {
        id: '4',
        name: 'Sales  Menu',
        status: <i className="fa fa-circle font-danger f-12" />,
        creat_on: '2023-04-18T00:00:00'
    },
    {
        id: '5',
        name: 'Vendor Menu',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2023-04-18T00:00:00'
    },
    {
        id: '6',
        name: 'Category Menu',
        status: <i className="fa fa-circle font-warning f-12" />,
        creat_on: '2023-04-18T00:00:00'
    }
];

export const tableColumns = [
    {
        name: 'ID',
        selector: Row => Row['id'],
        sortable: true,
        center: true,
    },
    {
        name: 'Name',
        selector: Row => Row['name'],
        sortable: true,
        center: true,
    },
    {
        name: 'Status',
        selector: Row => Row['status'],
        sortable: true,
        center: true,
    },
    {
        name: 'Creat_on',
        selector: Row => Row['creat_on'],
        sortable: true,
        center: true,
    },
];




