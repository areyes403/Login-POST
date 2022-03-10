import{ Component } from 'react';
import { Link } from 'react-router-dom';


class ClassComp extends Component {

      
    render() {
        return (
            <div>
                <br/>
                <h1>Bienvenido!!</h1>  
                <br/>   
                <Link to="/">Salir</Link>       
            </div>
        )
    }

};

export default ClassComp;
