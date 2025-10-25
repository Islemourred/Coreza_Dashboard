import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Context from './index';
import { JobSearchApi } from '../../api';

const JobSearchProvider = (props) => {
    const [jobData, setJobData] = useState([]);
    const [search, setsearch] = useState([]);
    useEffect(() => {
        const getJobData = async () => {
            try {
                await axios.get(JobSearchApi).then((resp) => {
                    setJobData(resp.data);
                });
            } catch (error) {
                console.log('cancelled', error);
            }
        };
        getJobData();
    }, [setJobData]);

    return (
        <Context.Provider
            value={{
                ...props,
                jobData,
                search,
                setsearch
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default JobSearchProvider;