import { useState } from 'react'
import Botao from '../Botao'
import Campotexto from '../CampoTexto/Campotexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })
    }
    


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campotexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campotexto
                    obrigatorio={true}
                    label="cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campotexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao >
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario