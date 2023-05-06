import { faCircleNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {exp} from '../data/exp'

export const Article = ({type}) => {

    console.log(exp)
    return (
        <section className="articleInfo">
                    <h5>Experiencia</h5>
                    <ul className="articleList">
                        <li><FontAwesomeIcon icon={faCircleNodes}/> Trabajo 1</li>
                    </ul>
        </section>
    )
}
