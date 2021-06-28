let arrayData = [
  "2",
  "6",
  "7",
  "12",
  "14",
  "17",
  "19",
  "24",
  "26",
  "29",
  "1",
  "2",
  "0",
  "168.75",
  "576",
  "4",
  "2",
  "16",
  "264",
];

let DATA = [
  {
    question: "A.1 Найти седьмой член арифметической прогрессии: -4; 1; 6;...",
    answers: [
      {
        id: "1",
        value: "22",
        correct: false,
      },
      {
        id: "2",
        value: "24",
        correct: true,
      },
      {
        id: "3",
        value: "26",
        correct: false,
      },
    ],
    id: "A.1",
  },
  {
    question:
      "A.2 Решить неравенство (10 - 3х)(14 + 3х) < 0, в ответ записать сумму целых решений принадлежащих отрезку [4,8].",
    answers: [
      {
        id: "4",
        value: "35",
        correct: false,
      },
      {
        id: "5",
        value: "44",
        correct: false,
      },
      {
        id: "6",
        value: "30",
        correct: true,
      },
    ],
    id: "A.2",
  },
  {
    question:
      "A.3 Большее основание равнобедренной трапеции равно 12 см, а угол при основании равен 75<sup><small>0</small></sup>. Диагональ трапеции образует с основанием угол в 45<sup><small>0</small></sup> . Найти меньшее основание трапеции.",
    answers: [
      {
        id: "7",
        value: "4 &#8730 3",
        correct: true,
      },
      {
        id: "8",
        value: "2",
        correct: false,
      },
      {
        id: "9",
        value: "8",
        correct: false,
      },
    ],
    id: "A.3",
  },
  {
    question:
      "A.4 Если точка (0;8) принадлежит параболе с вершиной в точке (-1;1), то уравнение параболы имеет вид",
    answers: [
      {
        id: "10",
        value: "y = -7x<sup><small>2</small></sup> + 8",
        correct: false,
      },
      {
        id: "11",
        value: "y = -8x<sup><small>2</small></sup> + 8",
        correct: false,
      },
      {
        id: "12",
        value: "y = 7x<sup><small>2</small></sup> + 14x + 8",
        correct: true,
      },
    ],
    id: "A.4",
  },
  {
    question:
      "A.5 В арифметической прогрессии третий и шестой члены равны соответственно 4 и 13. Найдите сумму второго и восьмого членов прогрессии.",
    answers: [
      {
        id: "13",
        value: "1",
        correct: false,
      },
      {
        id: "14",
        value: "20",
        correct: true,
      },
      {
        id: "15",
        value: "18",
        correct: false,
      },
    ],
    id: "A.5",
  },
  {
    question: "A.6 Укажите четную функцию, заданную формулой:",
    answers: [
      {
        id: "16",
        value: "y = x&middot;cosx",
        correct: false,
      },
      {
        id: "17",
        value: "y = |x - 4| + |x + 4|",
        correct: true,
      },
      {
        id: "18",
        value: "y= log<sub><small>3</small></sub> x",
        correct: false,
      },
    ],
    id: "A.6",
  },
  {
    question:
      "A.7 Сумма решений уравнений sin4x&#247;sin6x =1, принадлежащих промежутку (0<sup><small>0</small></sup>; 180<sup><small>0</small></sup>), равна:",
    answers: [
      {
        id: "19",
        value: "360<sup><small>0</small></sup>",
        correct: true,
      },
      {
        id: "20",
        value: "180<sup><small>0</small></sup>",
        correct: false,
      },
      {
        id: "21",
        value: "450<sup><small>0</small></sup>",
        correct: false,
      },
    ],
    id: "A.7",
  },
  {
    question:
      "A.8 Мотоциклист проехал из <i>А</i> в <i>В</i> со скоростью 30 км/ч. С какой скоростью он должен вернуться обратно, чтобы средняя скорость движения была ровна 60 км/ч ?",
    answers: [
      {
        id: "22",
        value: "65",
        correct: false,
      },
      {
        id: "23",
        value: "80",
        correct: false,
      },
      {
        id: "24",
        value: "другой ответ",
        correct: true,
      },
    ],
    id: "A.8",
  },
  {
    question:
      "A.9 Найти наибольшее значение параметра <i>a</i>, при котором уравнение <i>(a-1)x<sup><small>2</small></sup> + 2(a + 1)x + a - 2 = 0</i> имеет один корень.",
    answers: [
      {
        id: "25",
        value: "0,5",
        correct: false,
      },
      {
        id: "26",
        value: "1",
        correct: true,
      },
      {
        id: "27",
        value: "2",
        correct: false,
      },
    ],
    id: "A.9",
  },
  {
    question:
      "A.10 Стороны треугольника равны 17 см, 25 см и 28 см. Найдите радиус полуокружности, вписанной в этот треугольник, если центр ее находится на большой стороне треугольника. ",
    answers: [
      {
        id: "28",
        value: "45",
        correct: false,
      },
      {
        id: "29",
        value: "10",
        correct: true,
      },
      {
        id: "30",
        value: "36",
        correct: false,
      },
    ],
    id: "A.10",
  },
  {
    question:
      "B.1 Найти сумму корней уравнения x<sup><small>4</small></sup> - 3x<sup><small>3</small></sup> + 4x<sup><small>2</small></sup> - 13x -9 = 0. ",
    answers: [
      {
        id: "31",
        value: 1,
        correct: true,
      },
    ],
    id: "B.1",
  },
  {
    question:
      "B.2 Найти количество корней уравнения 4sin<sup><small>2</small></sup>x + sin<sup><small>2</small></sup>3x = 4sinx&#183;sin<sup><small>2</small></sup>3x , принадлежащих промежутку (0, &#960;)",
    answers: [
      {
        id: "32",
        value: 2,
        correct: true,
      },
    ],
    id: "B.2",
  },
  {
    question:
      "B.3 Найти наибольшее и наименьшее значения функции y = x|x-1| на отрезке [-2;3]. В ответ записать сумму наибольшего и наименьшего значений.",
    answers: [
      {
        id: "33",
        value: 0,
        correct: true,
      },
    ],
    id: "B.3",
  },
  {
    question:
      "B.4 Найти площадь равнобедренного треугольника, если высота опущенная на основание равна 15, а высота опущенная на боковую сторону, равна 18.",
    answers: [
      {
        id: "34",
        value: 168.75,
        correct: true,
      },
    ],
    id: "B.4",
  },
  {
    question:
      "B.5 В конус, осевое сечение которого есть равносторонний треугольник, вписан шар. Найти объем конуса, если объем шара равен 256.",
    answers: [
      {
        id: "35",
        value: 576,
        correct: true,
      },
    ],
    id: "B.5",
  },
  {
    question:
      "B.6 Решить уравнение (x<sup><small>2</small></sup> - 2x + 3)(y<sup><small>2</small></sup> - 6y +12) = 6 . В ответ записать сумму x + y карней.",
    answers: [
      {
        id: "36",
        value: 4,
        correct: true,
      },
    ],
    id: "B.6",
  },
  {
    question:
      "B.7 Решить неравенство 5x<sup><small>9</small></sup> - 2x<sup><small>5</small></sup> + 2x > 5 . В ответ записать наименьшее целое число.",
    answers: [
      {
        id: "37",
        value: 2,
        correct: true,
      },
    ],
    id: "B.7",
  },
  {
    question:
      "B.8 Найти наибольший из объемов всех пирамид, у каждой из которых высота равна 12, а основанием является прямоугольный треугольник с гипотенузой 4.",
    answers: [
      {
        id: "38",
        value: 16,
        correct: true,
      },
    ],
    id: "B.8",
  },
  {
    question:
      "B.9 Равнобедренный треугольник, две стороны которого равны 8 и 18, вращается вокруг своей оси симметрии. Найти площадь поверхности тела вращения.",
    answers: [
      {
        id: "39",
        value: 264,
        correct: true,
      },
    ],
    id: "B.9",
  },
];
let arrayAlgebra = ["2", "6", "9", "10", "14", "16", "21", "23", "27", "29"];
let algebra = [
  {
    question:
      "1. Определите, график какой из данных функций получен из графика функции y = |x| сдвигом его вдоль оси абсцисс на 3 единицы влево: ",
    answers: [
      {
        id: "1",
        value: " y = |x| + 3",
        correct: false,
      },
      {
        id: "2",
        value: "y = |x + 3|",
        correct: true,
      },
      {
        id: "3",
        value: "y = |x − 3| ;",
        correct: false,
      },
    ],
    id: "1",
  },
  {
    question:
      "2. Выберите функцию, график которой получен из графика функции y = 4x<sup><small>2</small></sup> сдвигом его на 2 единицы вправо вдоль оси абсцисс.",
    answers: [
      {
        id: "4",
        value: "y = 4x<sup><small>2</small></sup> − 2",
        correct: false,
      },
      {
        id: "5",
        value: "y = 4(x + 2)<sup><small>2</small></sup>",
        correct: false,
      },
      {
        id: "6",
        value: " y = 4(x − 2)<sup><small>2</small></sup>",
        correct: true,
      },
    ],
    id: "2",
  },
  {
    question:
      "3. Найдите номер члена последовательности (b<sub>n</sub>), заданной формулой b<sub>n</sub> n = 0.25(n - 18)<sup><small>2</small></sup>  , равного 144.",
    answers: [
      {
        id: "7",
        value: "35",
        correct: false,
      },
      {
        id: "8",
        value: "48",
        correct: false,
      },
      {
        id: "9",
        value: " 42",
        correct: true,
      },
    ],
    id: "3",
  },
  {
    question:
      "4. Найдите первый член арифметической прогрессии, разность которой равна −8, а сумма двенадцати первых членов равна 96 ",
    answers: [
      {
        id: "10",
        value: "52",
        correct: true,
      },
      {
        id: "11",
        value: "44 ",
        correct: false,
      },
      {
        id: "12",
        value: "65",
        correct: false,
      },
    ],
    id: "4",
  },
  {
    question:
      "5. Расфасовали и отгрузили 0,9 т крупы, что составило 30 % всей крупы на складе. Сколько крупы нужно еще расфасовать и отгрузить, чтобы на складе осталось 18 % первоначально имевшейся крупы?  ",
    answers: [
      {
        id: "13",
        value: "1.58 т ",
        correct: false,
      },
      {
        id: "14",
        value: "1.56 т ",
        correct: true,
      },
      {
        id: "15",
        value: "2.10 т",
        correct: false,
      },
    ],
    id: "5",
  },
  {
    question:
      "6. Площадь земельного участка прямоугольной формы 6 га. Какой будет площадь этого земельного участка на плане, если масштаб плана 1 : 5000? ",
    answers: [
      {
        id: "16",
        value: "24 cм<sup><small>2</small></sup> ",
        correct: true,
      },
      {
        id: "17",
        value: "32 cм<sup><small>2</small></sup> ",
        correct: false,
      },
      {
        id: "18",
        value: "64 см<sup><small>2</small></sup>",
        correct: false,
      },
    ],
    id: "6",
  },

  {
    question: "7. Найдите НОД (12; 18) + НОК (15; 60). ",
    answers: [
      {
        id: "19",
        value: "20 ",
        correct: false,
      },
      {
        id: "20",
        value: "64 ",
        correct: false,
      },
      {
        id: "21",
        value: "66",
        correct: true,
      },
    ],
    id: "7",
  },

  {
    question:
      "8. Разложите на множители: (3x - a)y<sup><small>2</small></sup> -4(a - 3x)y - 4a + 12x ",
    answers: [
      {
        id: "22",
        value: "(3x - a)(y - 2)<sup><small>2</small></sup> ",
        correct: false,
      },
      {
        id: "23",
        value: "(3x - a)(y + 2)<sup><small>2</small></sup> ",
        correct: true,
      },
      {
        id: "24",
        value: "(12x + a)(y + 4)<sup><small>2</small></sup> ",
        correct: false,
      },
    ],
    id: "8",
  },
  {
    question: "9. Найдите нули функции:  f(x) = 5x − 10 ",
    answers: [
      {
        id: "25",
        value: " 4",
        correct: false,
      },
      {
        id: "26",
        value: "0 ",
        correct: false,
      },
      {
        id: "27",
        value: "2 ",
        correct: true,
      },
    ],
    id: "9",
  },
  {
    question:
      "10. Решите квадратное неравенство:  4x − x<sup><small>2</small></sup> > 0 ",
    answers: [
      {
        id: "28",
        value: " (1; 4)",
        correct: false,
      },
      {
        id: "29",
        value: "(0; 4) ",
        correct: true,
      },
      {
        id: "30",
        value: "(0; 3) ",
        correct: false,
      },
    ],
    id: "10",
  },
];
let arrayGeometr = ["1", "6", "9", "10", "14", "17", "21", "23", "27", "29"];
let geometr = [
  {
    question:
      "1. По гепотенузе прямоугольного треугольника со сторанами 12 см, 16 см, 20 см, перемещается точка. Найдите, при каком положении точки сумма квадратов расстояний от этой точки до катетов будет наименьшей. Определите расстояние от этого положения точки до вершины прямото угла. ",
    answers: [
      {
        id: "1",
        value: " 9,6 cм",
        correct: true,
      },
      {
        id: "2",
        value: " 8,4 см",
        correct: false,
      },
      {
        id: "3",
        value: " 11,2 см",
        correct: false,
      },
    ],
    id: "1",
  },
  {
    question:
      "2. В трапеции ABCD боковая сторона AB = 8, расстояние от середины боковой стороны CD до прямой AB равно 10 см. Найдите площадь трапеции.",
    answers: [
      {
        id: "4",
        value: "85 см<sup><small>2</small></sup>",
        correct: false,
      },
      {
        id: "5",
        value: "60 см<sup><small>2</small></sup>",
        correct: false,
      },
      {
        id: "6",
        value: "80 см<sup><small>2</small></sup>",
        correct: true,
      },
    ],
    id: "2",
  },

  {
    question:
      "3. В треугольнике АВС проведена медиана ВМ, точка F - ее середина. Прямая СF пересекает стороку АВ в точке К. Площадь четырехугольника AKFM равна 50 см<sup><small>2</small></sup>. Нaйдите площадь треугольника АВС.",
    answers: [
      {
        id: "7",
        value: "86 см<sup><small>2</small></sup>",
        correct: false,
      },
      {
        id: "8",
        value: "160 см<sup><small>2</small></sup>",
        correct: false,
      },
      {
        id: "9",
        value: "120 см<sup><small>2</small></sup>",
        correct: true,
      },
    ],
    id: "3",
  },
  {
    question:
      "4. Стороны одного из двух подобных треугольников равны 6 см и 12 см, другого - 12 см и 18 см. Найдите неизвестные стороны каждого из треугольников, если коэффициент подобия 2-го треугольника 1-му целое число. ",
    answers: [
      {
        id: "10",
        value: "9 см и 24 см ",
        correct: true,
      },
      {
        id: "11",
        value: "10 см и 26 см ",
        correct: false,
      },
      {
        id: "12",
        value: "8 см и 22 см",
        correct: false,
      },
    ],
    id: "4",
  },
  {
    question:
      "5. Точки М, N и K - соответственно середины сторон АВ, ВС и АС треугольника АВС, MN : KN : MK = 5 : 3 : 4, Р<sub><small>ABC</small></sub> = 48 см. Найдите площадь треугольника АВС. ",
    answers: [
      {
        id: "13",
        value: "86 см<sup><small>2</small></sup>",
        correct: false,
      },
      {
        id: "14",
        value: "96 см<sup><small>2</small></sup> ",
        correct: true,
      },
      {
        id: "15",
        value: "104 см<sup><small>2</small></sup>",
        correct: false,
      },
    ],
    id: "5",
  },
  {
    question:
      "6. Дан прямоугольник АВСD с площадью 210 см<sup><small>2</small></sup> . На стороне АD взята точка К, на стороне С - точка М так, что AK : KD = 2 : 1, CM : MD = 2 : 3. Отрезки АМ и ВК пересекаются в точке Р. Найдите площадь треугольника АРК. ",
    answers: [
      {
        id: "16",
        value: "28 cм<sup><small>2</small></sup> ",
        correct: false,
      },
      {
        id: "17",
        value: "20 см<sup><small>2</small></sup>",
        correct: true,
      },
      {
        id: "18",
        value: "30 см<sup><small>2</small></sup>",
        correct: false,
      },
    ],
    id: "6",
  },

  {
    question:
      "7. Стороны треугольника равны 6 см, 7 см и 8 см. Найдите длины отрезков, на которые биссектриса среднего по величине угла треугольника делит противолежащую сторону. ",
    answers: [
      {
        id: "19",
        value: "4 см и 5 см ",
        correct: false,
      },
      {
        id: "20",
        value: "2 см и 3 см ",
        correct: false,
      },
      {
        id: "21",
        value: "3 см и 4 см",
        correct: true,
      },
    ],
    id: "7",
  },

  {
    question:
      "8. Диагонали трапеции взаимно перпендикулярны и равны 6 и 8. Найдите длину отрезка, соединяющего середины оснований. ",
    answers: [
      {
        id: "22",
        value: "7 ",
        correct: false,
      },
      {
        id: "23",
        value: "5 ",
        correct: true,
      },
      {
        id: "24",
        value: "6 ",
        correct: false,
      },
    ],
    id: "8",
  },
  {
    question:
      "9. Окружность с центром О вписана в уголо ВАС, В и С - точки касания. Отрезки АО и ВС пересекаются в точке К, ОК = 2 см, ОВ = 4 см. Найдите длину отрезка АК. ",
    answers: [
      {
        id: "25",
        value: "4 см",
        correct: false,
      },
      {
        id: "26",
        value: "5 см ",
        correct: false,
      },
      {
        id: "27",
        value: "6 см ",
        correct: true,
      },
    ],
    id: "9",
  },
  {
    question:
      "10. На координатной плоскости задана окружность с центром Р(3;2) и радиусом, равным 2. Из точки А(-2;0) к окружности проведена касательная, отличная от оси абсцисс, которая касается окружности в точке В. НАйдите площадь треугольника АРВ.",
    answers: [
      {
        id: "28",
        value: " 4 кв. единиц",
        correct: false,
      },
      {
        id: "29",
        value: "5 кв. единиц ",
        correct: true,
      },
      {
        id: "30",
        value: "6 кв. единиц ",
        correct: false,
      },
    ],
    id: "10",
  },
];
