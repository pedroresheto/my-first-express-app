import {Router} from 'express'
import {getAll, create} from '../controlers/servers.js'

const router = Router()

router.get('/api/server', getAll)

router.post('api/server', create)

export default router