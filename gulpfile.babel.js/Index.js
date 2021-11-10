import { series } from './Constants'
import Server from './Server'
import ServerWatch from './ServerWatch'
import { Tasks } from './Tasks'
import DeleteCache from './DeleteCache'
import NextServer from './NextServer'

exports.StartServer = series(Tasks, Server)

exports.StartWatch = series(Tasks, ServerWatch)

exports.StartBuild = series(Tasks)

exports.DeleteCache = series(DeleteCache)
