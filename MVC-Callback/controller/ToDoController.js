const ToDo = require (`../model/ToDomodel`);
const view = require (`../view/ToDoview`);

class ToDoController {
    static help (params){
        // const result = ToDo.help (params);
        ToDo.help(params, (err,data)=>{
            if (err){
                view.error(err);
            }
            else{
                view.help (data);
            }
        })
    }
    static list (){
        // const list = ToDo.list();
        ToDo.list((err,data)=>{
            if (err){
                view.error(err);
            }
            else{
                view.list(data);
            }
        })
    }
    static add (params){
        // const result = ToDo.add(params);
        ToDo.add(params, (err,data)=>{
            if (err){
                view.error(err);
            }
            else{
                view.message (data);
            }
        })
    }
    static delete(params){
        // const result =  ToDo.delete(params);
        ToDo.delete(params, (err,data)=>{
            if (err){
                view.error(err);
            }
            else{
                view.message (data);
            }
        })
    }
    static update(params){
        // const result = ToDo.update (params);
        ToDo.update(params, (err,data)=>{
            if (err){
                view.error(err);
            }
            else{
                view.message (data);
            }
        })
    }
    static complete (params){
        // const result = ToDo.complete (params);
        ToDo.complete(params, (err,data)=>{
            if (err){
                view.error(err);
            }
            else{
                view.message (data);
            }
        })
    }
    static uncomplete (params){
        // const result = ToDo.uncomplete (params);
        ToDo.uncomplete(params, (err,data)=>{
            if (err){
                view.error(err);
            }
            else{
                view.message (data);
            }
        })
    }
    // static sortir (){
    //     const list = ToDo.sortir ();
    //     view.message (list);
    // }
    static message (msg){
        view.message(msg);
    }
}

module.exports = ToDoController;