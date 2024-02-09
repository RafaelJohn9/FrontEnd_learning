import './App.css';

const name = 'World';
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>My first React App, Hello {name}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" placeholder='type your search'/>
      <hr />
      <List />
    </div>
  );
}
const List = () => (
  list.map(function(element){
    return (
      <div key={element.objectID}>
        <span>
          <a href={element.url}>{element.title}</a>
        </span>
        <span>{element.author}</span>
        <span>{element.num_comments}</span>
        <span>{element.points}</span>
        </div>
    )
  })
)

export default App;
