window.CalendarDD = window.CalendarDD || {};

CalendarDD.Views = {};

$(function () {
	CalendarDD.Views.Month = Backbone.View.extend({
		el:'.calendar',
		template: _.template($('#tmpl_month').html()),
		render: function () {
			console.log(this.model.attributes)
			this.$el.html(this.template(this.model.attributes));
			var weeks = this.model.get('weeks');
			for (var i = 0; i < weeks; i++) {

				this.$(".month").append(new CalendarDD.Views.Week({week: i,
					model: this.model,
					collection: this.collection
				}).render().el);
			}
			return this;
		}

	})


});