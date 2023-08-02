import express from "express";
import bodyParser from "body-parser";

const app = express()

app.use(bodyParser.json())


app.get('/myapi/posts', (req, res) => {
  console.log('this is get method..');
  res.send('this is get method from server.js..');
})


app.listen(5000, () => {
  console.log('Server listening on port 5000')
})


export default app