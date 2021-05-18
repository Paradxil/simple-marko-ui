module.exports = {
    handleClick(event) {
        this.emit("click", event);
    },
    preventHandleClick(event) {
        event.preventDefault();
        this.handleClick(event);
    },
    handleInput(event) {
        this.emit("input", event);
    }
}