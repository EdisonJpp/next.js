import Container from "../components/Container";
import fetch from "isomorphic-unfetch";

import Head from "next/head";

import Users from "../components/Users";

const Index = (props) => (
  <Container>
    <Head>
      <title>Next - Home Page</title>
    </Head>
    <div>
      <h1>Next</h1>
      <Users users={props.users} />
    </div>
  </Container>
);

export default Index;

export const getStaticProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return {
    props:{
      users: resJSON.data,
    }
  };
};
