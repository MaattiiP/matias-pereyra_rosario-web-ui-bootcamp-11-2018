export class EventEmitter {
    constructor(){
        this.events = {}
    }
    on(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    } 
    emit(eventName){
        if(this.events[eventName]){
            this.events[eventName].forEach(obj => {
                obj(eventName);    
            });
        }
    }
    off(eventName, toRemove){
        if(this.events[eventName]){
            this.events[eventName].forEach((obj,index) => {
                if(obj.name == toRemove){
                    this.events[eventName].splice(index,1);
                }
            })
        }
    }
}