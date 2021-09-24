const Base = require("./base.mixin");
var formatDistance = require('date-fns/formatDistance/index.js');
var toDate = require('date-fns/toDate/index.js');
var sub = require('date-fns/sub/index.js');

class Component {
    onCreate(input) {
        this.state = {
            durationString: this.getDurationString()
        }

        this.parseInputs(input);
    }

    parseInputs(input) {
        if(input.start) {
            this.start = toDate(input.start);
        }
        else {
            this.start = sub(toDate(Date.now()), {hours: 1});
        }

        if(input.end) {
            this.end = toDate(input.end);
        }
        else {
            this.end = toDate(Date.now());
        }
    }

    onInput(input) {
        this.parseInputs(input);
        this.state.durationString = this.getDurationString();
    }

    getDurationString() {
        if(this.end != null && this.start != null) {
            return formatDistance(this.end, this.start);
        }
        return "ERR";
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;