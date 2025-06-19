const myFirstCube = new Cube(0, 3, 0, 3, 10, 13,'red')
function Cube (x1, x2, y1, y2, z1, z2, c) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.z1 = z1;
    this.z2 = z2;
    this.color = c;
}
function createVertices (x1, x2, y1, y2, z1, z2) {
    var v1 = [x1, y1, z1]
    var v2 = [x2, y1, z1]
    var v3 = [x1, y1, z2]
    var v4 = [x1, y2, z1]
    var v5 = [x2, y2, z1]
    var v6 = [x1, y2, z2]
    var v7 = [x2, y1, z2]
    var v8 = [x2, y2, z2]
    return [v1, v2, v3, v4, v5, v6, v7, v8];
    
}
console.log(myFirstCube.color);
console.log(myFirstCube)
console.log(createVertices (myFirstCube.x1, myFirstCube.x2, myFirstCube.y1, myFirstCube.y2, myFirstCube.z1, myFirstCube.z2))