/* HOW TO USE
var collapsibleView = new CollapsibleView({
                el: "#heading",
                collapsibleEl: ["#content1", "#content2"]
            }).render();
*/

var CollapsibleView = Backbone.View.extend({

    // options:
    // el: '#featureQueryHeading',
    // collapsibleEl: ['featureType', 'featureName']

    events: {
        'click': 'toggle'
    },
    toggle: function() {
        var e = this.$el;
        var isOpen = e.text() == '\u25BA';
        e.text(isOpen ? '\u25BC' : '\u25BA');

        _.each(this.collapsibleEl, function(a){
            $(a).slideToggle();
        });
    },

    initialize: function(options) {
        this.options = options;
        _.bindAll(this, 'render');
        this.el = this.options.el;
        this.$el.addClass("collapsible_toggle");
        this.$el.text('\u25BA');
        this.collapsibleEl = this.options.collapsibleEl;

        console.log("initialize Collapsible for "+this.options.el)

    },

    render: function(){
        return this;
    }
})