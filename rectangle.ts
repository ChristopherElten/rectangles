export interface Point {
    x: number;
    y: number;
}

export class Rectangle {
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

    getPointsFromRectangle() {
        const res = [];
        const set = new Set();
        // bottom and top bar
        for(let i = this.p1.x; i <= this.p2.x; i++) {
            addToRes({ x:i, y: this.p1.y});
            addToRes({ x:i, y: this.p2.y});
        }
    
        // left and right bar
        for(let i = this.p1.y; i <= this.p2.y; i++) {
            addToRes({ x:this.p1.x, y:i });
            addToRes({ x:this.p2.x, y:i });
        }
    
        function addToRes(p) {
            const key = [p.x, p.y].join('');
            if (!set.has(key)) {
                set.add(key);
                res.push(p)
            }
        }
    
        return res;
    }
}