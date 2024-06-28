import { v4 as uuidv4 } from 'uuid'

interface User {
  firsName: string
  lastName: string
  id?: string
}

export class CreateUserService {
  private bdd: User[] = []

  execute(user: User) {
    Object.assign(user, {
      id: uuidv4()
    })

    this.bdd.push(user)
    return this.bdd
  }
}
