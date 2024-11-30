import Link from 'next/link';

 export default function MovieCard({ movie }) {
  return (
    <Link href={`/movies/${movie.contentID}`} passHref>
      <div className='card'>
       
       <div className='card-image-container'>
        <img
          src={movie.itemImageURL}
          alt={movie.title}
          style={{ width: '100%', borderRadius: '8px' }}
        />
        </div>
        <div className='card-content'>
         <div className='sectiontitle'> <h3>{movie.subSectionTitle}</h3></div>
         <div className='card-title'><h2>{movie.itemTitle}</h2></div>
         <div className='itemtitlelead'> <p>{movie.itemTitleLead}</p></div>
        </div>
      </div>
    </Link>
  );
}