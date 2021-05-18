const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            value: input.value||null
        }
    }

    pushInput(event) {
        this.state.value = event.target.value;
        event.value = event.target.value;
        this.handleInput(event);
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;