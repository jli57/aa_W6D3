const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js')

class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$input = $el.find(':input');
    this.$ul = $el.find('ul');
    this.handleInput();
  }

  handleInput() {
    this.$input.on('input', (e) => {
      const text = this.$input.val();
      APIUtil.searchUsers(text)
        .then((res) => this.render(res));
    });

  }

  render(res) {
    this.$ul.empty();
    res.forEach((user) => {

      const $a = $(`<a></a>`);
      $a.text(`@${user.username}`);
      $a.attr('href', `/users/${user.id}`);

      const $followToggle = $('<button class="follow-toggle"></button>');
      $followToggle.data('user-id', `${user.id}`);
      $followToggle.data('initial-follow-state', `${user.followed}`);
      new FollowToggle($followToggle);

      const $li = $(`<li></li>`);
      $li.append($a);
      $li.append($followToggle);

      this.$ul.append($li);
    });
  }
}

module.exports = UsersSearch;
