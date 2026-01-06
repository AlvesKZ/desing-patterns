import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({name: 'Roberto', age: 30});
myDatabaseClassic.add({name: 'Joana', age: 18});
myDatabaseClassic.add({name: 'Luíza', age: 25});
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);

