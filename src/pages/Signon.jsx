import Header from '../components/Header'
import Footer from '../components/Footer'
import './loginSignon.css'
import { useNavigate } from 'react-router'

function Signon() {
const navigate = useNavigate()

return (
    <>
        <Header></Header>

        <main id='login'>
            <h1>Criar Conta</h1>

            <form>
                <div>
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" id='emailInput' required placeholder='Ex: nome@email.com'/>
                </div>

                <div>
                    <label htmlFor="passwordInput">Senha</label>
                    <input type="password" id='passwordInput' required placeholder='Crie uma senha forte'/>
                </div>

                <div>
                    <label htmlFor="confirmPasswordInput">Confirmar Senha</label>
                    <input type="password" id='confirmPasswordInput' required placeholder='Digite sua senha novamente'/>
                </div>

                <div>
                    <button className='responButton' type='submite' onClick={() => navigate('/landing')}>Criar Conta</button>
                    <button type='button' onClick={() => navigate('/login')}>Já possui uma conta? clique aqui</button>
                </div>
            </form>
        </main>

        <Footer></Footer>
    </>
)
}
export default Signon