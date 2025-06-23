import express, { Express, Request, Response } from 'express';
const app: Express = express();
const PORT = 3000;

// TOPページ
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome oshi-streaming-list app!');
});

// サーバ起動
app.listen(PORT, () => {
  console.log(`server running!: http://localhost:${PORT}`);
});