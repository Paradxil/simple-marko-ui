const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            classes: []
        }

        // Check for these keywords in the input and add them to the class list if present
        this.keywords = ["labeled", "light", "dark", "disabled", "filled", "rounded", "primary", "secondary", "padded", "centered", "fullwidth", "alignleft", "alignright", "paddedwide", "paddednarrow", "hidden", "raised", "outlined", "fullscreen"];
    }
    onInput(input) {
        this.state.classes = [input.class||null];
        this.state.classes.push("ui-element");
        for(let word of this.keywords) {
            if(input[word]||false === true) {
                this.state.classes.push(word);
            }
        }
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;