// получаем все кнопки и экран
const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.output');

// обрабатываем клик на любой кнопке
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // получаем текст кнопки
    const buttonText = button.textContent;
    
    // если текст равен "=", то вычисляем результат
    if (buttonText === '=') {
      try {
        // вычисляем математическое выражение, введенное на экране
        const result = eval(screen.textContent);
        // выводим результат на экран
        screen.textContent = result;
      } catch (error) {
        // если в выражении есть ошибка, выводим ее на экран
        screen.textContent = 'Error';
      }
    } else if (buttonText === 'C') {
      // если текст равен "C", то очищаем экран
      screen.textContent = '';
    } else {
      // добавляем текст кнопки на экран
      screen.textContent += buttonText;
    }
  });
});