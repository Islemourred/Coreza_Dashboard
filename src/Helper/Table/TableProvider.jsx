import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TableDataApi } from '../../api';
import Context from './index';

const TableProvider = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(TableDataApi).then(res => setData(res.data));
    }, []);

    return (
        <Context.Provider
            value={{
                ...props,
                data
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default TableProvider;