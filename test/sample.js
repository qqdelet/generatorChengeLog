function Version() {
    const presetText = "### Версия `№-0000`.\n```md\n\n\n```";
    const currentText = document.getElementById('input-text').value;
    const newText = currentText + presetText; // Добавляем заготовку к текущему тексту
    document.getElementById('input-text').value = newText;
}

function insertIntoMdBlock(textToInsert) {
    const textArea = document.getElementById('input-text');
    let currentText = textArea.value;

    // Ищем блок ```md ... ```
    const mdStart = currentText.indexOf('```md');
    const mdEnd = currentText.indexOf('```', mdStart + 5); // находим конец блока
    
    if (mdStart !== -1 && mdEnd !== -1) {
        // Вставляем текст внутрь блока
        const beforeMd = currentText.slice(0, mdStart + 6); // часть до ```md\n
        const afterMd = currentText.slice(mdEnd); // часть после закрывающих ```
        const mdContent = currentText.slice(mdStart + 6, mdEnd).trim(); // то, что между \n... и ```

        const newMdContent = mdContent + textToInsert + "\n"; // добавляем новый текст внутрь блока
        const newText = beforeMd + newMdContent + afterMd;

        textArea.value = newText;
    } else {
        // Если блока нет, выводим предупреждение или создаём его
        alert("Блок '```md ... ```' не найден. Пожалуйста, создайте версию.");
    }
}

function NewFunc() {
    const presetText = "\n- Добавлена новая `текст`, оно отвечает за\n";
    insertIntoMdBlock(presetText);
}

function NewText() {
    const presetText = "\n- Добавлен новый текст\n";
    insertIntoMdBlock(presetText);
}

function UpdateFanc() {
    const presetText = "\n- Обновлена функция `текст`.\n";
    insertIntoMdBlock(presetText);
}

function BagFix() {
    const presetText = "\n- Исправлен баг с ``.\n";
    insertIntoMdBlock(presetText);
}

function TAG() {
    const presetText = "\n@everyone.\n";
    insertIntoMdBlock(presetText);
}
