enum Role {Admin = 2 ,Author, Client}; // creo un oggetto con gli elementi già numerati , è possibile anche assegnari i numeri manualmente e gli altri seguiranno il numero precedente

const person : {                   // per specificare un object posso usare object per generico e { } per specificare il tipo di ogni key
  name: string;
  age: number;
  hobbies: string[];  // determino un array di sole stringhe
  role: [number,string]; // specifico una tuple in cui determino la lunghezza ed il tipo specifico per il mio array
  worker: {};
} = {
    name: 'Matthew',
    age: 29,
    hobbies: ['Sport' , 'Dance'],
    role: [2,'footballer'],
    worker: Role.Admin,
}

let favHobbies: any[] = ['Pallavolo' , 1];  // determino un array variabile
console.log(person);

for (const hobby of person.hobbies) {
    
    console.log(hobby.toUpperCase());
}

if (person.worker == Role.Admin) {
    console.log('is Admin');
    
}


    
