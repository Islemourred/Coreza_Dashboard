import React, { Fragment, useState } from 'react';
import Board from '@asseinfo/react-kanban';
import { apitodoboard, CardData } from '../../Data/MockTable/apiboard';
import { Btn } from '../../AbstractElements';
import InsideApi from './InsideApi';

const ApiBoard = () => {
    const [board, setBoard] = useState(apitodoboard);
    const addDefaultboard = () => {
        board.columns.push({
            id: Date.now(),
            title: 'Done',
            cards: CardData
        });
        setBoard({ ...board });
    };
    const AddElementIntoTodo = () => {
        const index = board.columns.findIndex(x => x.title === 'Todo');
        board.columns.map(elm => {
            if (index === 0 && elm.title === 'Todo') {
                return {
                    ...elm,
                    ...elm.cards.push({
                        id: Date.now(),
                        title: 'Test Sidebar',
                        date: '24/7/22',
                        priority: 'Urgent',
                        img: require('../../assets/images/user/3.jpg'),
                        company: 'Pixelstrap, New york',
                        rate: '+5',
                        customer_img1: require('../../assets/images/user/3.jpg'),
                        customer_img2: require('../../assets/images/user/1.jpg'),
                        customer_img3: require('../../assets/images/user/5.jpg'),
                    })
                };
            }
            return elm;
        });
        setBoard({ ...board });
    };
    const removeDoneboard = () => {
        const index = board.columns.findIndex(x => x.title === 'Done');
        if (index === 2) {
            board.columns.splice(index, 1);
            setBoard({ ...board });
        }
    };
    return (
        <Fragment>
            <div className="kanban-container">
                <main className="kanban-drag">
                    <Board
                        initialBoard={board}
                        renderCard={({ title, date, priority, backgroundImg, img, company, rate, customer_img1, customer_img2, customer_img3, id }) => (
                            <div className="kanban-item" id="todo" key={id}>
                                <InsideApi date={date} company={company} img={img} title={title} priority={priority} rate={rate} customer_img1={customer_img1} customer_img2={customer_img2} customer_img3={customer_img3}
                                />
                            </div>
                        )}
                    >
                        {board}
                    </Board>

                    <div className="mt-3">
                        <Btn attrBtn={{ color: 'primary', className: 'ms-1 mb-1', onClick: addDefaultboard }}>Add &quot;Default&quot; {'board'}</Btn>
                        <Btn attrBtn={{ color: 'success', className: 'ms-1 mb-1', onClick: AddElementIntoTodo }}>{'Add element in'} &quot;ToDo&quot; {'Board'}</Btn>
                        <Btn attrBtn={{ color: 'danger', className: 'ms-1 mb-1', onClick: removeDoneboard }}>{'Remove'} &quot;Done&quot; {'Board'}</Btn>
                    </div>
                </main>
            </div>
        </Fragment>
    );
};
export default ApiBoard;