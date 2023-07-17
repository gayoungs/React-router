

function dateTosting(date) {
  let now = new Date(date);

  const year = now.getFullYear()
  const month = now.getMonth() + 1;
  const day = now.getDate();

  return `${year}-${month < 10 ? '0' + month : month } - ${day < 10 ? '0' + day : day}`;

}


function NewsArticle({item}) {



  return(
    <li>
          <a href="#">
            <img src={item.urlToImage} alt={item.title}/>
            <article>
              <p>{item.author}</p>
              <p>{dateTosting(item.publishedAt)}</p>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </article>
          </a>
      </li> 
  )
}
export default NewsArticle