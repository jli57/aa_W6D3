const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$( () => {

  $('.follow-toggle').each( (ind, el) => {
    const followToggle = new FollowToggle($(el));
  });

  $('.users-search').each ( (ind, el) => {
    const usersSearch = new UsersSearch($(el));
  });

} );
