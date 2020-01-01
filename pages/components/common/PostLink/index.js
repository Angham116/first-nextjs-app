import Link from 'next/link';

const PostLink = props => {
  const { postTitle } = props;
  return (
    <li>
      <Link href={`/post?title=${postTitle}`}>
        <a>{postTitle}</a>
      </Link>
    </li>
  )
};

export default PostLink;
