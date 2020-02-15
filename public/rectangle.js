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
    getPointsFromRectangle() {
        const res = [];
        const set = new Set();
        // bottom and top bar
        for (let i = this.p1.x; i <= this.p2.x; i++) {
            addToRes({ x: i, y: this.p1.y });
            addToRes({ x: i, y: this.p2.y });
        }
        // left and right bar
        for (let i = this.p1.y; i <= this.p2.y; i++) {
            addToRes({ x: this.p1.x, y: i });
            addToRes({ x: this.p2.x, y: i });
        }
        function addToRes(p) {
            const key = [p.x, p.y].join('');
            if (!set.has(key)) {
                set.add(key);
                res.push(p);
            }
        }
        return res;
    }
}
