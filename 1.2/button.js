function Button(props) {
	//const handleClick = () => setCounter(counter+1);
  return (
    <button onClick={props.onClickFunction}>
      +1
    </button>
  );
}

// Display
function Display(props) {
  return <div>{props.message}</div>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter+1);
  return (  
    <>
    <Button onClickFunction={incrementCounter}/>
    <Display message={counter}/>
    </>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);
