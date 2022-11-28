import { useDispatch, useSelector } from 'react-redux'

import reactLogo from './assets/react.svg'
import './App.css'
import { increment, decrement, incrementBy2 } from './store/slices/counter'

function App() {
  
  const { counter } = useSelector( state => state.counter )

  let dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p> count is {counter}</p>
      </div>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy2(2))}>
          Increment by 2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
