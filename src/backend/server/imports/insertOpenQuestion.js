const OpenQuestion = require('../models/open_question')

const OpenQuestionData = [
	{
		question_id: 1,
		nr_question_id: 1,
		question: 'Która instrukcja kasuje tabele',
		correct_answer: 'DROP TABLE',
	},
	{
		question_id: 1,
		nr_question_id: 2,
		question: 'Która instrukcja tworzy tabelę',
		correct_answer: 'CREATE TABLE',
	},
	{
		question_id: 2,
		nr_question_id: 1,
		question: 'Która instrukcja dodaje kolumnę',
		correct_answer: 'ADD COLUMN',
	},
	{
		question_id: 2,
		nr_question_id: 2,
		question: 'Która instrukcja usuwa kolumnę',
		correct_answer: 'DROP COLUMN',
	},
	{
		question_id: 3,
		nr_question_id: 1,
		question:
			'Jakie zapytanie SQL dodaje nowy wiersz do tabeli "products" o wartościach id równym 1, name równym \'Ser\' i price równym 9.99?',
		correct_answer: "INSERT INTO products VALUES (1, ''Ser'', 9.99);",
	},
	{
		question_id: 3,
		nr_question_id: 2,
		question: 'Która instrukcja dodaje wiersz',
		correct_answer: 'INSERT INTO',
	},
	{
		question_id: 4,
		nr_question_id: 1,
		question: 'Jakie zapytanie SQL aktualizuje cenę każdego produktu w tabeli "products", zwiększając ją o 10%?',
		correct_answer: 'UPDATE products SET price = price * 1.10;',
	},
	{
		question_id: 5,
		nr_question_id: 1,
		question: 'Wybierz wszystkie rekordy z tabeli pracownicy',
		correct_answer: 'SELECT * FROM pracownicy',
	},
	{
		question_id: 5,
		nr_question_id: 2,
		question: 'Jaki będzie wynik zapytania SELECT 3 * 4?',
		correct_answer: '12',
	},
	{
		question_id: 6,
		nr_question_id: 1,
		question: 'Jakie zapytanie SQL usuwa wszystkie produkty z tabeli "products", których cena wynosi 10?',
		correct_answer: 'DELETE FROM products WHERE price = 10;',
	},
	{
		question_id: 6,
		nr_question_id: 2,
		question: 'Jakie zapytanie SQL usuwa wszystkie wiersze z tabeli "products"?',
		correct_answer: 'DELETE FROM products;',
	},
]

const createOpenQuestion = async () => {
	try {
		for (const openquestion of OpenQuestionData) {
			await OpenQuestion.create(openquestion)
			console.log('Motywacja dodana:')
		}
	} catch (error) {
		console.error('Błąd podczas dodawania danych:', error)
	}
}
module.exports = createOpenQuestion
