////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - render DATA.title in an <h1>
// - render a <ul> with each of DATA.items as an <li>
// - now only render an <li> for mexican food (hint: use DATA.items.filter(...))
// - sort the items in alphabetical order by name (hint: use sort-by https://github.com/staygrimm/sort-by#example)
//
// Got extra time?
// - add a select dropdown to make filtering on `type` dynamic
// - add a button to toggle the sort order
// - Hint: you'll need an `updateThePage` function that calls `React.render`,
//   and then you'll need to call it in the event handlers of the form controls
////////////////////////////////////////////////////////////////////////////////

var React = require('react');
var sortBy = require('sort-by');

var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

function renderItems(items){
  items = items.filter(i => i.type == 'mexican').sort(sortBy('name'));
  return items.map( i => (<li>{i.name}</li>) );
}

function addFilter(types){
  console.log(types)
  return (<select>
          {types.map( t => (<option>{t}</option>) )}
        </select>);
}


function render() {
  var uniqueTypes = [];
  DATA.items.forEach(item => {
    if (uniqueTypes.indexOf(item.type) < 0){
      return uniqueTypes.push(item.type);
    }
  });
  return (
    <div>
      {addFilter(uniqueTypes)}
      <div>
        <h1>{DATA.title}</h1>
        <ul> 
          {renderItems(DATA.items)}
        </ul>
      </div>
    </div>
  );
}

React.render(render(), document.getElementById('app'), function () {
  require('./tests').run(this);
});
