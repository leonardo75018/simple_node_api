import 'dotenv/config'
import 'express-async-errors'
import app from './app'
import './database'
const PORT = process.env.PORT || 3000

function main() {
  app.listen(PORT, () => console.log(process.env.PORT))
}

main()
