import Layout from './hoc/Layout/Layout';
import 'normalize.css';
import './App.css';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <Title level={1}>App</Title>
      <Layout />
    </div>
  );
}

export default App;
