/* eslint-disable react/prop-types */
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ListItem = ({item}) => {
    const {lugar, titulo,tareas,inicio,finalizacion} = item

  return (
    <li className="center">
        <div className="articleUpper">
            <h3><FontAwesomeIcon icon={faCircleNodes}/> {titulo}</h3><h5>{inicio}<strong>/</strong>{finalizacion}</h5>  
        </div>
        <div className="articleLower">
            <h4>{tareas}</h4><h5>{lugar}</h5>
        </div>
        <hr />
    </li>
  )
}
