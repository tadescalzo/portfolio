import { Article } from "./Article"

export const Articles = () => {

  return (
    <article className="content--article">
        <h5 className="content--article__title">Experiencia y educacion</h5>
        <div className="content--article__lower">
            <Article  type={'trabajo'}/>
            <Article  type={'estudio'}/>
        </div>
    </article>
  )
}
