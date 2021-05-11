import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Articles from './components/feed/Articles';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Landing />
      <Articles />
    </div>
  );
}

export default App;
