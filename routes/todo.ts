import {Router} from "express";

import {Todo} from "../models/Todo";

const router = Router();

const Todos: Todo[] = [];

type Requestbody = {  id : string,
                      text: string };

router.post('/todo', (req,res,next) => {
    const newTodo: Todo = {
		id: new Date().toISOString(),
		text: req.body.text,
      };
	Todos.push(newTodo);
    res.status(200).json({ todos: Todos });
})

router.post('/delete', (req, res, next) => {
    const body = req.body as Requestbody;
    const elementid = body.id;
    const index = Todos.findIndex(todoitem => todoitem.id === elementid);
    if(index !== -1){
        Todos.splice(index, 1);
        res.status(200).json({ todos: Todos });
    } else {
        res.status(404).json({ todos: Todos });
    }
});

router.post('/update', (req, res, next) => {
    const body = req.body as Requestbody;
    const elementid = body.id;
    const todoindex = Todos.findIndex(todoitem => todoitem.id === elementid);
    if(todoindex !== -1){
        Todos[todoindex].text = body.text;
        res.status(200).json({ todos: Todos });
    } else {
        res.status(404).json({ todos: Todos });
    }
});



router.get('/' ,(req,res, next) => {
    res.status(200).json({ todos: Todos});
})

export default router;
