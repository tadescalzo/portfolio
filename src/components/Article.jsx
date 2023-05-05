
export const Article = () => {
  return (
    <article className="content--article">
        <h5 className="content--article__title">Experiencia y educacion</h5>
        <div className="content--article__lower">
            <section className="articleInfo">
                <h5>Experiencia</h5>
                <ul className="articleList">
                    <li><i className="fa-duotone fa-circle-nodes"></i>Trabajo 1</li>
                    <li>Trabajo 2</li>
                    <li>Trabajo 3</li>
                    <li>Trabajo 4</li>
                </ul>
            </section>
            <section className="articleInfo">
                <h5>Experiencia</h5>
                <ul className="articleList">
                    <li>Trabajo 1</li>
                    <li>Trabajo 2</li>
                    <li>Trabajo 3</li>
                    <li>Trabajo 4</li>
                </ul>
            </section>
        </div>
    </article>
  )
}
