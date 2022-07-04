import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const CreatorSchema = new mongoose.Schema({
  name: {
    type: String 
  },
   wallet_id: {
    type: String 
  },
  image: {
     type: String,
  },
  description: {
    type: String,
  },
  background: {
     type: String,
  }
})

export default mongoose.models.Creator || mongoose.model('Creator', CreatorSchema)
