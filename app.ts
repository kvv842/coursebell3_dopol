/**
 * Created by VKirilenko on 04.07.2017.
 */
class Task{
    constructor(protected a:string){
    }

    start():void{
        console.log(this.a);
    };
}

class SimpleTask extends Task{
    constructor(protected a:string, protected b:string){
        super(a);
    }
}

class FutureTask extends SimpleTask{
    constructor(protected a:string, protected b:string, protected c:string){
        super(a,b);
    }
}

class TaskList<T extends Task>{
    private _items: T[] = [];

    add(item : T):void{
        this._items.push(item);
    };

    startAll(){
        for(var item of this._items){
            item.start();
        }
    }
}

let taskList = new TaskList<Task>();
taskList.add(new SimpleTask("simple1", "simple_content1"));
taskList.add(new SimpleTask("simple2", "simple_content2"));
taskList.add(new Task("task1"));
taskList.add(new Task("task2"));
taskList.startAll();
