import axios from 'axios'
import defaultsDeep from 'lodash/defaultsDeep'
import { validateRequest, onResponseError } from '../interceptors'

const api = axios.create({
  mode: 'cors'
})

const getBasicConfig = () => ({
  baseURL: global.ENVIRONMENT_CONFIG.baseUrl,
  headers: {
    'Accept-Language': 'en-US'
  }
})

api.request = (path, options) => {
  const mergedOptions = defaultsDeep(options, getBasicConfig())

  return api(path, mergedOptions).then(resp => resp.data)
}

api.interceptors.request.use(validateRequest)
api.interceptors.response.use(null, onResponseError)

export default api
