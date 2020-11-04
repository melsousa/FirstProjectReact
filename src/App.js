
//Isso é um componente
import Routes from './routes';
import Header from './components/Header';
import './styles.css';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes/>
    </div>
  );
}

export default App;
