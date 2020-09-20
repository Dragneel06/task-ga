class view {
    static list (data){
        data.forEach(el => {
            console.log(`${el.id}. ${el.task}, status : ${el.status}`);
        })
    }
        
    static message (msg){
        console.log(msg);
    }
    // static sortir (data){
    //     data.forEach(el => {
    //         console.log(`${el.id}. ${el.task}, status : ${el.status}`);
    //     })
    // }
}

module.exports = view;