// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

const combination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [1, 5, 9],
    [3, 5, 7],
    [3, 6, 9],
];

const content = document.getElementById("content");

createMarkup();

function createMarkup() {
    let markup = ""; // створюємо змінну для накопичення розмітки
    for (let i = 1; i <= 9; i += 1) {
        // запускаємо цикл на 9 ітерацій щоб створити 9 клітинок для гри
        markup += `<div class="item" data-id="${i}"></div>`; // створюємо розмітку однієї клітинки, додаючи їй унікальне id, і накопичуємо її в зміннку markup
    }
    content.innerHTML = markup; // замість того, що було всередині контейнеру
}