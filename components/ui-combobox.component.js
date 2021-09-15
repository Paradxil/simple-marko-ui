const Base = require("./base.mixin");

class Component {
    onCreate(input) {
        this.state = {
            value: input.value || null,
            option: null,
            displayOptions: false
        };
    }

    preHandleClick(event) {
        this.showDropDown();
        this.handleClick(event);
    }

    toggleDropDown(event) {
        if(this.state.displayOptions) {
            this.removeDropDown();
        }
        else {
            this.showDropDown();
        }
    }
    
    showDropDown() {
        document.body.addEventListener('click', this, true);
        this.state.displayOptions = true;
    }

    removeDropDown() {
        document.body.removeEventListener('click', this, true);
        this.state.displayOptions = false;
    }

    handleEvent(e) {
        switch (e.type) {
            case 'click': {
                this.removeDropDown();
            }
        }
    }

    onOptionSelect(value, option, event) {
        this.state.value = option.search||option.value;
        this.state.option = option;
        event.value = option.value;
        event.option = option;

        this.emit("select", event);
    
        this.handleInput(event);

        this.removeDropDown();
        this.getComponent("comboboxinput").state.value = value;
    }

    pushInput(event) {
        this.state.value = event.target.value;
        event.value = event.target.value;

        this.showDropDown();
        
        this.handleInput(event);
    }

    clearInput(event) {
        this.state.value = ""
        event.value = "";
        this.getComponent("comboboxinput").state.value = "";

        this.showDropDown();
        
        this.handleInput(event);
    }

    setValue(value) {
        this.state.value = value;
        this.getComponent("comboboxinput").state.value = value;
    }

    getValue() {
        return this.state.value;
    }

    setOption(option) {
        this.state.option = option;
        this.state.value = (option.name||option.text||option.value||option);
        this.setStateDirty('option');
    }

    getOption() {
        return this.state.option;
    }
};

Object.assign(Component.prototype, Base);

module.exports = Component;