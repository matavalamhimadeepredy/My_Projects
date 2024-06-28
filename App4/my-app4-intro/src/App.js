import Clickcounter from "./Component/Counter/Clickcounter";
import Counter from "./Component/Counter/Counter";
import Hovever from "./Component/Counter/HoveverCounter";


function App() {
  const [count, setcount] = useState(0)


  const handleincrement = () => {
    setcount(count + 1)
  }

  return (
    <div className="App">
      <Counter />
      <hr />
      <br />
      <Clickcounter />
      <hr />
      <br />
      <Hovever />


      <Counter render={<Clickcounter count={count} handleincrement={handleincrement} />} />

      <Counter render={<Hovever count={count} handleincrement={handleincrement} />} />

    </div>
  );
}
export default App;
