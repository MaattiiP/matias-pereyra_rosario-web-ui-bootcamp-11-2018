/* class Movie {
    constructor(name,year,duration){
        this.tittle = name;
        this.year = year;
        this.duration = duration;
        this.seconds = 0;
        this.minutes = 0;
    }
    play(){
        let _start = 0;
        let _end = this.duration;
        setInterval(()=>{
            this.seconds++;
            if(this.seconds > 60){
                this.seconds = 0;
                this.minutes++;
            }
        },1000);
        console.log(this.tittle);
        console.log("play");
        console.log(this.seconds);
        console.log(this.minutes);
    }
    pause(){
        console.log("pause");
        this.seconds = this.seconds;
        this.minutes = this.minutes;
    }
    resume(){
        console.log("resume");
       this.play();
    }
}

class Actor {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
 */
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

movieOne.play();
movieOne.resume();
movieOne.pause();

const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

movieOne.addCast(arnold);
movieOne.addCast(actors);
console.log(movieOne.cast);