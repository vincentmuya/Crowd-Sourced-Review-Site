import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed("restaurant.name", "restaurant.district", function(){
    return this.get("restaurant.name") + ' in ' + this.get("restaurant.district");
  }),

  favoriteList: Ember.inject.service(),

  actions: {
    addToFavorite(item) {
      this.get('favoriteList').add(item);
    },
  }
});




// import Ember from 'ember';
//
// export default Ember.Component.extend({
// });
