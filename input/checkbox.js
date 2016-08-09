// Person Model
var Person = Backbone.Model.extend({
    defaults: {
        name: 'Guest User',
        age: 30,
        occupation: 'worker'
    }
});

// The View for a Person
var PersonView = Backbone.View.extend({
    tagName: "span",
    className: 'checkboxSpan',

    template: _.template(
        '<input type="checkbox" name="<%= checkboxName %>" value="<%= name %>"  {{ checked }} >' +
            ' <%= name %>(<%= age %>) - <%= occupation %></input>'),

    initialize: function(){

    },
    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
    }
});

// A List of People
var PeopleCollection = Backbone.Collection.extend({
    model: Person
});


// View for all people
var PeopleView = Backbone.View.extend({
    tagName: 'div',

    initialize: function(){
    },
    render: function() {
        this.collection.each(function(person) {
            var personView = new PersonView({ model: person });
            this.$el.append(personView.render().el);
        }, this);

        return this;
    }
});



var peopleCollection = new PeopleCollection([
    {
        checkboxName: "person",
        name: 'Mohit Jain',
        age: 26,
        checked: "CHECKED"
    },
    {
        checkboxName: "person",
        name: 'Taroon Tyagi',
        age: 25,
        occupation: 'web designer',
        checked: ""
    },
    {
        checkboxName: "person",
        name: 'Rahul Narang',
        age: 26,
        occupation: 'Java Developer',
        checked: ""
    }
]);
//var displayHTML='<%= name %>'
var peopleView = new PeopleView({ collection: peopleCollection });
$("#checkbox").append(peopleView.render().el);
