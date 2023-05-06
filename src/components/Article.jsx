import {exp} from '../data/exp'
import { ListItem } from './ListItem'


// eslint-disable-next-line react/prop-types
export const Article = ({type}) => {

   const iterable = exp.filter(item=> item.tipo == type)
    
    return (
        <section className="articleInfo">
                    <h5>Experiencia</h5>
                    <ul className="articleList">
                    {
                        iterable.map(item=> <ListItem key={item.titulo} item={item} /> )
                    }
                    </ul>
        </section>
    )
}
