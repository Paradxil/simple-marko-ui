const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            icon: input.icon||"image",
            showDialogue: false,
            filter: ''
        }
    }

    toggleIconDialogue() {
        this.state.showDialogue = !this.state.showDialogue;
    }

    setFilter(event) {
        this.state.filter = event.value;
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;