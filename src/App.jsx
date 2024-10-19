import './App.css'
import Counter from './Counter'
import Friends from './friends'
import Users from './users'

function App() {
  function handleClick(){
    alert('button-1 clicked')
  }
  const handleClick2 = () => {
    alert ('button-2 clicked')
  }
  const addToFive = (num) => {
    alert (num +5);
  }

  return (
    <>
      
      <h1>React Core concept 2</h1>
      <Friends></Friends>

      <Users></Users>

      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me-2</button>
      <button onClick={() => {alert('button-3 clicked')}}>Click Me-3</button>

      {/* complected */}
      <button onClick={() => addToFive(4)}>Click Me-4</button>
      
      
    </>
  )
}

export default App
