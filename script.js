var almost = document.querySelector('.almost');
var almostLetters = almost.querySelectorAll('span');
var never = document.querySelector('.never');
var neverLetters = Array.prototype.slice.call(never.querySelectorAll('span'));
var neverLeft = neverLetters.slice(0, 5);
var neverRight = neverLetters.slice(5);
var images = document.querySelector('.images');
var image = images.querySelector('img');
var zoom = 1.2;

TweenMax.set(almostLetters, {autoAlpha: 0, y: 30});
TweenMax.set(almost, {autoAlpha: 1});
TweenMax.staggerTo(almostLetters, 1.5, {ease: Expo.easeOut, autoAlpha: 1, y: 0}, 0.1, function() {
	TweenMax.to(almost, 1, {ease: Expo.easeIn, autoAlpha: 0, y: -30, onComplete: function () {
		TweenMax.set(neverLeft, {autoAlpha: 0, x: -400});
		TweenMax.set(neverRight, {autoAlpha: 0, x: 400});
		TweenMax.set(never, {autoAlpha: 1});
		TweenMax.staggerTo(neverLeft.reverse(), 1, {ease: Expo.easeOut, autoAlpha: 1, x: 0}, 0.1);
		TweenMax.staggerTo(neverRight, 1, {ease: Expo.easeOut, autoAlpha: 1, x: 0}, 0.1);

		TweenMax.set(images, {autoAlpha: 0.8});
		TweenMax.set(image, {scale: 0});
		TweenMax.to(image, 1.5, {scale: zoom, rotation: 720, onComplete: function() {
			window.requestAnimationFrame(animate);
		}})
		
	}});
});

function animate() {
	zoom += 0.0005;
	TweenMax.set(image, {scale: zoom});
	window.requestAnimationFrame(animate);
}