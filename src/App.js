import './App.css';
import { useSelector , useDispatch} from "react-redux";
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {

  const {count} = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
      <button onClick={() => dispatch(incrementByAmount(33))}> Increment By 33</button>
    </div>
  );
}

export default App;