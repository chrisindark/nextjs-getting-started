import {useRouter} from 'next/router';
import ReactMarkdown from "react-markdown";

import MyLayout from "../../components/MyLayout";

export default function Post () {
  const router = useRouter();
  const markdownSource = `
    This is our blog post.
    Yes. We can have a [link](/link).
    And we can have a title as well.

    ### This is a title

    And here's the content.
  `;

  return (
    <MyLayout>
      <h1>{router.query.id}</h1>
      <div className={`markdown`}>
        <ReactMarkdown source={markdownSource}/>
      </div>

      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </MyLayout>
  )
}
