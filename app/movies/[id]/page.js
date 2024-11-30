// app/movies/[id]/page.js

import MovieDetails from '@/app/components/MovieDetails'; // Import the MovieDetails component

export default async function MoviePage({ params }) {
  const { id } = params; // Get the dynamic id from the URL

  // Fetch movie details directly inside the component
  const res = await fetch('http://localhost:3000/moviedetails.json'); // Adjust URL as needed for production
  const data = await res.json();

  // Find the movie by matching contentID
  const movie = data.find((movie) => movie.contentID === id);

  if (!movie) {
    return <div>Movie not found.</div>; 
  }

  
  return <MovieDetails movie={movie} />;
}
