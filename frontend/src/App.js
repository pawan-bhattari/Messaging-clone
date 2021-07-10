
import './App.css';
import Header from "./components/Header"
import { BrowserRouter as Router , Switch ,Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
import ProdcutScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";


function App() {
  return (
    <Router>
    
      
    <Header/>
       <main> 
 
         <Switch>
    
         <Route  exact path="/" component={HomeScreen}  />
         <Route  exact path="/product/:id" component={ProdcutScreen}  />
         <Route  exact path="/cart"  component={CartScreen} />
         </Switch>


       </main>
   
    

    </Router>
  );
}

export default App;
