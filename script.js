var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);

const space = 0.3;
const height = 1;
const width = 0.5;
const color = Desmos.Colors.BLUE;


function midpoint(P1, P2){
  return {x: (P1.x + P2.x)/2, y: (P1.y + P2.y)/2};
}

function distance(P1, P2){
  return Math.sqrt((P2.x - P1.x) ** 2 + (P2.y - P1.y) ** 2);
}

function convertIntoCartesianCoordinate(P){
  return `(${P.x}, ${P.y})`;
}

function A(previous){
    let A11 = {
           x: previous.x + space,
           y: previous.y
       };

    let A13 = {
      x: width + A11.x,
      y: 0
    };

    let A12 = {
      x: midpoint(A11, A13).x,
      y: height
    };

    let A21 = midpoint(A11, A12);
    let A22 = midpoint(A12, A13);

    calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(A11)}, ${convertIntoCartesianCoordinate(A12)})`, color:color });
    calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(A12)}, ${convertIntoCartesianCoordinate(A13)})`, color:color });
    calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(A21)}, ${convertIntoCartesianCoordinate(A22)})`, color:color });

    return {x: A22.x, y: 0};
  }

  function B(previous){
      let B11 = {
             x: previous.x + space,
             y: previous.y
         };

      let B12 = {
        x: B11.x,
        y: height
      };

      let B13 = {
        x: B11.x,
        y: 1/2 * B12.y
      };


      calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(B11)}, ${convertIntoCartesianCoordinate(B12)})`, color:color });
      calculator.setExpression({ latex: `(x - ${B11.x}) = \\sqrt{${1/4 * distance(B11, B12)}^2 - (y - ${1/4 * distance(B11, B12)})^2}`, color:color });
      calculator.setExpression({ latex: `(x - ${B11.x}) = \\sqrt{${1/4 * distance(B11, B12)}^2 - (y - ${3/4 * distance(B11, B12)})^2}`, color:color });

      return {x: B11.x + 1/4 * distance(B11, B12), y: 0};
    }

    function H(previous){
        let H11 = {
               x: previous.x + space,
               y: previous.y
           };

        let H12 = {
          x: H11.x,
          y: height
        };

        let H21 = {
          x: H11.x + width,
          y: H11.y
        };

        let H22 = {
          x: H21.x,
          y: height
        };

        let H31 = {
          x: H11.x,
          y: midpoint(H11, H12).y
        }

        let H32 = {
          x: H22.x,
          y: midpoint(H21, H22).y
        }

        calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(H11)}, ${convertIntoCartesianCoordinate(H12)})`, color:color });
        calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(H21)}, ${convertIntoCartesianCoordinate(H22)})`, color:color });
        calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(H31)}, ${convertIntoCartesianCoordinate(H32)})`, color:color });

        return {x: H21.x, y: 0};
      }


      function M(previous){
        let M11 = {
          x: previous.x + space,
          y: previous.y
        };

        let M12 = {
          x: M11.x,
          y: previous.y + height
        };

        let M21 = {
          x: M11.x + width,
          y: M11.y
        };

        let M22 = {
          x: M21.x,
          y: M21.y + height
        };

        let M13 = {
          x: midpoint(M11, M21).x,
          y: midpoint(M11, M12).y
        };

        let M23 = {
          x: midpoint(M11, M21).x,
          y: midpoint(M11, M12).y
        };


        calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(M11)}, ${convertIntoCartesianCoordinate(M12)})`, color:color });
        calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(M21)}, ${convertIntoCartesianCoordinate(M22)})`, color:color });
        calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(M12)}, ${convertIntoCartesianCoordinate(M13)})`, color:color });
        calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(M22)}, ${convertIntoCartesianCoordinate(M23)})`, color:color });

        return {x: M21.x, y: M21.y};
      }

      function I(previous){
        let I11 = {
          x: previous.x + (width - 0.2),
          y: previous.y
        };

        let I12 = {
          x: I11.x + width,
          y: I11.y
        };

        let I21 = {
          x: I11.x,
          y: I11.y + height
        };

        let I22 = {
          x: I12.x,
          y: I12.y + height
        };

        let I31 = {
          x: midpoint(I11, I12).x,
          y: I11.y
        };

        let I32 = {
          x: I31.x,
          y: I31.y + height
        };

        calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(I11)}, ${convertIntoCartesianCoordinate(I12)})`, color:color });
        calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(I21)}, ${convertIntoCartesianCoordinate(I22)})`, color:color });
        calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(I31)}, ${convertIntoCartesianCoordinate(I32)})`, color:color });

        return {x: I12.x, y: I12.y}
    }

    function U(previous){
      let radiusOfU = width/2;
      let U11 = {
        x: previous.x + space,
        y: previous.y + radiusOfU
      };

      let U12 = {
        x: U11.x,
        y: previous.y + height
      };

      let U21 = {
        x: U11.x + width,
        y: U11.y
      };

      let U22 = {
        x: U21.x,
        y: U12.y
      };

      calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(U11)}, ${convertIntoCartesianCoordinate(U12)})`, color:color });
      calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(U21)}, ${convertIntoCartesianCoordinate(U22)})`, color:color });
      calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(U21)}, ${convertIntoCartesianCoordinate(U22)})`, color:color });
      calculator.setExpression({ latex: `(y - ${U11.y}) = -\\sqrt{${radiusOfU}^2 - (x - ${midpoint(U11, U21).x })^2}`, color:color });

      return {x: U22.x, y: 0}
    }

    function C(previous){
      let centerX = previous.x + space + width;
      calculator.setExpression({ latex: `(x - ${centerX}) = - \\sqrt{${width}^2 - (y - ${1/2 * height})^2}`, color:color });
      return {x: centerX, y: 0};
    }

    function D(previous){
      let D11 = {
        x: previous.x + space,
        y: previous.y
      };

      let D12 ={
        x: D11.x,
        y: D11.y + height
      };

      calculator.setExpression({ latex: `\\operatorname{polygon}(${convertIntoCartesianCoordinate(D11)}, ${convertIntoCartesianCoordinate(D12)})`, color:color });
      calculator.setExpression({ latex: `(x - ${D11.x}) = \\sqrt{${width}^2 - (y - ${1/2 * height})^2}`, color:color });
    }

    function E(){
      let E1 = {
        x: previous.x + space,
        y: previous.y
      };

      let E2 = {
        x: E1.x,
        y: E1.y
      }
    }


D(C(B(A({x:0, y:0}))));
