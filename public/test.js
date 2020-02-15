import { Rectangle } from "./rectangle.js";
import { RectangleHelper } from "./rectangleHelper.js";
// testcases
// ---
console.log("Running tests...");
const rectangleHelper = new RectangleHelper();
let r1, r2;
// intersection
// --
// basecase - success
r1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
r2 = new Rectangle({ x: 0, y: 0 }, { x: 1, y: 1 });
console.assert(rectangleHelper.doesIntersect(r1, r2), "Fail");
// basecase - failure // left
r1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
r2 = new Rectangle({ x: 3, y: 0 }, { x: 4, y: 1 });
console.assert(!rectangleHelper.doesIntersect(r1, r2), "Fail");
// basecase - failure // right
r1 = new Rectangle({ x: 5, y: 0 }, { x: 6, y: 2 });
r2 = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 1 });
console.assert(!rectangleHelper.doesIntersect(r1, r2), "Fail");
// basecase - failure // ontop
// basecase - failure // below
// edgecase - single point of intersection
// edgecase - adjacent rectangles (large amount of intersections)
// edgecase - duplicate rectangles (large amount of intersections)
// edgecase - contained rectangle
// get intersection points
// --
// basecase - success // intersection, no adjacency
// basecase - success // adjacency
// basecase - success // multiple adjacency
// basecase - failure // containment
// basecase - failure // no intersection
// edgecase - single point of intersection
// edgecase - adjacent rectangles (large amount of intersections)
// edgecase - duplicate rectangles (large amount of intersections)
// edgecase - contained rectangle
// containment
// --
// basecase - success
// basecase - failure (due to intersection)
// basecase - failure (due to sharing no points)
// edgecase - single point of intersection
// edgecase - adjacent rectangles (large amount of intersections)
// edgecase - duplicate rectangles (large amount of intersections)
// adjacency
// --
// basecase - success // proper
// basecase - success // sub-line
// basecase - success // partial
// basecase - success // multiple adjacent sides (1)
// basecase - success // multiple adjacent sides (2)
// basecase - failure with intersection
// basecase - failure without intersection or containment // left
// basecase - failure with containment
// edgecase - single point of intersection
// edgecase - duplicate rectangles (all adjacent sides)
