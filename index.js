// Your code here
class Polygon {
    constructor(arr) {
        this.arr = arr
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        return this.arr.reduce((sum, curr) => sum += curr, 0)
    }
}

class Triangle extends Polygon{
    get isValid() {
        const side1 = this.arr[0]
        const side2 = this.arr[1]
        const side3 = this.arr[2]
        return side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2
    }
}

class Square extends Polygon {
    get isValid() {
        const side1 = this.arr[0]
        const side2 = this.arr[1]
        const side3 = this.arr[2]
        const side4 = this.arr[3]
        return side1 === side2 && side2 === side3 && side3 === side4 && side4 === side1 
    }

    get area() {
        return this.arr[0] * this.arr[1]
    }
}

const polygon = new Polygon( [ 5, 5, 5 ] )
console.log(polygon.countSides)
console.log(polygon.perimeter)