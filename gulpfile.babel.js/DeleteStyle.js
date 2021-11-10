import { rimraf, buildDirectorySrc, styleDirectory } from './Constants'

const DeleteCache = cb => {
  return rimraf(`${buildDirectorySrc}/${styleDirectory}/`, cb)
}

export default DeleteCache
