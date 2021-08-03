const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            classes: []
        }

        // Check for these keywords in the input and add them to the class list if present
        this.keywords = ["filled", "rounded", "accent", "secondary", "padded", "centered", "fullwidth", "alignleft", "alignright", "paddedwide", "paddednarrow", "hidden", "raised", "outlined", "fullscreen"];
    }
    onInput(input) {
        let classes = [input.class||null];
        classes.push("ui-element");
        for(let word of this.keywords) {
            if(input[word]||false === true) {
                classes.push(word);
            }
        }
        this.state.classes = classes;
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;