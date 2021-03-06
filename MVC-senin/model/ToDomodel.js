const fs = require('fs');

class ToDo {
    constructor (id, task, status, tag, created_at, completed_at){
        this.id = id;
        this.task = task;
        this.status = status;
        this.tag = tag;
        this.created_at = created_at;
        this.completed_at = completed_at;
    }
    static help (){
        const helps = `
                    ToDo command helps
        To start type   = node ToDo.js
        Help            = node TODo.js help
        List task       = node ToDo.js list  
        Add Task        = node ToDo.js add <task>
        Update Task     = node ToDo.js update <id> <task>
        Delete Task     = node ToDo.js delete <id>
        Complete Task   = node ToDo.js complete <id>
        Uncomplete Task = node ToDo.js uncomplete <id>
        `
        console.log(helps);
        return helps;
    }   
    static list (){
        const data = fs.readFileSync('./ToDo.json', 'utf8');
        const parseData = JSON.parse(data);

        let tempData = [];
        parseData.forEach(el => {
            const { id, task, status, tag, created_at, completed_at} = el;
            tempData.push(new ToDo(id, task, status, tag, created_at, completed_at));
            });
        // console.log('ini list');
        return tempData;
    }
    // static time (dates){
    //     let d = new Date(dates),
    //         month = '' + (d.getMonth()+1),
    //         date = '' + d.getDate(),
    //         year = d.getFullYear();

    //         if (month.length < 2){
    //             month = '0' + Month;
    //         }
    //         if (day.length < 2){
    //             day = '0' + date;
    //         }
    //         this.save(d);
    //         return [month, date, year].join('/');
    // }
    static add (params){
        const ToDos = this.list();
        const [task, status, tag] = params;
        let nextId = ToDos[ToDos.length-1].id + 1;

        const tempToDo = {
            id : nextId,
            task : task,
            status : (status === true),
            tag : tag || [],
            created_at : dates,
            completed_at : null,
        };
        ToDos.push(tempToDo);
        this.save(ToDos);
        return `This ${task} has been added.`
    }
    static delete(params){
        const ToDos = this.list();
        const id = Number(params[0]);

        const tempToDo = ToDos.filter(task => task.id !== id);

        let check = false;
        if (tempToDo.length === ToDos.length){
            check = true;
        }
        if (check){
            return 'Task Not Found'
        }
        else{
            const writeTask = ToDos [id-1].task;
            this.save(tempToDo);
            return `"This ${writeTask} removed from the list`
        }
    }
    static update(params){
        const ToDos = this.list();
        const id = Number(params[0]);
        const task = params[1];

        ToDos.forEach(ToDo =>{
            if(ToDo.id === id){
                ToDo.task = task;
            }
        })
        this.save(ToDos);
        return `Id ${id} has been changed to ${task}`

    }
    static complete (id){
        const ToDos = this.list();
        let task = "";
        ToDos.forEach(el =>{
            if(el.id === Number(id)){
                el.completed_at = new Date ();
                el.status = true;
                task = el.task
            }
        })
        this.save(ToDos);
        if (task.length === 0){
            return `invalid ID`
        }else {
            return `${task} Done !!!`
        }
    }
    static uncomplete (id){
        const ToDos = this.list();
        let task = "";
        ToDos.forEach(el =>{
            if(el.id === Number(id)){
                el.completed_at = null;
                el.status = false;
                task = el.task
            }
        })
        this.save(ToDos);
        if (task.length === 0){
            return `invalid ID`
        }else {
            return `do ${task} you lazy...`
        }
    }
    // static sortir (){
    //     const data = fs.readFileSync('./ToDo.json', 'utf8');
    //     const parseData = JSON.parse(data);

    //     let a = "";
    //     let b = "";
    //     parseData.forEach(el=>{
    //         const {task} = el;
    //         let x = a;
    //         let y = b;
    //         if (x < y) {
    //             return -1;
    //         }
    //         if (x > y) {
    //             return 1;
    //         }
    //         return 0
    //     })
    // }
    static save (data){
        fs.writeFileSync('./ToDo.json', JSON.stringify(data, null,2));
    }
}    

module.exports = ToDo;