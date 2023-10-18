function calculate_area_circle(radius) {
    if (radius < 0) {
      return 'Radius cannot be negative.';
    }
    let area = Math.PI * Math.pow(radius, 2);
    return area;
  }
  let radius = 5;
  let area = calculate_area_circle(radius);
  console.log(`The area of the circle with a radius of ${radius} is ${area}`);