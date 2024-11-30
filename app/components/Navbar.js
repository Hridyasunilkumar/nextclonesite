import Link from 'next/link';

export default function Navbar() {
     
    return (
        
        <div>
        <nav className='nv'>
        <ul className='uls'>
        <li className='lis'><Link href="/movies">Movies</Link></li>
        <li className='lis'><Link href="/podcast">Podcast</Link></li>
        <li className='lis'><Link href="/latestnews">Latest News</Link></li>
        <li className='lis'><Link href="/Trending">Trending</Link></li>
        <li className='lis'><Link href="/videos">Videos</Link></li>
        <li className='lis'><Link href="/Money">Money</Link></li>
        <li className='lis'><Link href="/Fact">Fact</Link></li>
        </ul>
        </nav>
        </div>

    );
}