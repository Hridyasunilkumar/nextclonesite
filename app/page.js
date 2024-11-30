import MovieCard from '@/app/components/MovieCard';
import path from 'path';
import { promises as fs } from 'fs';

export default async function HomePage() {
  // Read the local movie.json file
  const filePath = path.join(process.cwd(), 'public', 'movie.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const movies = JSON.parse(data);

  // Select a few movies to display on the homepage (e.g., first 3 movies)
  const featuredMovies = movies.slice(0, 7);

  return (
    <div>
     
      
      {/* Display Featured Movies */}
      <div>
        <h2>Featured Movies</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {featuredMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
