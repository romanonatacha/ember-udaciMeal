import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
    model() {
        return Ember.$.get('/menu/menu.json');
    }
});
