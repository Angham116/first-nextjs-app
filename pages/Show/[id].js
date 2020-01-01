import { useRouter } from 'next/router';
import axios from 'axios';


const Show = (props) => {
  const { film } = props;
  const { name, image, language, rating, summary, schedule, status} = film;
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <img src={image.original}/>
      </div>
      <div>
        <p>{summary.replace(/<[/]?[pb]>/g, '')}</p>
        <p>Language: {language}</p>
        <p>Film Time: {schedule.days.map(day => day)} On: {schedule.time}</p>
      </div>
      <div>
        <span>Status: {status}</span>
      </div>
    </div>
    )
  }
  
  Show.getInitialProps = async (context) => {
  const { id } = context.query;
  const film = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  const { data } = film;
  return {
    film : data,
  }
}

export default Show;

