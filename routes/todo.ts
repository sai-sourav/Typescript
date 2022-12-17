import {Router} from "express";

import {Todo} from "../models/Todo";

const router = Router();

const Todos: Todo[] = [];

router.post('/todo', (req,res,next) => {
    const newTodo: Todo = {
		id: new Date().toISOString(),
		text: req.body.text,
      };
	Todos.push(newTodo);
    res.status(200).json({ todos: Todos });
})

router.post('/delete', (req, res, next) => {
    const elementid = req.body.id;
    let index;
    for(let i= 0; i< Todos.length; i++){
        if(Todos[i].id === elementid){
            index = i;
        }
    }
    if(index !== undefined){
        Todos.splice(index, 1);
        res.status(200).json({ todos: Todos });
    } else {
        res.status(404).json({ todos: Todos });
    }
});

router.post('/update', (req, res, next) => {
    const elementid = req.body.id;
    let index;
    for(let i= 0; i< Todos.length; i++){
        if(Todos[i].id === elementid){
            Todos[i].text = req.body.text;
            return res.status(200).json({ todos: Todos });
        }
    }
    res.status(404).json({ todos: Todos });
});



router.get('/' ,(req,res, next) => {
    res.status(200).json({ todos: Todos});
})

export default router;
