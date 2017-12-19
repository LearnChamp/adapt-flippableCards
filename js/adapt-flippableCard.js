define([
	'core/js/adapt',
	'./flippableCardView',
	'./flippableCardModel'
], function(Adapt, FlippableCardView, FlippableCardModel) {

	Adapt.register('flippableCard', {
		view: FlippableCardView,
		model: FlippableCardModel
	});

});
