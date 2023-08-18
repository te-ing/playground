const express = require('express');
const app = express();
const PORT = 4000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
// 미들웨어

app.get('/', (req, res) => {
  return res.json('hello world!');
});
