import React from 'react';

import ListContainer from './list-container';

export default function Board(props) {
    const lists = props.lists.map((title, index) =>
        <ListContainer key={index} title={title} />
    );
    return (
        <div className="board">
            <h1>{props.title}</h1>
            {lists}
        </div>
    );
}

Board.defaultProps = {
    lists: []
};
