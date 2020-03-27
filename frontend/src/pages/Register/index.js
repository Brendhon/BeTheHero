import React, { useState } from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

const Register = _ => {

    //Estados
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsApp, setWhatsApp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    // Serve para fazer a navegação per uma função JS 
    const history = useHistory();

    // Responsavel pelo cadastro do usuario 
    const handleRegister = async e => {

        //Impede o recarregamento do pagina ao realizar um submit
        e.preventDefault()

        const data = {
            email,
            name,
            city,
            uf,
            whatsapp: whatsApp
        }


        try {
            //Usando o axios para enviar dados para o backend em JSON
            const response = await api.post('ongs', data)

            //Mostrando ao usuario o ID corespondente
            alert(`Seu ID de acesso: ${response.data.id}`)

            //Voltando para a pagina inicial
            history.push(('/'))

        } catch (error) {
            alert('Erro no Cadastro')
        }

    }

    return (
        <div className="register-container">
            <div className="contant">

                <section>
                    <img src={logoImg} alt="Be the hero" />

                    <h1>Cadastro</h1>

                    <p>
                        Faça seu Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        </p>

                    <Link className='back-link' to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        <text>Fazer Logon</text>
                    </Link>

                </section>

                <form onSubmit={handleRegister}>

                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome da ONG" />

                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />

                    <input value={whatsApp} onChange={e => setWhatsApp(e.target.value)} placeholder="WhatsApp" />

                    <div className="input-group">

                        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade" />

                        <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{ width: 80 }} />

                    </div>

                    <button type="submit" className="button">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}


export default Register;