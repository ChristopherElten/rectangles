import { Rectangle } from "./rectangle";

class RectangleHelper {
    doesIntersect(r1: Rectangle, r2: Rectangle): boolean {
        // five cases of not intersecting...
        // 1. rect is to the right
        // 2. rect is to the left
        // 3. rect is on top
        // 4. rect is under
        // 5. rect is contained
        return !(
            r1.p2.x < r2.p1.x || // left
            r1.p1.x > r2.p2.x || // right
            r1.p1.y > r2.p2.y || // top
            r1.p2.y < r2.p1.y || // bottom
            this.doesR2ContainR1(r1, r2) || 
            this.doesR2ContainR1(r2, r1)
        );
    }
    
    
    private doesR2ContainR1(r1: Rectangle, r2: Rectangle): boolean {
        return r1.p1.x > r2.p1.x &&
            r1.p1.y > r2.p1.y &&
            r1.p2.x < r2.p2.x &&
            r1.p2.y < r2.p2.y;
    }
    
    isAdjacent(r1: Rectangle, r2: Rectangle): boolean {
        // share a side and the shared sides overlap
        // 4 possible cases, that are not exclusive
        // 1. left side is shared
        // 2. bottom side is shared
        // 3. right side is shared
        // 4. top side is shared
        
        // Another way to think of this problem is to break each of the rectangles down into all the lines they are composed of,
        //      And check if those lines overlap
        
        const [r1HLines, r2HLines]  = [r1.getHorizontalLines(), r2.getHorizontalLines()];
        const [r1VLines, r2VLines]  = [r1.getVerticalLines(), r2.getVerticalLines()];
    
        return (
            this.doesOverlap(...r1HLines[0], ...r2HLines[0]) || // bottom bar r1 and bottom bar r2
            this.doesOverlap(...r1HLines[0], ...r2HLines[1]) || // bottom bar r1 and top bar r2
            this.doesOverlap(...r1HLines[1], ...r2HLines[0]) || // top bar r1 and bottom bar r2
            this.doesOverlap(...r1HLines[1], ...r2HLines[1]) || // top bar r1 and top bar r2
            this.doesOverlap(...r1VLines[0], ...r2VLines[0]) || // left bar r1 and left bar r2
            this.doesOverlap(...r1VLines[0], ...r2VLines[1]) || // left bar r1 and right bar r2
            this.doesOverlap(...r1VLines[1], ...r2VLines[0]) || // right bar r1 and left bar r2
            this.doesOverlap(...r1VLines[1], ...r2VLines[1])    // right bar r1 and right bar r2
        );
    }
    
    private doesOverlap(l1A?: Point, l1B?: Point, l2A?: Point, l2B?: Point): boolean {
        // similar to does intersect,
        // four cases of no overlap between two lines
        // 1. Above
        // 2. Below
        // 3. To the left
        // 4. To the right
        return !(
            l1B.x < l2A.x ||
            l1A.x > l2B.x ||
            l1B.y < l2A.y ||
            l1A.y > l2B.y
        );
    }
}
