define([
	'core/js/adapt',
	'core/js/models/itemsModel'
], function(Adapt, Itemsmodel) {

	var FlippableCardModel = Itemsmodel.extend({

		calculateRatio: function() {
			var w = this.get('_width');
			var h = this.get('_height');
			var ratio = 100 * h / w;
			this.set('_ratio', ratio);
		},

		getColumnLayout: function(screenSize) {
			var columns = this.get('_columns');
			var colSize = columns['_'+screenSize];
			return "fc-cols-" + colSize;
		}

	});

	return FlippableCardModel;

});