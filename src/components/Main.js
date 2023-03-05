export default function Main({title, img, ingress, author, published}){
    return(
        <div id="container">
        <article id="main-content">
        <img src={img} alt={title} ></img >
        <p>{author}</p>
        <p>{published}</p>
        <h2>{title}</h2>
        <p>{ingress}</p>
    </article>
    </div>
    )
}