import useRouter from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

function Detail({ data }) {
  const style = {
    border: "solid 2px #777",
    padding: "20px",
    margin: " 40px auto",
    width: "40%",
    borderRadius: "30px",
  };
  return (
    <div style={style}>
      <h3>Name : {data.name}</h3>
      <h3>
        Adress : {data.address.street} ,{data.address.city}
      </h3>
      <h3>Email : {data.email}</h3>
      <h3>Website : {data.website}</h3>
    </div>
  );
}

export default Detail;
