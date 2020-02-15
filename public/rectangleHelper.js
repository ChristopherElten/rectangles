export class RectangleHelper {
    doesIntersect(r1, r2) {
        // five cases of not intersecting...
        // 1. rect is to the right
        // 2. rect is to the left
        // 3. rect is on top
        // 4. rect is under
        // 5. rect is contained
        return !(r1.p2.x < r2.p1.x || // left
            r1.p1.x > r2.p2.x || // right
            r1.p1.y > r2.p2.y || // top
            r1.p2.y < r2.p1.y || // bottom
            this.doesContain(r1, r2));
    }
    getIntersectionPoints(r1, r2) {
        if (!this.doesIntersect(r1, r2))
            return null;
        const r1Points = r1.getPointsFromRectangle();
        const r2Points = r2.getPointsFromRectangle();
        // the maximum size of the array required is the max x and max y
        const maxX = Math.max(r1.p2.x, r2.p2.x) + 1;
        const maxY = Math.max(r1.p2.y, r2.p2.y) + 1;
        const matrix = new Array(maxX).fill(0).map(el => new Array(maxY).fill(0));
        for (let i = 0; i < r1Points.length; i++) {
            const p = r1Points[i];
            matrix[p.x][p.y] += 1;
        }
        for (let i = 0; i < r2Points.length; i++) {
            const p = r2Points[i];
            matrix[p.x][p.y] += 1;
        }
        // Loop through matrix and collect any values that have intersected twice
        const res = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 2)
                    res.push({ x: i, y: j });
            }
        }
        return res;
    }
    doesContain(r1, r2) {
        return this.doesR2ContainR1(r1, r2) || this.doesR2ContainR1(r2, r1);
    }
    doesR2ContainR1(r1, r2) {
        return r1.p1.x > r2.p1.x &&
            r1.p1.y > r2.p1.y &&
            r1.p2.x < r2.p2.x &&
            r1.p2.y < r2.p2.y;
    }
    isAdjacent(r1, r2) {
        // share a side and the shared sides overlap
        // 4 possible cases, that are not exclusive
        // 1. left side is shared
        // 2. bottom side is shared
        // 3. right side is shared
        // 4. top side is shared
        // Another way to think of this problem is to break each of the rectangles down into all the lines they are composed of,
        //      And check if those lines overlap
        const [r1HLines, r2HLines] = [r1.getHorizontalLines(), r2.getHorizontalLines()];
        const [r1VLines, r2VLines] = [r1.getVerticalLines(), r2.getVerticalLines()];
        return (this.doesOverlap(...r1HLines[0], ...r2HLines[0]) || // bottom bar r1 and bottom bar r2
            this.doesOverlap(...r1HLines[0], ...r2HLines[1]) || // bottom bar r1 and top bar r2
            this.doesOverlap(...r1HLines[1], ...r2HLines[0]) || // top bar r1 and bottom bar r2
            this.doesOverlap(...r1HLines[1], ...r2HLines[1]) || // top bar r1 and top bar r2
            this.doesOverlap(...r1VLines[0], ...r2VLines[0]) || // left bar r1 and left bar r2
            this.doesOverlap(...r1VLines[0], ...r2VLines[1]) || // left bar r1 and right bar r2
            this.doesOverlap(...r1VLines[1], ...r2VLines[0]) || // right bar r1 and left bar r2
            this.doesOverlap(...r1VLines[1], ...r2VLines[1]) // right bar r1 and right bar r2
        );
    }
    doesOverlap(l1A, l1B, l2A, l2B) {
        // similar to does intersect,
        // four cases of no overlap between two lines
        // 1. Above
        // 2. Below
        // 3. To the left
        // 4. To the right
        return !(l1B.x < l2A.x ||
            l1A.x > l2B.x ||
            l1B.y < l2A.y ||
            l1A.y > l2B.y);
    }
}
