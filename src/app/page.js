import Card from "../../components/Card"

const getData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await res.json();
  return data;
};


export default async function Home() {
  const dataUser = await getData();
  console.log(dataUser);
  return (

    <div>

      {dataUser.map((el, i)=> <Card key={i} user={el}  />)}
    

    </div>
    
    
  )
}