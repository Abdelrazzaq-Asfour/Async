
//name user
let userFa = 'abdelrazzaq'


console.log(`You will be transferred to the desired page within seconds`);
 const con =setInterval(() => {
    console.log(`Hello  ${userFa}`);

} , 1000);

    setTimeout( function test(){
            console.log(`Done`);
            clearInterval(con);
        },3000);
    
     
    








