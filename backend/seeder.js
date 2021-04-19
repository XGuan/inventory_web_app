import dotenv from 'dotenv'
import colors from 'colors'

import users from './data/users.js'
import storage from './data/storage.js'

import Carton from './models/cartonModel.js'
import Storage from './models/storageModel.js'
import User from './models/userModel.js'

import connectDB from './config/db.js'
import path from 'path'

const __dirname = path.resolve()

dotenv.config({
  path: __dirname + '/env/mongo.env',
})

connectDB()

const importData = async () => {
  try {
    await Carton.deleteMany()
    await Storage.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleStorage = storage.map((store) => {
      return { ...store, createdBy: adminUser }
    })

    await Storage.insertMany(sampleStorage)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  console.log('todo: add destroy functionality')
} else {
  importData()
}
