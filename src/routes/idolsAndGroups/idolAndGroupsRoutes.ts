import { Router } from 'express';
import * as Controller from './idolAndGroupsController';

const router = Router();

console.log('🎯 idolAndGroupsRoutes loaded');

// ✅ Confirm test route works
router.get('/test', (_req, res) => {
  console.log('✅ /test route hit!');
  res.send('✅ Test route is working!');
});

router.get('/idols', Controller.getAllIdols);

export default router;
