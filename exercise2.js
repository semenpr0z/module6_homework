function simpleСomposite(number) {
  if (number < 2 || number > 1000 || isNaN(number)){
    return 'Данные неверны';
  }
  else if (number === 2) {
    return 'Простое число';
  }
  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      return 'Составное число';
    }
    i++;
  }
  return 'Простое число';
};

console.log(simpleСomposite(3));