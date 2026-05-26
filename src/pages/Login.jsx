import Header from '../components/Header'
import Footer from '../components/Footer'
import './loginSignon.css'
import { useNavigate } from 'react-router'

function Login() {
const navigate = useNavigate()

return (
    <>
        <Header></Header>

        <main id='accountForm'>
            <h1>
                <label htmlFor="emailInput">Entrar</label>
            </h1>

            <form>
                <div>
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" id='emailInput' required placeholder='Digite seu email'/>
                </div>

                <div>
                    <label htmlFor="passwordInput">Senha</label>
                    <input type="password" id='passwordInput' required placeholder='Digite sua senha'/>
                </div>

                <div>
                    <button className='responButton' type='button' onClick={() => navigate('/landing')}>Entrar</button>
                    <button type='button' onClick={() => navigate('/signon')}>Não possui uma conta? clique aqui</button>
                </div>
            </form>
        </main>

        <Footer></Footer>
    </>
)
}
export default Login