import React from 'react';
import { inject } from '@devspace/induxion';

class Landing extends React.Component {
  static getStates = {
    title: 'example.title',
    animals: 'example.animals.data'
  };
  static getActions = ['actionChangeExample', 'actionFetchExample'];

  componentDidMount = () => {
    console.log('==REDUX PROPS', this.props);
  }

  render = () => {
    const { title, animals = [], actionChangeExample, actionFetchExample } = this.props;

    return (
      <div>
        <h1>Hello world from induxion!</h1>
        <h2>The title are: { title }</h2>

        <button type="button" onClick={() => actionChangeExample('New title from Induxion')}>Change Example</button>
        <button onClick={actionFetchExample}>
          Get My Animals
        </button>

        <ul>
          {animals.map((list, key) => <li key={key}>{list}</li>)}
        </ul>
      </div>
    );
  };
}

export default inject(Landing);