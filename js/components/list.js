import React from 'react';

import Card from './card';

export default function List(props) {
    function onSubmit(event) {
        event.preventDefault();
        props.onAddSubmit();
    }

    const cards = props.cards.map((text, index) => <Card key={index} text={text} />);
    return (
        <div className="list">
            <h2>{props.title}</h2>
            {cards}
            <form onSubmit={onSubmit}>
                <label htmlFor="to-add">Item to add</label>
                <input id="to-add" type="text" onChange={props.onAddInputChanged}/>
                <button>Add item</button>
            </form>
        </div>
    );
}

List.defaultProps = {
    cards: []
};

