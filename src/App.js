import './App.css';
import TableConteiner from './Components/TableConteiner';
import { useProductViewModel } from './viewmodels/ProductViewModel';

function App() {
  const {
    productsList
    } = useProductViewModel();

  return (
    <div className="App">
      <TableConteiner products={productsList}/>
    </div>
  );
}

export default App;
