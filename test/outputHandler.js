// Функция для отображения результатов
function displayResults(dateTime, text) {
    const outputText = `# change log for ${dateTime}\n${text}`;
    
    // Создаем элемент списка для каждого изменения
    const listItem = document.createElement('div');
    listItem.innerText = outputText;

    // Добавляем элемент списка в боковое окно
    const historyList = document.getElementById('history-list');
    historyList.appendChild(listItem);
}
