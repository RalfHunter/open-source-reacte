import './style.css'

export default function Footer(){
    return (
        <footer className='footer'>
            <div className='footer-conteudo'>
                <div className='textos'>
                    <div className='texto1'>
                        <p >Código aberto (do inglês Open Source) é o <a href="https://www.figma.com/exit?url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FC%25C3%25B3digo-fonte">código-fonte</a> que é disponibilizado gratuitamente para consulta, examinação, modificação e redistribuição. Os produtos incluem permissão para usar o <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte">código-fonte</a>, documentos de design ou conteúdo do produto.</p>
                        <p className='link-especial'>Fonte: <a href="https://pt.wikipedia.org/wiki/Código_aberto">Fonte: https://pt.wikipedia.org/wiki/Código_aberto</a></p>
                    </div>
                    <div className='texto2'>
                        <p>Software livre é o software que concede liberdade ao usuário para executar, acessar e modificar o código fonte, e redistribuir cópias com ou sem modificações. Sua definição é estabelecida pela Free Software Foundation em conjunto com o projeto GNU.</p>
                        <p className='link-especial'>Fonte: <a href="https://pt.wikipedia.org/wiki/Software_livre">Fonte: https://pt.wikipedia.org/wiki/Software_livre</a></p>
                    </div>
                </div>
                <div className='logos'>
                    <img src="ifro.svg" alt="" />
                    <img src="fslab.svg" alt="" />
                </div>
            </div>
        </footer>
    )
}