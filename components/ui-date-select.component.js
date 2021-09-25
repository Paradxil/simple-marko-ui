const Base = require("./base.mixin");
var addMonths = require('date-fns/addMonths/index.js');
var setMonth = require('date-fns/setMonth/index.js');
var setYear = require('date-fns/setYear/index.js');
var setHours = require('date-fns/setHours/index.js');
var setMinutes = require('date-fns/setMinutes/index.js');


class Component {
    onCreate(input) {
        this.state = {
            value: input.milliseconds,
            date: new Date(input.milliseconds),
            popup: false,
            curDate: new Date(input.milliseconds),
            tab: "date",
            setHour: true,
            includeDate: input.showdate!=null?input.showdate:true,
            includeTime: input.showtime!=null?input.showtime:true
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
        this.state.date = new Date(year, month, day, this.state.date.getHours(), this.state.date.getMinutes());
        this.state.value = this.state.date.getTime();
        this.state.curDate = this.state.date;
        this.setStateDirty("curDate");
        this.emitEvent();
    }

    changeMonth(forward=true) {
        this.state.curDate = addMonths(this.state.curDate, forward?1:-1);
        this.setStateDirty("curDate");
    }

    setMonth(event) {
        this.state.curDate = setMonth(this.state.curDate, event.value);
        this.setStateDirty("curDate");
    }

    changeYear(event) {
        this.state.curDate = setYear(this.state.curDate, parseInt(event.value));
        this.setStateDirty("curDate");
    }

    changeHour(hour) {
        this.state.curDate = setHours(this.state.curDate, hour);
        this.state.date = setHours(this.state.date, hour);
        this.state.value = this.state.date.getTime();
        this.setStateDirty("curDate");
        this.setStateDirty("date");
        this.emitEvent();
    }

    changeMinute(minute) {
        this.state.curDate = setMinutes(this.state.curDate, minute);
        this.state.date = setMinutes(this.state.date, minute);
        this.state.value = this.state.date.getTime();
        this.setStateDirty("curDate");
        this.setStateDirty("date");
        this.emitEvent();
    }

    changeTab(tab) {
        this.state.tab = tab;
    }

    toggleSetHours() {
        this.state.setHour = !this.state.setHour;
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;