
import './Rodape.css'
const Rodape = () => {
    return (
        <section className='rodape'>
            <div className='redes'>
                <img src='/imagens/fb.png' alt='Facebook' />
                <img src='/imagens/tw.png' alt='Twiter' />
                <img src='/imagens/ig.png' alt='Instagram' />
            </div>

            <div className='organo'>
                <img src='/imagens/logo.png' alt='Logo' />
            </div>


            <div className='autor'>
                <h3>Criado por Victor Mendes</h3>
            </div>
        </section>
    )
}

export default Rodape