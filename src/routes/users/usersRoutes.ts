import { Router } from 'express'
import * as Controller from "./usersController"

const router = Router()

router.get('/test', (_req, res) => {
    console.log('✅ /test route hit!');
    res.send('✅ Test route is working!');
  });

router.post('/create', Controller.createUser)


export default router