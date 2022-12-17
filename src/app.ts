import  Express  from "express";
import todoroute from "./routes/todo";
import bodyparser from 'body-parser';
const app = Express();
app.use(bodyparser.json());
app.use(todoroute);

app.listen(4000);
