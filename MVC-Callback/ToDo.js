const command = process.argv[2];
const params = process.argv.slice (3);
const ToDoController = require(`./controller/ToDoController`);

switch (command){
    case 'help':
        console.log("help");
        ToDoController.help(params);
        break;
    case 'list':
        console.log("To Do list");
        ToDoController.list();
        break;
    case 'add':
        console.log("add");
        ToDoController.add(params);
        break;
    case 'delete' :
        console.log("delete");
        ToDoController.delete(params);
    case 'update' :
        console.log("update");
        ToDoController.update(params);
        break;
    case 'complete' :
        console.log("complete");
        ToDoController.complete(params);
        break;
    case 'uncomplete' :
        console.log("uncomplete");
        ToDoController.uncomplete(params);
        break;
    // case 'sortir' :
    //     console.timeLog("sortir");
    //     ToDoController.sortir();
    default :
        ToDoController.message('Please input the right command');
        break;
}


//Flow MVC
//1. User / penggunaq input terminal ke index.js -> node index.js
//2. Logic flow : controller -> Model -> controller