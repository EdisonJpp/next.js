import Container from "../../components/Container";
// import Image from 'next/image';

const User = ({ user, notFound }) => {
  if (notFound) return <> Not Found </>
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={user.avatar}
                alt={user.first_name + " " + user.last_name}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {user.id}. {user.first_name} {user.last_name}
              </h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default User;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://reqres.in/api/users/${params.id}`);
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: data.data
    },
  };
}