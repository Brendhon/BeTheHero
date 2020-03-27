import React, { useState } from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

const NewIncident = _ => {

    //Estados
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')

    // Serve para fazer a navegação per uma função JS 
    const history = useHistory();

    const handleNewIncident = async e => {
        e.preventDefault()

        const data = {
            title,
            description,
            value,
        }

        try {
            //Usando o axios para enviar dados para o backend em JSON
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            //Voltando para a pagina inicial
            history.push(('/profile'))

        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente ')
        }
    }

    return (
        <div className="newincident-container">
            <div className="contant">

                <section>
                    <img src={logoImg} alt="Be the hero" />

                    <h1>Cadastrar novo caso</h1>

                    <p>
                        Faça seu Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        </p>

                    <Link className='back-link' to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        <text>Voltar para Home</text>
                    </Link>

                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Titulo do caso"
                        value={title} onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description} onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value} onChange={e => setValue(e.target.value)}
                    />
                    <button type="submit" className="button">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}


export default NewIncident;