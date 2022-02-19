import './App.css';
import AuthContextProvider from './AuthContext/AuthContextProvider';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
