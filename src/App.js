import './App.css';

import { Header, Search, CardContainer } from '../src/components/index'

function App() {
  return (
    <div className="App">
        <div className="appHome">
          <Header/>
        </div>
        <div className="container">
        <CardContainer color="red"/>
        <CardContainer color="blue"/>
        <CardContainer color="green"/>
        <CardContainer color="purple"/>
        <CardContainer color="brown"/>
        <CardContainer color="yellow"/>
        </div>
        
        
    </div>
  );
}

export default App;
