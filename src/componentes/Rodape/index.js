
import './Rodape.css'
const Rodape = () => {
    return (
        <section className='rodapeGeral'>
            <div className='redes'>
                <a href="facebook.com" target="_blank">
                    <img src="/imagens/fb.png" alt="" />
                </a>
                <a href="twitter.com" target="_blank">
                    <img src="/imagens/tw.png" alt="" />
                </a>
                <a href="instagram.com" target="_blank">
                    <img src="/imagens/ig.png" alt="" />
                </a>
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