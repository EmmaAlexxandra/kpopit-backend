import { Router } from 'express';
import * as Controller from './idolAndGroupsController';

const router = Router();

console.log('🎯 idolAndGroupsRoutes loaded');

/**
 * 🚨 READ THIS BEFORE ADDING NEW ROUTES 🚨
 *
 * This file defines the routes for idol and group-related endpoints.
 * 
 * ✅ If you're adding a new route here (e.g., a GET/POST for idols or groups),
 * make sure to follow this safe development process to avoid accidentally
 * wiping the database or wasting hours debugging 404 errors:
 * 
 * 
 * 🧠 DEVELOPMENT WORKFLOW FOR ADDING NEW ROUTES (Dockerized Dev):
 * 
 * 1️⃣ Add your new route below — for example:
 *     router.get('/new-idol-stats', Controller.getIdolStats);
 * 
 * 2️⃣ MAKE SURE YOUR CONTROLLER FUNCTION EXISTS and is exported from
 *     idolAndGroupsController.ts. If the function doesn't exist or is misnamed,
 *     the server will crash silently on build.
 * 
 * 3️⃣ Now RESTART JUST THE API CONTAINER (DO NOT DOWN THE DB):
 *     Run: `npm run restart-api` 
 * 
 * ❌ DO NOT RUN `docker compose down` unless you *intentionally* want to destroy
 *    everything (which includes the volume holding your Postgres data).
 *    Running `down` removes containers and volumes unless specifically configured
 *    to persist them.
 *
 * 💾 The DB volume is mapped in `docker-compose.yml` as:
 *     volumes:
 *       - pgdata:/var/lib/postgresql/data
 *     So as long as you DON'T nuke volumes, the data persists.
 *
 * 🔥 If your new route returns a 404:
 *     - Confirm the route path matches what you’re calling in Postman.
 *     - Confirm the router is properly imported and mounted in `index.ts`.
 *     - Confirm you restarted the API container to reflect new code.
 *     - Use `docker logs kpopit-api` to check if the route actually loaded.
 *
 * 🛑 TL;DR:
 *     - Never run `docker compose down` unless you *absolutely* intend to reset the entire backend.
 *     - Restart the API container only with `docker restart kpopit-api`.
 *     - Add a new route? RESTART the container. Don’t rage-rebuild everything.
 *
 * Happy coding — and future-you says thanks for not nuking the database again 💽
 */

router.get('/test', (_req, res) => {
  console.log('✅ /test route hit!');
  res.send('✅ Test route is working!');
});

router.get('/idols', Controller.getAllIdols);
router.get('/groups', Controller.getAllGroups);
router.get('/groups/debut-date/:param', Controller.getGroupByID);
router.get('/groups/name/:param', Controller.getGroupByName);
router.get('/groups/members/:groupName', Controller.getAllMembersGroupName);
router.get('/groups/members-by-date/:date', Controller.getAllMembersGroupDebutDate);
router.get('/idols/name/:name', Controller.getIdolByName);


export default router;
