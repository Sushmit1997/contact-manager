import './App.css';
import RouterComponent from './router/routes';
import { title } from 'process'
function App() {
  return (
    <div className="App">
      <RouterComponent title={title} />
    </div>

  );
}

export default App;
