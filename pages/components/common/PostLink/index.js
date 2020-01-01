import Link from 'next/link';

const PostLink = props => {
  const { postTitle, postId } = props;
  return (
    <li>
      {/* `href` is the path to post folder (/post/[id])*/}
      {/* and `as` is the URL to show in url bar of browser */}
      <Link href="/post/[id]" as={`/post/${postId}`}>
        <a>{postTitle}</a>
      </Link>
    </li>
  )
};

export default PostLink;
