import mongoose from 'mongoose'

const uri = `mongodb+srv://${process.env.UTILISATEUR}:${process.env.PASSWORD}@cluster0.vvrfh99.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose
  .connect(uri)
  .then(() => console.log('connexion is ok '))
  .catch(error => {
    console.log(error)
  })
