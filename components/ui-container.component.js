const Base = require("./base.mixin");

class Component {
    onCreate() {
        this.state = {
            classes: []
        }
    }

    onInput(input) {
        // Check for these keywords in the input and add them to the class list if present
        const keywords = ["centered", "placecenter", "aligncenter", "fillspace"];
        this.state.classes = [input.class||null];
        for(let word of keywords) {
            if(input[word]||false === true) {
                this.state.classes.push(word);
            }
        }

    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;