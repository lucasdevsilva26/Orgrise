import Header from '../components/Header'
import Footer from '../components/Footer'
import './landing.css'
import { useState } from 'react'
import CreateMenu from '../components/CreateMenu'

function Landing() {

return (
    <>
        <Header></Header>

        <main id='landing'>
            <h1>Bem vindo!</h1>

            <aside>
                <button className='responButton'>
                    <i className='fas fa-chart-column'></i>
                    Gráficos
                </button>

                <button className='responButton'>
                    <i className='fas fa-boxes-stacked'></i>
                    Estoque
                </button>

                <button className='responButton'>
                    <i className='fas fa-truck-fast'></i>
                    Pedidos
                </button>

                <button className='responButton'>
                    <i className='fas fa-people-group'></i>
                    Clientes
                </button>

                <button className='responButton'>
                    <i className='fas fa-file-contract'></i>
                    Notas Fiscais
                </button>

                <button className='responButton'>
                    <i className='fab fa-cash-app'></i>
                    Financeiro
                </button>

                <button className='responButton'>
                    <i className='fas fa-user-tie'></i>
                    Funcionários
                </button>

                <button className='responButton'>
                    <i className='far fa-calendar-days'></i>
                    Agenda
                </button>

                <button className='responButton'>
                    <i className='fas fa-file-lines'></i>
                    Relatórios
                </button>

                <button className='responButton'>
                    <i className='fas fa-handshake'></i>
                    Fornecedores
                </button>

                <button className='responButton'>
                    <i className='fas fa-triangle-exclamation'></i>
                    Alertas
                </button>

                <button className='responButton'>
                    <i className='fas fa-screwdriver-wrench'></i>
                    Configurações
                </button>
            </aside>
        </main>

        <Footer></Footer>
    </>
)
}
export default Landing