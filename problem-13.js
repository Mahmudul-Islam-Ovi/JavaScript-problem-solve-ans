

function sumPolygon(n) {

    if (n >2) {
        polygon = (n - 2) * 180;
        return polygon;
    } else {
        return "Polygon will always be greater than 2";
    }
  
}

console.log(sumPolygon(3));