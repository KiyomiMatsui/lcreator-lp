import { rimraf } from './Constants'

const DeleteCache = cb => {
  return rimraf('node_modules/.cache/hard-source', cb)
}

export default DeleteCache
