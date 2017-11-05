import Ember from 'ember';

export default Ember.Component.extend({
  addNewRestaurant: false,
  actions: {
    restaurantFormShow(){
      this.set("addNewRestaurant", true);
    },

    saveRestaurant1() {
      var params = {
        name: this.get("name"),
        district: this.get("district"),
        image: this.get("image"),
      };
      this.set("addNewRestaurant", false);
      this.sendAction("saveRestaurant2", params);
    }
  }
});
