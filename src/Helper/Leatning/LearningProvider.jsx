import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Context from './index';
import { LearningApi } from '../../api';

const LearningProvider = (props) => {

    const [learningData, setLearningData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const defaultData = async () => {
            await axios.get(`${LearningApi}`).then((res) => {
                setLearningData(res.data);
            });
        };
        defaultData();
    }, [setLearningData]);

    return (
        <Context.Provider
            value={{
                ...props,
                learningData,
                isOpen,
                setIsOpen
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
export default LearningProvider;