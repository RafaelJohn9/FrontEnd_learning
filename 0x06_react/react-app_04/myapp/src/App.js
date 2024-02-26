import './App.css';

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const data = new FormData(event.target);
    console.log(data);
    const value = Object.fromEntries(data.entries());
    console.log(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
            type="text"
            placeholder="Enter your name"
            name = "name"
      />
      <br/>
      <br/>
       <input
            type="text"
            placeholder="Enter your email"
            name = "email"
      />
      <br/>
      <br/>
       <input
            type="number"
            placeholder="Enter your age"
            name = "number"
      />
      <br/>
      <br/>
       <input
            type="date"
            placeholder="Enter your date of birth"
            name = "DOB"
      />
      <br/>
      <br/>
      <button>Submit</button>
    </form>
  );
}

export default App;
