import { Router } from 'express';
import * as Controller from './postController';

const router = Router();

router.get('/test', (_req, res) => {
    console.log('✅ /test route hit!');
    res.send('✅ Test route is working!');
  });

router.get('/all', Controller.getAllPosts);
router.get('/:postId', Controller.getPostById);
router.get('/user/:userId', Controller.getPostsByUserId);
router.get('/username/:username', Controller.getPostByUserName);
router.get('/group/:groupId', Controller.getPostsByGroupId);
router.get('/idol_birthday/:idolBirthday', Controller.getPostsByIdolBirthday);
router.get('/group_name_or_idol_name/:groupOrIdolName', Controller.getPostsByGroupNameOrIdolName);
router.get("/user_comments/:username", Controller.getAllCommentMadeByUsername)

router.post('/create', Controller.createPost);

router.put('/like_post/:postId', Controller.putLikePost);
router.put('/unlike_post/:postId', Controller.putUnlikePost);
router.put('/share_post/:postId', Controller.putSharePost);
router.put('/comment_post/:postId', Controller.putAddCommentToPost);
// hopefully with a token I can shorten this endpoint
router.put('/edit_comment/:postId/:commentId/:userId', Controller.putEditAComment);



export default router;
