interface Point {
    x: number;
    y: number;
}

class Rectangle {
    p1: Point; // bottom left
    p2: Point; // top right

    constructor(p1: Point, p2: Point) {
        this.p1 = p1;
        this.p2 = p2;
    }

    getHorizontalLines(): Point [][] {
        // get the top and bottom horizontal lines, as an array of points
        return [
            [
                { x: this.p1.x, y: this.p1.y },
                { x: this.p2.x, y: this.p1.y }
            ],
            [
                { x: this.p1.x, y: this.p2.y },
                { x: this.p2.x, y: this.p2.y }
            ],
        ];
    }
    
    getVerticalLines(): Point [][] {
        // get the left and right vertical lines, as an array of points
        return [
            [
                { x: this.p1.x, y: this.p1.y },
                { x: this.p1.x, y: this.p2.y }
            ],
            [
                { x: this.p2.x, y: this.p1.y },
                { x: this.p2.x, y: this.p2.y }
            ],
        ];
    }
}