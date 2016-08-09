var ButtonView = Backbone.View.extend({

    // options:
    // el: '#modifyDisplay',
    // className: "editButtonInHeader",
    // text: "Modify Display"
    // onClickHandler: "doSomething"

    events: {
        'click': 'onClick'
    },
    onClick: function () {
        console.log('button CLICK')
        this.clickHandler()
    },

    initialize: function(options) {
        _.extend(this, options);

        this.$el.addClass(options.className);
        this.$el.html(options.text);
        console.log("initialize ButtonView for "+this.el)

    },

    render: function(){
        return this;
    },

    // this can be defined during instantiation
    clickHandler: function () {
    }

})


var buttonView = new ButtonView({
            el: "#test",
            className: "editButtonInHeader",
            text: "Test"
}).render();
