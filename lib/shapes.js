class Shape {
  constructor(color, width, height) {
    this.color = color;
    this.width = width || 300;
    this.height = height || 200;

  }
  // Method that returns an empty string by default
  getSVGElement() {
    return '';
  }
}

// Circle subclass
class Circle extends Shape {
  constructor(color, width, height) {
    super(color, width, height);
    this.radius = this.height / 2;
  }
  // Overrides the getSVGElement method to return an SVG circle element
  getSVGElement() {
    return `<circle cx="${this.width / 2}" cy="${this.height / 2}" r="${this.radius}" fill="${this.color}" />`;
  }
}

// Triangle subclass
class Triangle extends Shape {
  constructor(color, width, height) {
    super(color, width, height);
  }

  getSVGElement() {
    return `<polygon points="${this.width / 2},0 ${this.width},${this.height} 0,${this.height}" fill="${this.color}" />`;
  }
}

// Square subclass
class Square extends Shape {
  constructor(color, width, height) {
    super(color, width, height);
  }

  getSVGElement() {
    return `<rect x="0" y="0" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
