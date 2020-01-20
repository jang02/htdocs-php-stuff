class RenderManager {

    constructor(game) {
        this.game = game;

        let now;
        let delta;
        let interval;
        let then = new Date().getTime();

        let frames;
        let oldtime = 0;

        return (function loop(time){
            requestAnimationFrame(loop);

            interval = 1000 / Global.FRAME_RATE;
            now = new Date().getTime();
            delta = now - then;

            if (delta > interval) {
                // update time stuffs
                then = now - (delta % interval);

                // calculate the frames per second
                frames = 1000 / (time - oldtime);
                oldtime = time;

                // call the fn
                // and pass current fps to it

                // TODO calculate delta
                RenderManager.update(game, delta / 1000);
                RenderManager.render(game, game.canvas);
            }
        }(0));
    }
    /*constructor() {
        this.start();
    }

    start() {
        let canvas = document.getElementById("canvas");

        console.log("frame rate = " + Global.FRAME_RATE());


        setInterval(this.update(), 1000.0 / Global.FRAME_RATE());
        setInterval(this.render(canvas), 1000.0 / Global.FRAME_RATE());
    }*/

    static render(game, canvas) {
        let graphics = canvas.getContext("2d");

        //graphics.clearRect(0, 0, canvas.width, canvas.height);

        graphics.fillStyle = "#000000";
        graphics.fillRect(0, 0, canvas.width, canvas.height);

        /*graphics.beginPath();
        graphics.arc(95 + Math.random() * 600, 50 + Math.random() * 600, 40 + Math.random() * 70, 0, 2 * Math.PI);
        graphics.stroke();*/

        game.screen.render(graphics);
    }

    static update(game, delta) {
        game.screen.update(delta);
    }
}