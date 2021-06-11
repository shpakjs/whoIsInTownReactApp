import { PageLayout, Search } from 'components';
import AppContextProvider from 'context/AppContext';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppContextProvider>
          <Search />
          <PageLayout />
      </AppContextProvider>
    </div>
  );
}

export default App;
