import { Rectangle } from "./rectangle";

// testcases
// ---

// intersection
// --
// basecase - success
// basecase - failure // left
// basecase - failure // right
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
