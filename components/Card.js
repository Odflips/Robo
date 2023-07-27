import Link from "next/link"

const Card = ({user}) => {
    console.log(user)

    return (
        <Link href={`users/${user.id}`}>
            <div className="cajap">
            <div className="box">
                
                  <img src={`http://robohash.org/${user.id}`}
                   alt="robot-pic"
                    style={{width: "200px", height: "200px"}}></img>
                    
                    <div className="text">
                    <h3>Name: {user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Cellphone: {user.phone}</p>
                    </div>
            </div>
            </div>

        </Link>
    )
}






export default Card