const ToDo = require (`../model/ToDomodel`);
const view = require (`../view/ToDoview`);

class ToDoController {
    static help (params){
        const result = ToDo.help (params);
        view.message (result);
    }
    static list (){
        const list = ToDo.list();
        view.list (list);
    }
    static add (params){
        const result = ToDo.add(params);
        view.message (result);
    }
    static delete(params){
        const result =  ToDo.delete(params);
        view.message (result);
    }
    static update(params){
        const result = ToDo.update (params);
        view.message (result);
    }
    static complete (params){
        const result = ToDo.complete (params);
        view.message (result);
    }
    static uncomplete (params){
        const result = ToDo.uncomplete (params);
        view.message (result);
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