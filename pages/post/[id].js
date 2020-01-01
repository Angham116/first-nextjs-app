import { useRouter } from 'next/router';

import Layout from '../components/HOC';

const postTitleStyle = {
  color: 'green',
};

function Post(){
  const router = useRouter();
  return (
    <div>
      <h4 style={postTitleStyle}>{router.query.title}</h4>
    </div>
  )
}

export default Layout(Post);
