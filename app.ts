/**
 * Created by VKirilenko on 04.07.2017.
 */
class Task{
    constructor(protected a:any){
    }

    start():void{
        console.log(this.a);
    };
}

class SimpleTask extends Task{
    constructor(protected a:any, protected b:any){
        super(a);
    }
}

class FutureTask extends SimpleTask{
    constructor(protected a:any, protected b:any, protected c:any){
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

let tasklist = new TaskList <Task>();
tasklist.add(new SimpleTask(1, 2));
tasklist.add(new FutureTask(2, 4, 5));
tasklist.startAll();