import { Rectangle } from "./rectangle.js";
import { RectangleHelper } from "./rectangleHelper.js";

let rAxInputElement, rAyInputElement, rBxInputElement, rByInputElement;
let r1: Rectangle, r2: Rectangle;
let rectangleHelper = new RectangleHelper();

let domInit = (): void => {
    r1 = new Rectangle({ x: 0, y: 0}, { x: 100, y: 100} );
    r2 = new Rectangle({ x: 50, y: 50}, { x: 150, y: 150} );

    rAxInputElement = document.getElementById('rAx');
    rAxInputElement.addEventListener('change', (e) => {
        r1.p1.x = e.target.valueAsNumber;
        draw(r1, r2);
    });

    rAyInputElement = document.getElementById('rAy');
    rAyInputElement.addEventListener('change', (e) => {
        r1.p1.y = e.target.valueAsNumber;
        draw(r1, r2);
    });
    
    rBxInputElement = document.getElementById('rBx');
    rBxInputElement.addEventListener('change', (e) => {
        r1.p2.x = e.target.valueAsNumber
        draw(r1, r2);
    });

    rByInputElement = document.getElementById('rBy');
    rByInputElement.addEventListener('change', (e) => {
        r1.p2.y = e.target.valueAsNumber;
        draw(r1, r2);
    });
}


let draw = (r1?, r2?): void => {
    if (r1 === null || r1 === undefined) r1 = new Rectangle({ x: 0, y: 0}, { x: 100, y: 100} );
    if (r2 === null || r2 === undefined) r2 = new Rectangle({ x: 50, y: 50}, { x: 150, y: 150} );

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        // fill rect api takes: x, y, w, h as params
        // we have two points, bottom left, and top right
        // therefore, the w and h can be calculated as the delta of x and y
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(r1.p1.x, r1.p1.y, r1.p2.x - r1.p1.x, r1.p2.y - r1.p1.y);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(r2.p1.x, r2.p1.y, r2.p2.x - r2.p1.x, r2.p2.y - r2.p1.y);
        console.log(rectangleHelper.doesIntersect(r1, r2));
        console.log(rectangleHelper.isAdjacent(r1, r2));
        console.log(rectangleHelper.doesContain(r1, r2));
    }
}

domInit();
draw();