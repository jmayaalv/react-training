var React = require('react');

var DATA = [
  { id: 1, name: 'USA', description: 'Land of the Free, Home of the brave' },
  { id: 2, name: 'Brazil', description: 'Sunshine, beaches, and Carnival' },
  { id: 3, name: 'Russia', description: 'World Cup 2018!' },
];

var styles = {};

styles.tab = {
  display: 'inline-block',
  padding: 10,
  margin: 10,
  borderBottom: '4px solid',
  borderBottomColor: '#ccc',
  cursor: 'pointer'
};

styles.activeTab = {
  ...styles.tab,
  borderBottomColor: '#000'
};

styles.panel = {
  padding: 10
};

var Tabs = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  getInitialState() {
    return {
      activeTabIndex: 0
    };
  },

  handleClick(clickedIndex, event) {
    event.stopPropagation();
    this.setState({
      activeTabIndex: clickedIndex
    });
  },

  render() {
    var activeTab = this.props.data[this.state.activeTabIndex];

    
  }
});

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>Countries</h1>
        <Tabs data={this.props.countries}/>
      </div>
    );
  }
});

React.render(<App countries={DATA}/>, document.getElementById('app'), function () {
  require('./tests').run(this);
});
