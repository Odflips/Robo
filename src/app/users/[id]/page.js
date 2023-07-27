const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return data;
};

export default async function Page({ params }) {
  const id = params.id;
  const dataUser = await getData(id);
  console.log(id);

  return (
    <div className="card1">
      <h1 className="tit">Robo Friends</h1>
      <div className="cajap">
        <div className="box">
          <img
            src={`http://robohash.org/${dataUser.id}`}
            alt="robot-pic"
            style={{ width: "200px", height: "200px" }}
          ></img>
          <div className="text">
            <h3>Name{dataUser.name}</h3>
            <p>Email{dataUser.email}</p>
            <p>Cellphone{dataUser.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
