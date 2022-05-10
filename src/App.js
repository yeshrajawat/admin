import {BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import  List from './pages/list/List'
import {userInputs,productInputs} from './formSource';


function App() {
  return (
    <div className="App">

      <Routers>
        <Routes>
            <Route path="/">

              <Route index element= { <Home/> } />
              <Route path="login" element= { <Login/> } />
              <Route path="user">
                  <Route index element= { <List/> } />
                  <Route path=":userId" element= { <Single/> } />
                  <Route path="new" element= { <New inputs={userInputs} title="Add New User"/> } />
                </Route> 
              
                <Route path="product">
                  <Route index element= { <List/> } />
                  <Route path=":productId" element= { <Single/> } />
                  <Route path="new" element= { <New  inputs={productInputs}title="Add New User"/> } />
                </Route> 

            </Route>
        </Routes>
      </Routers>
    
    </div>
  );
}

export default App;
