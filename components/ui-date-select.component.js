const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            value: input.milliseconds,
            date: new Date(input.milliseconds),
            popup: false,
            curDate: new Date(input.milliseconds),
            tab: "date",
            setHour: true
        };
    }

    emitEvent() {
        this.emit("input", {value: this.state.value, date: this.state.date});
    }

    onInput(input) {
        //this.state.value = input.milliseconds;
        //this.state.date = new Date(input.milliseconds);
    }

    togglePopup(event) {
        this.state.popup = !this.state.popup;
    }
    
    setDate(month, day, year, event) {
        this.state.date.setMonth(month);
        this.state.date.setDate(day);
        this.state.date.setFullYear(year);
        this.state.value = this.state.date.getTime();
        this.state.curDate = this.state.date;
        this.setStateDirty("curDate");
        this.emitEvent();
    }

    changeMonth(event) {
        let newMonth = parseInt(event.value);
        console.log(newMonth);
        if(newMonth < 0) {
            this.state.curDate.setFullYear(this.state.curDate.getFullYear()-1);
            this.state.curDate.setMonth(11);
        }
        else if(newMonth > 11) {
            console.log(this.state.curDate.getFullYear()+1);
            this.state.curDate.setFullYear(this.state.curDate.getFullYear()+1);
            this.state.curDate.setMonth(0);
        }
        else {
            this.state.curDate.setMonth(newMonth);
        }
        this.setStateDirty("curDate");
    }

    changeYear(event) {
        this.state.curDate.setFullYear(parseInt(event.value));
        this.setStateDirty("curDate");
    }

    changeHour(hour) {
        this.state.curDate.setHours(hour);
        this.state.date.setHours(hour);
        this.state.value = this.state.date.getTime();
        this.setStateDirty("curDate");
        this.setStateDirty("date");
        this.state.setHour = false;
        this.emitEvent();
    }

    changeMinute(minute) {
        this.state.curDate.setMinutes(minute);
        this.state.date.setMinutes(minute);
        this.state.value = this.state.date.getTime();
        this.setStateDirty("curDate");
        this.state.setHour = true;
        this.emitEvent();
    }

    changeTab(tab) {
        this.state.tab = tab;
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;