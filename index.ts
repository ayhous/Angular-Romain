let firstName;
firstName=true;
firstName="banane";
firstName=74;



const mulet="chaine de carac teste";

let age : number;

const colors: string []=['mauve'];
const note: Array<number>=[42];

colors.push('bleu');

console.log(colors);

// LEs tulpes: un tab avec nbr fix d elements:

const monTulpes: [string, number] =['teste',45]

const myCarac:{
    nickname: string,
    level:number,
    //? rend la proprieé optionelle

    isSick?:boolean
}={
    level:42,
    nickname:'dramix',


}

//les enums

enum Role{
    USER='user',
    ADMIN='admin',
    SUPERADMIN='superadmin',
    
    }
    
    
    let userRole: Role = Role.ADMIN;
    if(userRole===Role.ADMIN){
       console.log('c est un admin');
       
    }
    