var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
  makeRect(0,0, 800,800, "skyblue")
  makeCircle(185,15,23, "yellow") 
  makeRect(0,75, 200, 35, "green")
  makeEllipse(75,8, 20, 5,"white")
   makeEllipse(15,15, 20, 5,"white")
    makeEllipse(120,15, 20, 5,"white")
    makeRect
} 

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
     makeRect(0,0, 800,800, "#c69979")
      makeCircle(105,75,23, "yellow") 
        makeRect(0,75, 200, 55, "#d1a559")
} 


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
     makeRect(0,0, 800,800, "MidnightBlue")
      makeCircle(175.5,45 ,13, "white") 
        makeRect(0,75, 200, , "white", 0.90)
        makeCircle(75,56,1,"white",.99)
        makeCircle(15,24,1,"white",.99)
        makeCircle(48,33,1,"white",.99)
        makeCircle(36,45,1,"white",.99)
        makeCircle(66,29,1,"white",.99)
        makeCircle(120,24,1,"white",.99)
        makeCircle(107,42,1,"white",.99)
        makeCircle(97,66,1,"white",.99)
         makeCircle(65,46,1,"white",.99)
        makeCircle(75,24,1,"white",.99)
        makeCircle(68,93,1,"white",.99)
        makeCircle(26,35,1,"white",.99)
        makeCircle(86,29,1,"white",.99)
        makeCircle(150,224,1,"white",.99)
        makeCircle(167,32,1,"white",.99)
        makeCircle(27,56,1,"white",.99)
        makeCircle(45,36,1,"white",.99)
        makeCircle(75,24,1,"white",.99)
        makeCircle(48,33,1,"white",.99)
        makeCircle(26,65,1,"white",.99)
        makeCircle(146,29,1,"white",.99)
        makeCircle(160,74,1,"white",.99)
        makeCircle(167,32,1,"white",.99)
        makeCircle(52,66,1,"white",.99)
         makeCircle(45,46,1,"white",.99)
        makeCircle(45,34,1,"white",.99)
        makeCircle(78,23,1,"white",.99)
        makeCircle(26,55,1,"white",.99)
        makeCircle(136,29,1,"white",.99)
        makeCircle(150,24,1,"white",.99)
        makeCircle(117,52,1,"white",.99)
        makeCircle(67,26,1,"white",.99)
 
        makeCircle(45,56,1,"white",.99)
        makeCircle(35,24,1,"white",.99)
        makeCircle(38,23,1,"white",.99)
        makeCircle(52,25,1,"white",.99)
        makeCircle(86,59,1,"white",.99)
        makeCircle(1,44,1,"white",.99)
        makeCircle(10,2,1,"white",.99)
        makeCircle(94,6,1,"white",.99)
         makeCircle(45,46,1,"white",.99)
        makeCircle(74,44,1,"white",.99)
        makeCircle(58,53,1,"white",.99)
        makeCircle(56,55,1,"white",.99)
        makeCircle(36,29,1,"white",.99)
        makeCircle(10,4,1,"white",.99)
        makeCircle(1,3,1,"white",.99)
        makeCircle(22,52,1,"white",.99)
        makeCircle(42,46,1,"white",.99)
        makeCircle(75, 4,1,"white",.99)
        makeCircle(18,3,1,"white",.99)
        makeCircle(26,25,1,"white",.99)
        makeCircle(16,39,1,"white",.99)
        makeCircle(10,7,1,"white",.99)
        makeCircle(17,32,1,"white",.99)
        makeCircle(12,2,1,"white",.99)
         makeCircle(25,36,1,"white",.99)
        makeCircle(43,14,1,"white",.99)
        makeCircle(78,13,1,"white",.99)
        makeCircle(23,65,1,"white",.99)
        makeCircle(156,99,1,"white",.99)
        makeCircle(150,34,1,"white",.99)
        makeCircle(11,52,1,"white",.99)
        makeCircle(26,12,"white",.99)
        
        makeCircle(175,80,24,"white")
        makeCircle(178,76,1,"black")
        makeCircle(178,66,1,"black")
        makeCircle(178,86,1,"black")
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    var myNumber = Math.random()
    if(myNumber < 0.33){
        createFirstScene()
    }else if(myNumber < 0.67) {
    createSecondScene()
    }else{
        createThirdScene()
    }
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    
    
    // Else, call the function to create your third scene.
    
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}