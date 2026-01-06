import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({name: 'Luiz', age: 30});
myDatabaseClassic.add({name: 'Igor', age: 18});
myDatabaseClassic.add({name: 'Maria', age: 25});
myDatabaseClassic.show();

export { myDatabaseClassic };
