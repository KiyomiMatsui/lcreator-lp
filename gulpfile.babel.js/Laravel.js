import {
  src,
  dest,
  webpackConfig,
  uglify,
  rename,
  webpackStream,
  webpack,
  plumber,
  notify,
  concat,
  resourceDirectory,
  buildDirectory,
  buildDirectorySrc,
  useWordpress,
  useLaravel
} from './Constants'

const Laravel = cb => {
  if (useLaravel) {
    return src([
      `${resourceDirectory}/setup_files/laravel/*`,
      `${resourceDirectory}/setup_files/laravel/.*`
    ]).pipe(dest(`${buildDirectory}/`))
  }
  cb()
}

export default Laravel
