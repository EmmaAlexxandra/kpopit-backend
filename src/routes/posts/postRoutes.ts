import { Router } from 'express';
import * as Controller from './idolAndGroupsController';

const router = Router();

router.get('/test', (_req, res) => {
    console.log('✅ /test route hit!');
    res.send('✅ Test route is working!');
  });

export default router;
