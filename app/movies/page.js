// app/movies/page.js

import MovieCard from '@/app/components/MovieCard';
import path from 'path';
import { promises as fs } from 'fs';

export default async function MoviesPage() {
  // Read the local movie.json file from the public directory
  const filePath = path.join(process.cwd(), 'public', 'movie.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const movies = JSON.parse(data);

  return (
    <div>
      <h1>Movies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}