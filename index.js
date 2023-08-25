var firstName;
firstName = true;
firstName = "banane";
firstName = 74;
var mulet = "chaine de carac teste";
var age;
var colors = ['mauve'];
var note = [42];
colors.push('bleu');
console.log(colors);
// LEs tulpes: un tab avec nbr fix d elements:
var monTulpes = ['teste', 45];
var myCarac = {
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
var userRole = Role.ADMIN;
if (userRole === Role.ADMIN) {
    console.log('c est un admin');
}
