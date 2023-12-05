import {makeAutoObservable} from 'mobx'

export class User {
  firstName = ''
  lastName = ''
  email = ''
  password = ''

  constructor() {
    makeAutoObservable(this)

    this.setEmail = this.setEmail.bind(this)
    this.setUserName = this.setUserName.bind(this)
  }

  setUserName({firstName, lastName}: {firstName?: string; lastName?: string}) {
    if (firstName) {
      this.firstName = firstName
    }
    if (lastName) {
      this.lastName = lastName
    }
  }

  setEmail(email: string) {
    this.email = email
  }
}

const user = new User()

export default user
