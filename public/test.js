import { Rectangle } from "./rectangle.js";
import { RectangleHelper } from "./rectangleHelper.js";
// testcases
// ---
console.log("Running tests...");
console.log("------");
console.assert(false, "Example of a failed test message...");
console.assert(true, "Successful assertions will not log.");
const rectangleHelper = new RectangleHelper();
let r1, r2, res;
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
r1 = new Rectangle({ x: 5, y: 2 }, { x: 6, y: 3 });
r2 = new Rectangle({ x: 0, y: 0 }, { x: 6, y: 1 });
console.assert(!rectangleHelper.doesIntersect(r1, r2), "Fail");
// basecase - failure // below
r1 = new Rectangle({ x: 0, y: 0 }, { x: 6, y: 1 });
r2 = new Rectangle({ x: 5, y: 2 }, { x: 6, y: 3 });
console.assert(!rectangleHelper.doesIntersect(r1, r2), "Fail");
// edgecase - single point of intersection
r1 = new Rectangle({ x: 0, y: 0 }, { x: 6, y: 1 });
r2 = new Rectangle({ x: 6, y: 1 }, { x: 7, y: 3 });
console.assert(rectangleHelper.doesIntersect(r1, r2), "Fail");
// edgecase - adjacent rectangles (large amount of intersections)
r1 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 3 });
r2 = new Rectangle({ x: 3, y: 0 }, { x: 5, y: 3 });
console.assert(rectangleHelper.doesIntersect(r1, r2), "Fail");
// edgecase - duplicate rectangles (large amount of intersections)
r1 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 3 });
r2 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 3 });
console.assert(rectangleHelper.doesIntersect(r1, r2), "Fail");
// edgecase - contained rectangle
r1 = new Rectangle({ x: 0, y: 0 }, { x: 10, y: 10 });
r2 = new Rectangle({ x: 2, y: 2 }, { x: 3, y: 3 });
console.assert(!rectangleHelper.doesIntersect(r1, r2), "Fail");
// get intersection points
// --
// basecase - success // intersection, no adjacency
r1 = new Rectangle({ x: 0, y: 1 }, { x: 4, y: 4 });
r2 = new Rectangle({ x: 1, y: 0 }, { x: 3, y: 7 });
// 0: {x: 1, y: 1}
// 1: {x: 1, y: 4}
// 2: {x: 3, y: 1}
// 3: {x: 3, y: 4}
res = rectangleHelper.getIntersectionPoints(r1, r2);
console.assert(res.length === 4, "Fail");
console.assert(res[0].x === 1, "Fail");
console.assert(res[0].y === 1, "Fail");
console.assert(res[1].x === 1, "Fail");
console.assert(res[1].y === 4, "Fail");
console.assert(res[2].x === 3, "Fail");
console.assert(res[2].y === 1, "Fail");
console.assert(res[3].x === 3, "Fail");
console.assert(res[3].y === 4, "Fail");
// basecase - success // adjacency
r1 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 3 });
r2 = new Rectangle({ x: 3, y: 0 }, { x: 5, y: 3 });
res = rectangleHelper.getIntersectionPoints(r1, r2);
console.assert(res.length === 4, "Fail");
// basecase - success // multiple adjacency
r1 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 3 });
r2 = new Rectangle({ x: 2, y: 0 }, { x: 3, y: 3 });
res = rectangleHelper.getIntersectionPoints(r1, r2);
console.assert(res.length === 6, "Fail");
// basecase - failure // containment
r1 = new Rectangle({ x: 0, y: 0 }, { x: 10, y: 10 });
r2 = new Rectangle({ x: 2, y: 2 }, { x: 3, y: 3 });
res = rectangleHelper.getIntersectionPoints(r1, r2);
console.assert(res === null, "Fail");
// basecase - failure // no intersection
r1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
r2 = new Rectangle({ x: 3, y: 0 }, { x: 4, y: 1 });
res = rectangleHelper.getIntersectionPoints(r1, r2);
console.assert(res === null, "Fail");
// edgecase - single point of intersection
r1 = new Rectangle({ x: 0, y: 0 }, { x: 6, y: 1 });
r2 = new Rectangle({ x: 6, y: 1 }, { x: 7, y: 3 });
res = rectangleHelper.getIntersectionPoints(r1, r2);
console.assert(res.length === 1, "Fail");
console.assert(res[0].x === 6, "Fail");
console.assert(res[0].y === 1, "Fail");
// edgecase - duplicate rectangles (large amount of intersections)
r1 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 3 });
r2 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 3 });
res = rectangleHelper.getIntersectionPoints(r1, r2);
console.assert(res.length === 12, "Fail");
// edgecase - contained rectangle
r1 = new Rectangle({ x: 0, y: 0 }, { x: 10, y: 10 });
r2 = new Rectangle({ x: 2, y: 2 }, { x: 3, y: 3 });
res = rectangleHelper.getIntersectionPoints(r1, r2);
console.assert(res === null, "Fail");
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
