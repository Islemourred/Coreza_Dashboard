import React, { Fragment, useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { LI, UL, H6 } from '../../../../AbstractElements';


const CountdownData = () => {
    // eslint-disable-next-line
    const [style, setStyle] = useState({});
    useEffect(() => {
        const isMounted = setTimeout(function () {
            setStyle({ style: { display: 'none' } });
        }, 1000);
        return () => {
            clearTimeout(isMounted);
        };
    }, []);
    const Completionist = () => <span>{'You are good to go!'}</span>;

    const renderer = ({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <div>
                <UL attrUL={{ className: 'simple-list flex-row timer-sec countdown' }}>
                    <LI>
                        <H6 attrH6={{ className: 'font-primary m-0 days' }}>{days} </H6><span className="font-dark">Days </span>
                    </LI>
                    <LI>
                        <H6 attrH6={{ className: 'font-primary m-0 hours' }}>{hours} </H6><span className="font-dark">Hours</span>
                    </LI>
                    <LI>
                        <H6 attrH6={{ className: 'font-primary m-0 minutes' }}> {minutes}</H6><span className="font-dark">Min</span>
                    </LI>
                    <LI>
                        <H6 attrH6={{ className: 'font-primary m-0 seconds' }}>{seconds} </H6><span className="font-dark">Sec</span>
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