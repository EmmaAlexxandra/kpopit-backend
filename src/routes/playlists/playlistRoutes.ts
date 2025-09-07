import { Router } from 'express';
import * as Controller from "./playlistControllers"

const router = Router();

router.get('/test', (_req, res) => {
    console.log('✅ /test route hit!');
    res.send('✅ Test route is working!');
});

router.get('/all',Controller.getAlLPublicPlaylists)
router.get("/user_id/:userId",Controller.getAllPlaylistsByUserId)
router.get('/username/:username',Controller.getAllPlaylistByUserName)
router.get('/playlist_id/:playlistId', Controller.getPlaylistById)

router.post('/post_playlist',Controller.postPlaylist)

router.put('/edit_playlist/:playlistId', Controller.putEditPlaylist)
router.put('/share_playlist/:playlistId',Controller.putUpdateShares)
router.put('/change_privacy_playlist/:playlistId',Controller.putPublicOrPrivatePlaylist)

router.delete("/delete_playlist/:playlistId",Controller.deleteAPlaylist)

export default router