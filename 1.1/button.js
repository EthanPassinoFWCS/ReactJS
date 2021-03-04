function Button() {
  // a, b = useState() function!
  // a is state object b is updater function!
  const [counter, setCounter] = useState(0);
	return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
