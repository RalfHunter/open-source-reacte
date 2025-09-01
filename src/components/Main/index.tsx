import './style.css'
import Card from '../Card'
import { projetos } from '../../dados'

export default function Main () {
    return (
        <main>
            <div className="search">
                <div className="search-body">
                    <form action="" className='formulario'>
                    <input type="text" placeholder='Buscar projetos'/>
                    <input type="image" src='public/Lupa.svg'/>
                    </form>
                </div>
            </div>
            <div className='cards'>
                {projetos.map((projeto, index) => (
                    <Card key={index} titulo={projeto.titulo} logo={projeto.logo} descricao={projeto.descricao} corFundo={projeto.corFundo}
                    tags={projeto.tags}
                    />
                ))}
            </div>
        </main>
    )
} 