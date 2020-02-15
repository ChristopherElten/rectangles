export class Rectangle {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    getHorizontalLines() {
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
    getVerticalLines() {
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
