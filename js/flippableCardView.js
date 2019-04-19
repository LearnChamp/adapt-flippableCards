define([
	'core/js/adapt',
	'core/js/views/componentView'
], function(Adapt, ComponentView) {

	var FlippableCardView = ComponentView.extend({

		events: {
			"click .card": "onCardClick",
			"click .show-more-btn": "onShowMoreClick"
		},

		preRender: function() {
			this.model.set("_stage", -1);
			this.listenTo(Adapt, 'device:resize', this.onDeviceResize);

			this.model.calculateRatio();
			this._colSize = this.model.getColumnLayout(Adapt.device.screenSize);
			this.$el.addClass(this._colSize);

			_.bindAll(this, "onImageReady");
		},

		postRender: function() {
			this.$('.item-label').a11y_cntrl(false);
			this.$('.component-widget').imageready(this.onImageReady);
			this.$backFaces = this.$('.back');
			this.$cards = this.$('.card');
			this.checkTextOverlapp();
		},

		checkIfResetOnRevisit: function() {
			var isResetOnRevisit = this.model.get('_isResetOnRevisit');
			// If reset is enabled set defaults
			if (isResetOnRevisit) {
				this.model.reset(isResetOnRevisit);
			}
		},

		onImageReady: function() {
            this.setReadyStatus();
		},
		
		onCardClick: function(event) {
			event.preventDefault();

			var $elm = $(event.currentTarget);
			$elm.toggleClass('applyflip').addClass('visited');
			var index = $elm.data('item');
			
			var item = this.model.getItem(index);
			if (item._isActive === true) {
				this.model.setItemInactive(index);
				this.ctrlFocus(index);
			} else {
				this.model.setItemActive(index);
				this.ctrlFocus(index);
			}

			this.model.setItemVisited(index);
			this.model.checkCompletionStatus();
		},

		ctrlFocus: function(index) {
			var item = this.model.getItem(index),
				card = this.$cards.eq(index);
			if (item._isActive) {
				card.find('.title-inner, .body-inner').a11y_cntrl(!item._isOverlapping);
				card.find('.show-more-btn').a11y_cntrl(item._isOverlapping);
			} else {
				card.find('.title-inner, .body-inner, .show-more-btn').a11y_cntrl(false);
			}
		},

		onShowMoreClick: function(event) {
			event.preventDefault();
			event.stopPropagation();
			var index = $(event.currentTarget).data('item');
			var item = this.model.getItem(index);
			
			Adapt.trigger('notify:popup', {
				title: item.title,
				body: item.body
			});
		},

		checkTextOverlapp: function() {
			var items = this.model.get('_items');
			for (var i = 0; i < this.$backFaces.length; i++) {
				var item = this.$backFaces[i];
				var isOverlapping = (item.scrollHeight > item.offsetHeight);
				$(item).toggleClass('overlap', isOverlapping);
				items[i]._isOverlapping = isOverlapping;
				this.ctrlFocus(i);
			}
		},

		onDeviceResize: function() {
			// handle col-sizes
			var colSize = this.model.getColumnLayout(Adapt.device.screenSize);
			if (colSize != this._colSize) {
				this.$el.removeClass(this._colSize).addClass(colSize);
				this._colSize = colSize;
			}
			this.checkTextOverlapp();
		}

	});

	return FlippableCardView;

});