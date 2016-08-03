var paper = require('paper');
paper.setup(new paper.Canvas(1024, 768));

var layer = paper.project.activeLayer;

var values = {
	count: 34,
	points: 32
};

initialize();

function initialize() {
	for (var i = 0; i < values.count; i++) {
		var offset = new paper.Point(20 + 10 * i, 0);
		var path = new paper.Path();
		path.fillColor = i % 2 ? 'red' : 'black';
		path.closed = true;

		var l = offset.length;
		for (var j = 0; j < values.points * 2; j++) {
			offset.angle += 360 / values.points;
			var vector = offset.normalize(l * (j % 2 ? 0.1 : -0.1));
			path.add(offset.add(vector));
		}
		path.smooth();
		layer.insertChild(0, path);
	}
	layer.fitBounds(paper.view.bounds);
}

