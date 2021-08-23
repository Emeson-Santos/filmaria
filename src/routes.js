import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Filme from './pages/Filme';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

const Routes = () => {
    return(
        <BrowserRouter>
             <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
                <Route exac path="/favoritos" component={Favoritos}/>
                <Route path='*' component={Erro}/> {/* tem que estar sempre por ultimo  */}
                
                
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;