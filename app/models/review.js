import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  comment: DS.attr(),
  author: DS.attr(),
  restaurant: DS.belongsTo("restaurant", {async:true}),
});
