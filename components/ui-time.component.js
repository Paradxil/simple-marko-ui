const Base = require("./base.mixin");
const formatDuration = require('date-fns/formatDuration/index.js');
var millisecondsToHours = require('date-fns/millisecondsToHours/index.js')


class Component {
    onCreate(input) {
        this.state = {
            time: formatDuration({hours: millisecondsToHours(input.milliseconds)})
        }
    }

    onInput(input) {
        this.state.time = formatDuration({hours: millisecondsToHours(input.milliseconds)});
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;