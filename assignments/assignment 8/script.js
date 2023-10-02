const runningMan = document.getElementById('runMan');
const tempInput = document.getElementById('tempInput');
const mer = document.querySelector('.mer');

let currentPosition = 0;
let isWalking = true;
let isImagesLoaded = false;
let isAnimationStarted = false;

const runImage = new Image();
runImage.src = 'pics/run.png';

const walkImage = new Image();
walkImage.src = 'pics/walk.png';

runImage.onload = walkImage.onload = function() {
    isImagesLoaded = true;
};

walkMan.addEventListener('click', function() {
    if (!isAnimationStarted && isImagesLoaded) {
        startAnimation();
        isAnimationStarted = true;
    }
});

function startAnimation() {
    setInterval(() => {
        if (isWalking) {
            currentPosition += 10;
        } else {
            currentPosition -= 1;
        }

        walkMan.style.marginLeft = `${currentPosition}%`;
        walkMan.src = isWalking ? runImage.src : walkImage.src;
        isWalking = !isWalking;

        if (currentPosition >= 100) {
            currentPosition = -100;
        }
    }, 100);
}

function increaseTemp() {
    const temp = parseFloat(tempInput.value);
    if (!isNaN(temp)) {
        const maxHeight = 10000;
        const merHeight = (temp / maxHeight) * 100;
        mer.style.height = `${merHeight}%`;
    }
}