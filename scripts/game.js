import * as PIXI from '/atestat/scripts/pixi.mjs';

async function main() {
    console.log("Hello from Zed!");

    //Table pixel (chenar): (593, 379) | (692, 558)

    var app = new PIXI.Application();
    await app.init({ resizeTo: window });
    document.body.appendChild(app.canvas);

    const backgroundTexture = await PIXI.Assets.load('/atestat/assets/background_beta.png');
    const background = new PIXI.Sprite(backgroundTexture);

    background.width = app.renderer.width;
    background.height = app.renderer.height;

    app.stage.addChild(background);

    const scaleBoard = 3.4;

    const board_bg_texture = await PIXI.Assets.load('/atestat/assets/board.png');
    const board_bg = new PIXI.Sprite(board_bg_texture);
    board_bg.width /= scaleBoard;
    board_bg.height /= scaleBoard;
    console.log(app.renderer.width, app.renderer.height);
    board_bg.x = app.renderer.width / 4 ;
    board_bg.y = app.renderer.height / 2;
    
    board_bg.anchor.x = 0.5;
    board_bg.anchor.y = 0.5;
    app.stage.addChild(board_bg);

    const border_texture = await PIXI.Assets.load('/atestat/assets/border.png');
    const border = new PIXI.Sprite(border_texture);
    border.x = app.renderer.width / 4 ;
    border.y = app.renderer.height / 2;
    border.width /= scaleBoard;
    border.height /= scaleBoard;
    border.anchor.x = 0.5;
    border.anchor.y = 0.5;
    app.stage.addChild(border);


    const zed_test_texture = await PIXI.Assets.load('/atestat/assets/zed_test.png');
    const zed_test = new PIXI.Sprite(zed_test_texture);
    zed_test.x = app.renderer.width / 2;
    zed_test.y = app.renderer.height / 2;
    zed_test.width /= 3;
    zed_test.height /= 3;
    zed_test.anchor.x = 0.5;
    zed_test.anchor.y = 0.5;
    app.stage.addChild(zed_test);

    // Listen for frame updates to rotate the Zed sprite
    app.ticker.add(() => {
        zed_test.rotation += 0.01;
    });
}

window.onload = function() {
    main();
};
