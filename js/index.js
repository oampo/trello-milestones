import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';
import List from './components/list';
import ListContainer from './components/list-container';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Board title="Some title" lists={['List 1', 'List 2']}/>,
/*        <ListContainer title="Some title" cards={['Card 1', 'Card 2']}
            onAddInputChanged={() => {console.log('Change')}}
            onAddSubmit={()=>{console.log('Submit')}} />,*/
        document.getElementById('app')
    );
});
