function Break() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
        if(i == 3){
            break;
        }
    }
}
Break()
console.log("")
function Continue() {
    for (let i = 0; i < 5; i++) {
        if(i == 3){
            continue;
        }
        console.log(i)
    }
    
}
Continue()