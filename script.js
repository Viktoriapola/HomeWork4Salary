
let sum = 0;
let average = 0;
let history = "";
let numberOfSalaries = 0;

while (true) {
  let salary = prompt(getInfo(sum, average, history) + '\nВведите ЗП' );
  if (salary === null) {
    if (confirm('Хотите выйти?')) {
      break;
    }
  }

  if (isNaN(Number(salary))) {
    if (confirm('Выдопустили ошибку! Хотите выйти?')) {
      break;
    }
    continue;
  }

  numberOfSalaries++;
  salary = Number(salary);
  sum += salary;
  average = sum / numberOfSalaries;
  history += salary + 'руб. ';
};

alert(getInfo(sum, average, history));

function getInfo(sum, average, history) {
  return `Сумма: ${sum}; \nСредняя: ${average}; \nИстория: ${history}`;
};







// в этом способе я не смогда добавить то, что бы пользователь видел что он вводит что о не то

// function sumSalary() {

//     let numbers = [];
   
//     while (true) {
  
//       let getSalary = prompt('Введите зарплату за месяц');
  
//       if (getSalary === '' || getSalary === null) {
//         break;
//       } 
//       numbers.push(+getSalary);
//     }
  
//     let sum = 0;
//     for (let num of numbers) {
//       sum += num / numbers.length;
//     }
//     return sum;
// }
  
// alert('Средняя зарплата ' + sumSalary() );





//это второй способ


// let summa = 0;
// let getSalary;
// let div = -1;
 
// do {
//   getSalary = +prompt('Введите зарплату за месяц');
 
//   if (isFinite(getSalary)) {
//     div++;
//     summa += getSalary;
//   } else {
//     alert('Было введено не число, попробуйте еще раз');
//   }
// } while (getSalary !== 0);
// alert(`Средняя зарплата ${summa / div}`);


