import {makeAutoObservable} from 'mobx'

export class User {
  firstName = ''
  lastName = ''
  email = ''

  constructor() {
    makeAutoObservable(this)

    this.setEmail = this.setEmail.bind(this)
    this.setUserName = this.setUserName.bind(this)
    this.resetUser = this.resetUser.bind(this)
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

  resetUser() {
    this.setUserName({firstName: '', lastName: ''})
    this.setEmail('')
  }
}

const user = new User()

export default user
