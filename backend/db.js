const mongoose = require('mongoose')
const mongoURI =
  'mongodb+srv://gofood:mern123@cluster0.rnheejn.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Connected')
        const fetched_data = await mongoose.connection.db.collection(
          'food_items'
        )
        const foodCategory = await mongoose.connection.db.collection(
          'foodCategory'
        )
        fetched_data.find({}).toArray(async function (err, data) {
          if (err) {
            console.log(err)
          } else {
            foodCategory.find({}).toArray(async function (err, catData) {
              if (err) {
                console.log(err)
              } else {
                global.food_items = data
                global.foodCategory = catData
              }
            })
          }
        })
      }
    }
  )
}

module.exports = mongoDB
