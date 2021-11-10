import { src, dest, resourceDirectory, useNext } from './Constants'

const Next = cb => {
  if (useNext) {
    return src([`${resourceDirectory}/code_tips/next/**/*`]).pipe(
      dest('./', { overwrite: false })
    )
  }
  cb()
}

export default Next
