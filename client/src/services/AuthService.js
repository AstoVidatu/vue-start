import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthService.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })
