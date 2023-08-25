let firstName;
firstName = true;
firstName = "banane";
firstName = 74;
const mulet = "chaine de carac teste";
let age;
const colors = ['mauve'];
const note = [42];
colors.push('bleu');
console.log(colors);
// LEs tulpes: un tab avec nbr fix d elements:
const monTulpes = ['teste', 45];
const myCarac = {
    level: 42,
    nickname: 'dramix',
};
//les enums
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
    Role["SUPERADMIN"] = "superadmin";
})(Role || (Role = {}));
let userRole = Role.ADMIN;
if (userRole === Role.ADMIN) {
    console.log('c est un admin');
}
