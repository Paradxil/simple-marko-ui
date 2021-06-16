const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            value: input.milliseconds,
            date: new Date(input.milliseconds),
            popup: false,
            curDate: new Date(input.milliseconds),
            tab: "date"
        };
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

    changeTab(tab) {
        this.state.tab = tab;
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;