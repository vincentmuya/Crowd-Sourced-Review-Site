import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  district: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
