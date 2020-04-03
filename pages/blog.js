import Link from 'next/link';

import MyLayout from '../components/MyLayout';

const PostLinkAsQuery = (props) => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const PostLink = props => {
  return (
    <>
    <li key={props.id}>
      <Link href={`/p/[id]`} as={`/p/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </>
  );
};

const getPosts = () => {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
};

export function BlogTitle () {
  return (
    <MyLayout>
      <h1>My Blog</h1>
      <ul>
        <PostLinkAsQuery title={`Hello Next.js`}/>
        <PostLinkAsQuery title={`Learn Next.js is awesome`}/>
        <PostLinkAsQuery title={`Deploy apps with Zeit`}/>
      </ul>
    </MyLayout>
  );
}

export default function Blog () {
  return (
    <MyLayout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} id={post.id} title={post.title}/>
        ))}
      </ul>
      <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }
      `}</style>
    </MyLayout>
  );
}
