import Header from "./components/Header";
import We from "./components/We";
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import You from "./components/You";
import Others from "./components/Others";
import NoPage from "./components/NoPage";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App text-3xl bg-purple w-full bg-black" style={{minHeight:'100%'}}>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route index element={<Landing />} />
          <Route path="we" element={<We />} />
          <Route path="you" element={<You />} />
          <Route path="others" element={<Others />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
