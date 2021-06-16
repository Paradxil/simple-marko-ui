const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            time: this.getNiceTime(input.milliseconds, input.showseconds||false)
        }
    }

    onInput(input) {
        this.state.time = this.getNiceTime(input.milliseconds, input.showseconds||false);
    }

    getNiceTime(millseconds, full=false) {
        let seconds = Math.floor(millseconds/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/24);
    
        seconds = seconds - minutes*60;
        minutes = minutes - hours*60;
        hours = hours - days*24;
    
        let time = "";
    
        if(days > 0) {
            time += days + " ";
        }
    
        if(hours > 0 || full) {
            time += hours + ":";
        }
    
        if(hours > 0 || minutes > 0 || full) {
            if(minutes < 10 && (hours > 0 || full)) {
                time += "0" + minutes;
            }
            else {
                time += minutes
            }
            time += ":";
        }
    
        time += (seconds<10&&(minutes>0||hours>0||full))?"0"+seconds:seconds;
    
        return time;
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;