import Header from '../components/Header'
import Footer from '../components/Footer'
import './landing.css'
import { useState } from 'react'
import CreateMenu from '../components/CreateMenu'
import SideBar from '../components/SideBar'

function Landing() {

return (
    <>
        <Header></Header>

        <main id='landing'>
            <h1>Bem vindo!</h1>

            <SideBar></SideBar>

            <CreateMenu></CreateMenu>
        </main>

        <Footer></Footer>
    </>
)
}
export default Landing