function Version() {
    const presetText = "### Версия `№-0000`.\n";
    const currentText = document.getElementById('input-text').value;
    const newText = currentText + presetText; // Добавляем заготовку к текущему тексту
    document.getElementById('input-text').value = newText;
}

function NewFunc() {
    const presetText = "- Добавлена новая `текст`, оно отвечает за\n";
    const currentText = document.getElementById('input-text').value;
    const newText = currentText + presetText; // Добавляем заготовку к текущему тексту
    document.getElementById('input-text').value = newText;
}

function NewText() {
    const presetText = "- Добавлен\n";
    const currentText = document.getElementById('input-text').value;
    const newText = currentText + presetText; // Добавляем заготовку к текущему тексту
    document.getElementById('input-text').value = newText;
}

function UpdateFanc() {
    const presetText = "- Обновлена функция `текст`.\n";
    const currentText = document.getElementById('input-text').value;
    const newText = currentText + presetText; // Добавляем заготовку к текущему тексту
    document.getElementById('input-text').value = newText;
}

function BagFix() {
    const presetText = "- Исправлен баг с ``.\n";
    const currentText = document.getElementById('input-text').value;
    const newText = currentText + presetText; // Добавляем заготовку к текущему тексту
    document.getElementById('input-text').value = newText;
}

function TAG() {
    const presetText = "@everyone.\n";
    const currentText = document.getElementById('input-text').value;
    const newText = currentText + presetText; // Добавляем заготовку к текущему тексту
    document.getElementById('input-text').value = newText;
}
