import './styles/App.css';
import {useState} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  return (
    <div className='App'>
      <ThemeProvider>
        <Header setIsLoggedIn={setIsLoggedIn} />
        <Content isLoggedIn={isLoggedIn} />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App;
