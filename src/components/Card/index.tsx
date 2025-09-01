import './style.css'
export interface ICard {
    logo: string,
    titulo: string,
    descricao: string,
    tags: string[],
    corFundo: string

}
export default function Card({logo, titulo, descricao, tags, corFundo}:ICard) {
    return (
        <div className='card'>
            <div className='logo' style={{
                backgroundColor: corFundo
            }}>
                <img src={logo} alt="" />
            </div>
            <div className='conteudo'>
                <div className='topo'>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div className='baixo'>
                    <div className='tags'>
                        {tags.map((tag, index) => (
                            <div key={index} className='tag'>{tag}</div>
                        ))}
                    </div>
                    <div className='botao'>
                        <input type="button" value={"Ver Mais"} className='botao'/>
                    </div>
                </div>
            </div>
        </div>
    )
}