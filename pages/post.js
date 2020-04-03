import {useRouter} from "next/router";
import MyLayout from "../components/MyLayout";

const Content = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

const Page = () => {
  return (
    <MyLayout>
      <Content/>
    </MyLayout>
  )
};

export default Page;
