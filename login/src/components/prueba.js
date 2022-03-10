import { useState } from 'react';

import axios from 'axios';

function Test(props) {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [mensaje, setMensaje] = useState('');

    const login = (e) => {

        e.preventDefault();

        console.log(user);
        console.log(pass);

        axios.post('http://localhost:4000/login', {
            user: user,
            pass: pass,
        }).then(function (response) {

            //Si las credenciales son correctas, redirecciona a /comp
            if (response.data.acceso) {
                props.history.push(`/comp`);
            }else{
                setMensaje(<div>{response.data.mensaje}</div>)
            }
            
        })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div className="App">
            
            <form>
                <div className="form-inner">
                    <h2>Login:</h2>
                    {mensaje}
                    <div className="form-group">
                        <label>Usuario:
                            <input type="text" value={user} name="user" onChange={(e) => setUser(e.target.value)} />
                        </label>
                        <br />
                        <br />
                    </div>

                    <div className="form-group">
                        <label>Contraseña
                            <input type="text" value={pass} name="pass" onChange={(e) => setPass(e.target.value)} />
                        </label>
                        <br />
                        <input type="submit" value="Login" onClick={login} />
                    </div>

                    
                </div>
            </form>
            
        </div>
    )

};
export default Test;
