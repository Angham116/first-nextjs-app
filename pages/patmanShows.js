import Link from 'next/link';

import axios from 'axios';

const pageTitleStyle = {
  color: 'green',
};

const filmTitleStyle = {
  color: 'red',
};

const filmStyle = {
  margin: '0 auto',
  textAlign: 'center',
}

const BatmanShows = props => {
  return (
    <div>
      <h2 style={pageTitleStyle}>Batman Shows</h2>
      {props.shows.map(show => {
        return (<div key={show.id} style={filmStyle}>
          <h3 style={filmTitleStyle}>
            {show.name}
          </h3>
          <div>
            <img src={show.image.medium}/>
          </div>
          <div>
            <span>Language: {show.language}</span>
          </div>
          <div>
            <p
              style={{
                textAlign: 'left',
                color: 'rgba(51, 51, 51, 0.8)',
                fontSize: 15,
                padding: '1rem'
                }}>
                About the show: {show.summary.replace(/<[/]?[pb]>/g, '')}
            </p>
          </div>
          <div>
            <span> Link: </span>
            <Link href="/show[id]" as={`/Show/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </div>
        </div>)
      })}
      <style jsx>{`
         a {
            text-decoration: none;
            color: green;
          }

          a:hover {
            opacity: 0.6;
          }
      `}</style>
    </div>
  )

};

BatmanShows.getInitialProps = async function(){
  const data = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const shows = data.data;
  return {
    shows: shows.map(film => film.show)
}
}

export default BatmanShows;

