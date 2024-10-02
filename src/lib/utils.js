import mongoose from 'mongoose'

const connection = {
  isConnected: null
}

export const connectToDb = async () => {
  try {

    if(connection.isConnected) {
      console.log('Using existent database connection')
      return
    }
    const db = await mongoose.connect(process.env.MONGO)
    connection.isConnected = db.connections[0].readyState
 
  } catch (error) {
    console.log('ERROR ON DB CONNECTION: ', error.message)
    throw new Error(error)
  }
}
