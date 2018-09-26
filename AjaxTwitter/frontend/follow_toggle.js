const APIUtil = require('./api_util.js');

class FollowToggle {

  constructor($el) {
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.$el = $el;
    this.render();
    this.handleClick();
  }

  render() {
    if ( this.followState ) {
      this.$el.text("Unfolllow!");
    } else {
      this.$el.text("Follow!");
    }
    this.$el.prop("disabled", false);
  }

  handleClick() {
    this.$el.on("click", (e) => {
      e.preventDefault();
      this.$el.prop("disabled", true);
      if ( this.followState ) {
        this.$el.text("Unfollowing...");
        APIUtil.unfollowUser(this.userId)
          .then((res) => {
            this.followState = false;
            this.render();
          });
      } else {
        this.$el.text("Following...");
        APIUtil.followUser(this.userId)
          .then((res) => {
            this.followState = true;
            this.render();
          });
      }

    });
  }

}

module.exports = FollowToggle;
