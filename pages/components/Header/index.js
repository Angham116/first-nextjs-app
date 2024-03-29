import Link from 'next/link';
const linkStyle = {
  marginRight: 10,
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/patmanShows">
        <a>Batman Shows</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  )
};

export default Header;
