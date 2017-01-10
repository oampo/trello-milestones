import React from 'react';

import Card from './card';

export default function List(props) {
    const cards = props.cards.map((text, index) => <Card key={index} text={text} />);
    return (
        <div className="list">
            <h2>{props.title}</h2>
            {cards}
        </div>
    );
}

List.defaultProps = {
    cards: []
};
