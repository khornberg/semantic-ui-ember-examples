import Ember from 'ember';

export default Ember.Component.extend({
    itemActions: [ "Edit", "Remove", "Hide", "Delete", "Right Justify", "Left Justify"],
    selectedAction: null,

    actions: {
      updateSelected: function(component, id) {
        this.set('selectedAction', id);
      }
    }
});
