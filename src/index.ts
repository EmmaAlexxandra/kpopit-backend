import express from 'express';
import dotenv from 'dotenv';
import idolAndGroupRoutes from './routes/idolsAndGroups/idolAndGroupsRoutes';
import usersRoutes from './routes/users/usersRoutes';
import postRoutes from './routes/posts/postRoutes';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Confirm server runs
app.get('/', (_req, res) => {
  res.send('API is working!');
});

// Mount router
app.use('/api/idols_and_groups', idolAndGroupRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/posts', postRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
