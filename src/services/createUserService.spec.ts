import { CreateUserService } from './createUserService'

describe('CreateUserService', () => {
  let createUserService: CreateUserService
  beforeAll(() => {
    const createUserService = new CreateUserService()
  })

  test('Should return a  user', () => {
    const result = createUserService.execute({
      firsName: 'Leo',
      lastName: 'Antonio'
    })
    const expected = [
      {
        firsName: 'Leo',
        id: 'f31faf5c-e393-40fa-a101-365fec3963be',
        lastName: 'Antonio'
      }
    ]
    expect(result[0]).toHaveProperty('id')
  })
})
