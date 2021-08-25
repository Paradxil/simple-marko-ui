const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            value: input.value||null
        }
    }

    pushInput(event) {
        this.state.value = event.target.value;
        this.input.value = this.state.value;
        event.value = event.target.value;
        this.handleInput(event);
    }

    getValue() {
        return this.state.value;
    }

    setValue(value) {
        this.state.value = value;
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;