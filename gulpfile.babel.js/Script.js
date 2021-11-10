import {
  webpack,
  webpackStream,
  webpackConfig,
  dest,
  gulpBabel,
  sourcemaps,
  concat,
  rename,
  uglify,
  buildDirectorySrc,
  resourceDirectory,
  esDirectory,
  useVue,
  useNuxt,
  useNext,
  useTs,
  useTsx
} from './Constants'

const Script = cb => {
  if (useNext) {
    return cb()
  }
  let mode = process.argv[3]
  mode = mode.replace(/--mode=/g, '')
  webpackConfig.mode = mode

  return (
    webpackStream(webpackConfig, webpack)
      .pipe(sourcemaps.init())
      // .pipe(concat('main'))
      // .pipe(gulpBabel({
      //   presets: ['@babel/preset-env']
      // }))
      // .pipe(uglify())
      // .pipe(rename({extname: '.js'}))
      // .pipe(sourcemaps.write('.'))
      .pipe(dest(`${buildDirectorySrc}/scripts`))
  )
}

export default Script
