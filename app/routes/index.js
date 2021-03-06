import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      restaurants: this.store.findAll('restaurant'),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    saveRestaurant3(params) {
      var newRestaurant = this.store.createRecord("restaurant", params);
      newRestaurant.save();
      this.transitionTo("index");
    }
  }


});

// model(){
//   return this.store.findAll("restaurant")
// },
