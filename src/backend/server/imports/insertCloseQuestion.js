const CloseQuestion = require('../models/close_question')

const CloseQuestionData = [
	{
		question: 'Jakie są cechy tabeli w relacyjnej bazie danych SQL?',
		answer_a: 'Kolumny są stałe, a liczba wierszy jest zmienna',
		answer_b: 'Kolumny i wiersze są stałe, a liczba kolumn jest zmienna',
		answer_c: 'Kolumny i liczba wierszy są stałe',
		correct_answer: 'C',
	},
	{
		question: 'Co umożliwiają typy danych w bazie danych PostgreSQL?',
		answer_a: 'Ograniczają zakres możliwych wartości przechowywanych w kolumnie',
		answer_b: 'Określają kolejność wierszy w tabeli',
		answer_c: 'Przypisują unikalne identyfikatory do wierszy',
		correct_answer: 'A',
	},
	{
		question: 'Jakie polecenie użyjesz, aby dodać nową kolumnę "description" o typie tekstowym do tabeli "products"?',
		answer_a: 'ALTER TABLE products ADD COLUMN description text;',
		answer_b: 'ALTER COLUMN products ADD description text;',
		answer_c: 'ADD COLUMN description TO products;',
		correct_answer: 'A',
	},
	{
		question:
			'Jakie polecenie służy do wstawienia nowego wiersza do tabeli "products", jeśli chcemy podać wartości tylko dla niektórych kolumn?',
		answer_a: 'INSERT INTO products DEFAULT VALUES;',
		answer_b: "INSERT INTO products (product_no, name) VALUES (1, 'Ser');",
		answer_c: "INSERT INTO products VALUES (1, 'Ser');",
		correct_answer: 'B',
	},
	{
		question:
			'Jakie polecenie użyjesz, aby zaktualizować wszystkie ceny produktów o 10%, pod warunkiem, że aktualna cena wynosi 5?',
		answer_a: 'UPDATE products SET price = 10 WHERE price = 5;',
		answer_b: 'MODIFY products SET price = 10 WHERE price = 5;',
		answer_c: 'CHANGE products SET price = price + 10 WHERE price = 5;',
		correct_answer: 'A',
	},
	{
		question: 'Jakie polecenie służy do pobierania danych z bazy danych w języku SQL?',
		answer_a: 'SELECT',
		answer_b: 'RETRIEVE',
		answer_c: 'QUERY',
		correct_answer: 'A',
	},
	{
		question: 'Jakie jest ogólne zapytanie z wyrażeniem tabeli w poleceniu SELECT?',
		answer_a: 'FROM table_expression',
		answer_b: 'IN table_expression',
		answer_c: 'USING table_expression',
		correct_answer: 'A',
	},
	{
		question: 'Jakie polecenie służy do usuwania danych z tabeli w języku SQL?',
		answer_a: 'DELETE',
		answer_b: 'REMOVE',
		answer_c: 'ERASE',
		correct_answer: 'A',
	},
	{
		question: 'Jakie jest proste zapytanie, które pobiera wszystkie kolumny z tabeli "table1"?',
		answer_a: 'SELECT * FROM table1;',
		answer_b: 'SELECT ALL FROM table1;',
		answer_c: 'SELECT COLUMNS FROM table1;',
		correct_answer: 'A',
	},
	{
		question: 'Jakie polecenie usuwa wszystkie wiersze z tabeli "products" o cenie równiej 10?',
		answer_a: 'DELETE FROM products WHERE price = 10;',
		answer_b: 'REMOVE FROM products WHERE price = 10;',
		answer_c: 'ERASE FROM products WHERE price = 10;',
		correct_answer: 'A',
	},
]

const createCloseQuestion = async () => {
	try {
		for (const closequestion of CloseQuestionData) {
			await CloseQuestion.create(closequestion)
			console.log('Test dodany:')
		}
	} catch (error) {
		console.error('Błąd podczas dodawania danych:', error)
	}
}
module.exports = createCloseQuestion
