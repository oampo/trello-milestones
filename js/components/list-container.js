import React from 'react';

import List from './list';

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cards: ['Test', 'Test2']
        };

        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    onAddInputChanged(event) {
        this.setState({
            text: event.currentTarget.value
        });
    }

    onAddSubmit(event) {
        console.log(this.state.text);
        const cards = [...this.state.cards, this.state.text];
        this.setState({
            cards
        });
    }

    render() {
        return <List cards={this.state.cards}
                     title={this.props.title}
                     onAddInputChanged={this.onAddInputChanged}
                     onAddSubmit={this.onAddSubmit} />;
    }
}
