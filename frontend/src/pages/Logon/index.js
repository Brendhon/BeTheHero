import React, { useState } from 'react'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function Logon() {

    const [id, setId] = useState()

    // Serve para fazer a navegação per uma função JS 
    const history = useHistory();

    // Responsavel pelo cadastro do usuario 
    const handleLogin = async e => {
        //Impede o recarregamento do pagina ao realizar um submit
        e.preventDefault()

        try {
            const response = await api.post('session', { id })

            //Mostrando o nome no console
            console.log(response.data.name)

            //Salvando na memoria
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch (error) {
            alert('Usuario não cadastrado')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">

                <img src={logoImg} alt="Be the hero" />

                <form onSubmit={handleLogin}>
                    <h1> Faça seu Logon</h1>

                    <input value={id} onChange={e => setId(e.target.value)} placeholder="Sua ID" />
                    <button className="button" type="submit"> Entrar </button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        <text>Não tenho cadastro</text>
                    </Link>

                </form>

            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}