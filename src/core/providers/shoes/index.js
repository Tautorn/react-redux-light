import Api from '../api'

class Shoes {
  static all() {
    return Api.request('/shoes/list', { method: 'GET' })
  }

  static create(data) {
    return Api.request('/shoes', { data, method: 'POST' })
  }
}

export default Shoes
