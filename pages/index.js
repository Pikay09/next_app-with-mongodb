import Link from 'next/link'
import dbConnect from '../lib/dbConnect'
import Pet from '../models/Pet'
//import Creator from '../models/Creators'

const Index = ({ creators }) => (
  <>
    {/* Create a card for each pet */}
    {pets.map((pet) => (
      <div key={pet._id}>
        <div className="card">
          <img src={pet.image} />
          <h5 className="pet-name">{pet.name}</h5>
          <div className="main-content">
            <p className="pet-name">{pet.name}</p>

            {/* Extra Pet Info: Likes and Dislikes */}
            <div className="likes info">
              <p className="label">Likes</p>
              <ul>
                {pet.likes.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>
            <div className="dislikes info">
              <p className="label">Dislikes</p>
              <ul>
                {pet.dislikes.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>

            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${pet._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Pets.find({})
  const PEts = result.map((doc) => {
    const pet = doc.toObject()
    pet._id = creator._id.toString()
    return pet
  })

  return { props: { pets: pets } }
}

export default Index
