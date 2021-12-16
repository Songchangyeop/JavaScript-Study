btn = document.querySelector('.btn').addEventListener('click', function (e) {
	console.log('다공 사랑해');
});

var obj = {
	outer: function () {
		console.log(this);
	},
};

console.log(this);

obj.outer();
