const Base = require("./base.mixin");
var format = require('date-fns/format/index.js');
var toDate = require('date-fns/toDate/index.js');

class Component {
    
    onCreate(input) {
        this.state = {
            dateString: ""
        };

        this.onInput(input);
    }

    onInput(input) {
        this.date = toDate(input.milliseconds);

        this.format = '';

        if(input.date === true || input.date == null) {
            this.format += 'MM/dd/yy ';
        }

        if(input.time === true || input.time == null) {
            this.format += 'HH:mm';
        }

        this.state.dateString = this.getDateString();
    }

    getDateString() {
        console.log
        if(this.date == null) {
            return "ERR";
        }

        try {
            return format(this.date, this.format);
        }
        catch(err) {
            return "ERR";
        }
    }
    
};

Object.assign(Component.prototype, Base);

module.exports = Component;