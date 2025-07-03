import express from 'express';
import dotenv from 'dotenv';
import idolAndGroupRoutes from './routes/idolsAndGroups/idolAndGroupsRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Confirm server runs
app.get('/', (_req, res) => {
  res.send('API is working!');
});

// Mount router
app.use('/api/idolsAndGroups', idolAndGroupRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
