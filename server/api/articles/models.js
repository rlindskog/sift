import mongoose from 'mongoose'

const articlesSchema = new mongoose.Schema({

})


const articlesModel = mongoose.model('Article', articlesSchema)

export default articlesModel