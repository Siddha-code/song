song = " ";
function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIEDO);
    video.hide();
}
function draw() {
    image(video,0,0,600,500);
}
function preload() {
    song = loadsound("music.mp3")
}
function play() {
    song.play();
}