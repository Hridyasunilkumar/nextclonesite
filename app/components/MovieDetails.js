// app/components/MovieDetails.js

export default function MovieDetails({ movie }) {
    return (
      <div className="detailcontainer" >
        <div className="crd">
        {/* Movie Card Image on Top */}
        <img
          src={movie.itemImageURL}
          alt={movie.title}
          style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', marginBottom: '20px'}}
        />
        
        {/* Movie Details */}
        <div style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h1>{movie.itemTitle}</h1>
          <p>{movie.publishedTime}</p>
          <p>{movie.itemAuthor || 'Author not available'}</p>
          <p>{movie.itemImageCaption}</p>
        </div>
  
        {/* Displaying the detail_elements */}
        <div style={{ maxWidth: '600px', marginTop: '20px' }}>
          {movie.detail_elements && movie.detail_elements.map((element, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              {element.elementType === 0 && <p>{element.elementContent}</p>}
              {element.elementImageURL && <img src={element.elementImageURL} alt={`Detail ${index}`} style={{ width: '100%', borderRadius: '8px' }} />}
            </div>
          ))}
        </div>
  
        {/* Display related articles */}
        <div style={{ maxWidth: '600px', marginTop: '30px' }}>
          <h3>Related Articles</h3>
          {movie.relatedArticles && movie.relatedArticles.map((article, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <a href={article.relatedURL} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <img src={article.relatedImageURL} alt={article.relatedTitle} style={{ width: '100px', height: '70px', marginRight: '10px', borderRadius: '4px' }} />
                <div>
                  <p style={{ fontWeight: 'bold' }}>{article.relatedTitle}</p>
                  <p style={{ fontSize: 'smaller', color: 'gray' }}>{article.relatedLead}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        </div>
      </div>
    );
}