const Base = require("./base.mixin");
var intervalToDuration = require('date-fns/intervalToDuration/index.js');
var toDate = require('date-fns/toDate/index.js');

class Component {
    onCreate(input) {
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            start: toDate(input.start||Date.now()),
            divider: input.divider||':',
            hoursSuffix: input.hourlabel||'',
            minutesSuffix: input.minutelabel||'',
            secondsSuffix: input.secondslabel||''
        }
    }

    onInput(input) {
        this.state.start = toDate(input.start||Date.now());
    }

    onMount() {
        window.setInterval(this.updateTimer.bind(this), 500);
    }

    updateTimer() {
        try {
            let duration = intervalToDuration({end: toDate(Date.now()), start: this.state.start});
            this.state.hours = duration.hours||0;
            this.state.minutes = duration.minutes||0;
            this.state.seconds = duration.seconds||0;
        }
        catch(err) {

        }
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;