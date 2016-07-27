import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Emberita',
  // color: 'green',
  colorStyle: Ember.computed('color', function() {
      var color = CSS.escape(this.get('color'));
      return Ember.String.htmlSafe("color: " + color);
  }),
  actions: {
    setName(newName){
      this.set('model.name', newName);
      this.send('saveModel');
    },
    setColor(newColor){
      this.set('model.favoriteColor', newColor);
      this.send('saveModel');
    }
  },
    saveModel(){
      this.get('model').save().then(() => {
        alert('The model was saved');
      }).catch(() => {
        alert('The model was not saved');
      }).finally(() => {
        console.log(this.get('model.currentState.stateName'));
      });
    },
  someInformation: Ember.computed('model.{name,favoriteColor}', function(){
      return 'Your name is ' + this.get('model.name') + ' and your favorite color is ' + this.get('model.favoriteColor');
    }),
});

