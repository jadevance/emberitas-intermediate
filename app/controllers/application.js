import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Emberita',
  color: 'green',
  colorStyle: Ember.computed('color', function() {
      var color = CSS.escape(this.get('color'));
      return Ember.String.htmlSafe("color: " + color);
    }),
});