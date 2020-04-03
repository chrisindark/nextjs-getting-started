import fetch from "isomorphic-unfetch";

import MyLayout from "../../components/MyLayout";

const Show = (props) => {
  return (
    <MyLayout>
      <h1>{props.show && props.show.name}</h1>
      <h3>{props.show && props.show.summary && props.show.summary.replace(/<[/]?[pb]>/g, '')}</h3>
      {props.show && props.show.image && props.show.image.medium ? <img src={props.show.image.medium}/> : null}
    </MyLayout>
  );
};

Show.getInitialProps = async (context) => {
  const {id} = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();
  console.log(`Fetched show: ${JSON.stringify(data)}`);
  return {show: data};
  // return {};
};

export default Show;
