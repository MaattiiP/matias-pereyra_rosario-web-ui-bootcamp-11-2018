import {EventEmitter} from "/class/eventEmitter.js";
import {Actor} from "/class/actor.js";
import {Logger} from "/class/logger.js";
import {Social} from "/class/social.js";

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

let lgr = new Logger();

movieOne.on("play",lgr.log);
movieOne.on("pause",lgr.log);
movieOne.on("resume",lgr.log);


movieOne.play();
movieOne.pause();
movieOne.resume();
console.log(movieOne.cast);

Object.assign(movieOne,Social);

movieOne.share('Mike Blossom');