var Role;
(function (Role) {
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Author"] = 3] = "Author";
    Role[Role["Client"] = 4] = "Client";
})(Role || (Role = {}));
; // creo un oggetto con gli elementi già numerati , è possibile anche assegnari i numeri manualmente e gli altri seguiranno il numero precedente
var person = {
    name: 'Matthew',
    age: 29,
    hobbies: ['Sport', 'Dance'],
    role: [2, 'footballer'],
    worker: Role.Admin
};
var favHobbies = ['Pallavolo', 1]; // determino un array variabile
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.worker == Role.Admin) {
    console.log('is Admin');
}
