import * as PIXI from '/atestat/scripts/pixi.mjs';
var app, backgroundTexture, background, board_bg_texture, board_bg, board_bg_texture, border_texture, border, zed_test_texture, zed_test;

function setSizesAndPozitions()
{
    background.width = app.renderer.width;
    background.height = app.renderer.height;

    board_bg.x = app.renderer.width / 4 ;
    board_bg.y = app.renderer.height / 2;

    board_bg.anchor.x = 0.5;
    board_bg.anchor.y = 0.5;

    border.x = app.renderer.width / 4 ;
    border.y = app.renderer.height / 2;

    border.anchor.x = 0.5;
    border.anchor.y = 0.5;

    zed_test.x = app.renderer.width / 2;
    zed_test.y = app.renderer.height / 2;

    zed_test.anchor.x = 0.5;
    zed_test.anchor.y = 0.5;
}

function setScale()
{
    const scaleBoard = 3.4;
    board_bg.width /= scaleBoard;
    board_bg.height /= scaleBoard;
    border.width /= scaleBoard;
    border.height /= scaleBoard;
    zed_test.width /= 3;
    zed_test.height /= 3;
}

var boardCells=[]

function drawSquareyBoard()
{
    // Define board dimensions
    const sqaureyBoardWidth = 6; // 6 columns
    const squareyBoardHeight = 12; // 12 rows
    const cellSize = 70; // Size of each cell

    // Create the board
    for (let row = 0; row < squareyBoardHeight; row++) {
        for (let col = 0; col < sqaureyBoardWidth; col++) {
            const cell = new PIXI.Graphics();
            cell.rect(0, 0, cellSize, cellSize);
            cell.fill(0x2b2d66);
            cell.stroke({ width: 2, color: 0x79a5d1 });
            // Position the cell
            cell.x = col * cellSize + board_bg.x - board_bg.width/2 + 25;
            cell.y = row * cellSize + board_bg.y - board_bg.height/2;

            app.stage.addChild(cell);
            boardCells.push(cell);
            //break;
        }
        //break;
    }
}


async function main() {
    console.log("Hello from Zed!");

    app=new PIXI.Application();
    //Table pixel (chenar): (593, 379) | (692, 558)
    await app.init({ resizeTo: window });
    document.body.appendChild(app.canvas);

    backgroundTexture = await PIXI.Assets.load('/atestat/assets/background_beta.png');
    background = new PIXI.Sprite(backgroundTexture);

    app.stage.addChild(background);

    board_bg_texture = await PIXI.Assets.load('/atestat/assets/board.png');
    board_bg = new PIXI.Sprite(board_bg_texture);

    app.stage.addChild(board_bg);

    border_texture = await PIXI.Assets.load('/atestat/assets/border.png');
    border = new PIXI.Sprite(border_texture);
    app.stage.addChild(border);


    zed_test_texture = await PIXI.Assets.load('/atestat/assets/zed_test.png');
    zed_test = new PIXI.Sprite(zed_test_texture);
    app.stage.addChild(zed_test);
    setSizesAndPozitions();
    setScale();
    drawSquareyBoard();
    // Listen for frame updates to rotate the Zed sprite
    app.ticker.add(() => {
        zed_test.rotation += 0.01;
    });
}

window.onload = function() {
    main();
};

window.addEventListener('resize', function(event) {
    console.log("I resized!");
    app.renderer.resize(window.innerWidth, window.innerHeight);
    setSizesAndPozitions();
}, true);