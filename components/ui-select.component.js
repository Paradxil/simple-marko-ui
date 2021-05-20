const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            value: input.value||null
        }
    }

    selectOption(event) {
        this.state.value = event.target.value;
        this.emit('input', {value: this.state.value, event: event});
    }

    onInput(input) {
        if(input.value) {
            this.state.value = input.value;
        }
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;