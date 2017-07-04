/**
 * Created by VKirilenko on 04.07.2017.
 */
class Task{
    constructor(protected a:string){
    }

    start():void{
        console.log(`a = ${this.a}`);
    };
}

class SimpleTask extends Task{
    constructor(protected a:string, protected b:string){
        super(a);
    }

    start():void{
        console.log(`a = ${this.a}, b = ${this.b}`);
    };
}

class FutureTask extends SimpleTask{
    constructor(protected a:string, protected b:string, protected c:string){
        super(a,b);
    }

    start():void{
        console.log(`a = ${this.a}, b = ${this.b}, c = ${this.c}`);
    };
}

class TaskList<T extends Task>{
    private _items: T[] = [];

    add(item : T):void{
        this._items.push(item);
    };

    startAll(){
        this._items.forEach((element)=>{ element.start() });
    }
}

let taskList = new TaskList<Task>();
taskList.add(new SimpleTask("simple1", "simple_content1"));
taskList.add(new SimpleTask("simple2", "simple_content2"));
taskList.add(new Task("task1"));
taskList.add(new Task("task2"));
taskList.startAll();
