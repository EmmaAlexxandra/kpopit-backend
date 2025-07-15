import { Router } from 'express';
import * as Controller from './postController';

const router = Router();

router.get('/test', (_req, res) => {
    console.log('✅ /test route hit!');
    res.send('✅ Test route is working!');
  });

router.get('/all', Controller.getAllPosts);
router.post('/create', Controller.createPost);
router.get('/:postId', Controller.getPostById);
router.get('/user/:userId', Controller.getPostsByUserId);

export default router;
