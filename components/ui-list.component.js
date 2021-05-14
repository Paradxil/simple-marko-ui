const Base = require("./base.mixin");

class Component {
    handleItemClick(item, index, event) {
        this.emit("itemclick", {item: item, index: index, event: event})
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;