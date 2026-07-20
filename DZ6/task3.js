// на уроці ми цього не розбирали, не знав як використовувати try, catch, finally >> загуглив

function divide (numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Помилка: обидва аргументи повинні бути числами.");
  }

  if (denominator === 0) {
    throw new Error("Помилка: ділити на нуль не можна.");
  }

  return numerator / denominator;
}

try {
  console.log(divide(10, 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(10, 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide("10", 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}