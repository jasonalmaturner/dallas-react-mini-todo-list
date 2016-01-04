import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './ListContainer.js';

const App = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('app'));
