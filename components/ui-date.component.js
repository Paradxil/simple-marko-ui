const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            date: this.getNiceDate(input.milliseconds),
            hour: this.getNiceHour(input.milliseconds)
        };
    }

    onInput(input) {
        this.state.date = this.getNiceDate(input.milliseconds);
        this.state.hour = this.getNiceHour(input.milliseconds);
    }

    getNiceDate(millseconds) {
        let date = new Date(millseconds);
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    }
    
    getNiceHour(millseconds) {
        let date = new Date(millseconds);
        return (date.getHours()===0?'00':date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" : '') + date.getMinutes();
    }
    
};

Object.assign(Component.prototype, Base);

module.exports = Component;