import React, { Fragment, useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { LI, UL } from '../../../AbstractElements';


const CountdownData = () => {
    // eslint-disable-next-line
    const [style, setStyle] = useState({});
    useEffect(() => {
        setTimeout(function () {
            setStyle({ style: { display: 'none' } });
        }, 1000);
    }, []);
    const Completionist = () => <span>{'You are good to go!'}</span>;

    const renderer = ({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <div>
                <UL attrUL={{ className: 'simple-list flex-row' }}>
                    <LI>
                        <span id="days" className="time">{days}</span>
                        <span className="title">{'days'}</span>
                    </LI>
                    <LI>
                        <span className="time" id="hours">{hours}</span>
                        <span className="title">{'Hours'}</span>
                    </LI>
                    <LI>
                        <span className="time" id="minutes">{minutes}</span>
                        <span className="title">{'Minutes'}</span>
                    </LI>
                    <LI>
                        <span className="time" id="seconds">{seconds}</span>
                        <span className="title">{'Seconds'}</span>
                    </LI>
                </UL>
            </div>;
        }
    };

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var coundown = new Date(year, month, day + 10).getTime();

    return (
        <Fragment>
            <Countdown date={coundown} renderer={renderer} />
        </Fragment>
    );
};

export default CountdownData;