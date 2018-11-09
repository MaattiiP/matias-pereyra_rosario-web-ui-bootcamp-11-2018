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
                obj.call();    
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
    constructor(name,year,duration){
        super();
        this.tittle = name;
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

/* Test 
* movieOne.play();
* movieOne.pause();
* movieOne.resume();
 */

const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

movieOne.addCast(arnold);
movieOne.addCast(actors);
//console.log(movieOne.cast);

class Logger {
    constructor(){}
    log(info){
        console.log("The "+ info +" event has been emitted");        
    }
}

let lgr = new Logger();

movieOne.on("play",function listenPlay(){lgr.log("play")});
movieOne.on("pause",function listenPause(){lgr.log("puase")});
movieOne.on("resume",function listenResume(){lgr.log("resume")});

const Social = {
    constructor(friendName){
        this.friendName = friendName;
    },
    share(){
        let backup = this.friendName;
        return (this.tittle+" shared by "+ friendName);
    },
    like(){
        let backup = this.friendName;
        return(this.friendName+" likes "+  this.tittle);
    }
}

let m = new Movie("testMovie",1111,1111);

let s = Social;

Object.assign(m,s);





//Comandos para instalar
/* --skip-git
ng new xxxxxx --skip-git */