class EventEmitter {
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

class Movie extends EventEmitter {
    constructor(tittle,year,duration){
        super();
        this.tittle = tittle;
        this.year = year;
        this.duration = duration;
        this.cast = "";
    }

    play(){
        super.emit("play");
    }
    pause(){
        super.emit("pause");
    }
    resume(){
        super.emit("resume");
    }

    addCast(actors){
        if(!actors.length){
            this.cast += "_" + actors.name + "_";
        } else if(actors.length){
            for(let i = 0; i < actors.length;i++){
                this.cast += "_" + actors[i].name + "_";
            }
        }
    }
}


class Actor {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let movieOne = new Movie("Terminator",1984,108);


movieOne.on("play",function play(){
    console.log("Playing "+ movieOne.tittle);
});

movieOne.on("pause",function pause(){
    console.log(movieOne.tittle+" is paused");
});

movieOne.on("resume",function resume() {
    console.log(movieOne.tittle+" has been resume");
});


const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

movieOne.addCast(arnold);
movieOne.addCast(actors);

class Logger {
    constructor(){}
    log(info){
        console.log("The "+ info +" event has been emitted");        
    }
}

let lgr = new Logger();

movieOne.on("play",lgr.log);
movieOne.on("pause",lgr.log);
movieOne.on("resume",lgr.log);

const Social = {
    share:function share(friendName){
        return (this.tittle+" shared by "+ friendName);
    },
    like:function like(friendName){
        return(friendName+" likes "+  this.tittle);
    }
}

movieOne.play();
movieOne.pause();
movieOne.resume();
console.log(movieOne.cast);

Object.assign(movieOne,Social);

movieOne.share('Mike Blossom');


