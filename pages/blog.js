import Layout from './components/HOC';
import PostLink from './components/common/PostLink';

const posts = [
  {
    id: 1,
    title: 'Postt 1',
    body: 'Tis is post 1'
  },
  {
    id: 2,
    title: 'Postt 2',
    body: 'Tis is post 2'
  },
  {
    id: 3,
    title: 'Postt 3',
    body: 'Tis is post 3'
  },
  {
    id: 4,
    title: 'Postt 4',
    body: 'Tis is post 4'
  }
];

const Blog = () => {
  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        {posts.map(post => <PostLink key={post.id} postTitle={post.title}/>)}
      </ul>
    </div>
  )
};

export default Layout(Blog);
