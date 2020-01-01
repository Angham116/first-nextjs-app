import { useRouter } from 'next/router';

import Layout from './components/HOC';

const Post  = props => {
  const router = useRouter();
  // const { post } = props;
  // const { body } = post;
  return (
    <div>
      <h4>{router.query.title}</h4>
      {/* <p>{body}</p> */}
    </div>
  )
};

export default Layout(Post);
