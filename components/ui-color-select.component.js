const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            color: input.color||input.value||"#fff",
            showDialogue: false
        }
    }

    toggleDialogue() {
        if(input.popup) {
            this.state.showDialogue = !this.state.showDialogue;
        }
    }

    selectColor(color) {
        this.state.color = color;
        this.state.showDialogue = false;
        this.emit('input', {color: this.state.color, value: this.state.color})
    }

    setValue(color) {
        this.state.color = color;
    }

    getValue() {
        return this.state.color;
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;