// Функция для сохранения изменений
function saveChanges() {
    // Получаем выбранную дату
    const dateTimeInput = document.getElementById('date').value;

    // Получаем введенный текст
    const textInput = document.getElementById('input-text').value;

    // Отображаем результаты
    displayResults(dateTimeInput, textInput);
}


// Функция для сброса введенных данных
function resetInput() {
    // Сбрасываем введенный текст и выбранную дату и время
    document.getElementById('input-text').value = '';
    document.getElementById('date').value = '';

    // Очищаем блок вывода
    document.getElementById('output-area').innerText = '';
}
