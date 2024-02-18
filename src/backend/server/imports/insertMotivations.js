const Motivation = require('../models/motivation')

const motivationData = [
	{
		motivation_text: 'Nauka to nie tylko kolekcja faktów, to również proces zdobywania i zrozumienia świata.',
		motivation_author: 'Carl Sagan',
	},
	{ motivation_text: 'Nauka to proces, który nigdy się nie kończy.', motivation_author: 'Albert Einstein' },
	{ motivation_text: 'Nauka i rozwój to klucz do naszej ewolucji.', motivation_author: 'Elon Musk' },
	{
		motivation_text: 'Celuj w księżyc, bo nawet jeśli nie trafisz, będziesz między gwiazdami.',
		motivation_author: 'Patrick Süskind',
	},
	{
		motivation_text:
			'Sukces nie jest kluczem do szczęścia. Szczęście jest kluczem do sukcesu. Jeśli kochasz to, co robisz, odniesiesz sukces.',
		motivation_author: 'Albert Schweitzer',
	},
	{
		motivation_text: 'Nigdy nie rezygnuj z celu tylko dlatego, że osiągnięcie "go" wymaga czasu. Czas i tak upłynie.',
		motivation_author: 'Earl Nightingale',
	},
	{
		motivation_text: 'Jedynym miejscem, gdzie sukces pojawia się przed pracą, to w słowniku.',
		motivation_author: 'Vidal Sassoon',
	},
	{
		motivation_text: 'Życie to 10% tego, co ci się dzieje, i 90% tego, jak na to reagujesz.',
		motivation_author: 'Charles R. Swindoll',
	},
	{
		motivation_text: 'Najlepszym sposobem przewidzenia przyszłości jest ją stworzyć.',
		motivation_author: 'Peter Drucker',
	},
	{
		motivation_text:
			'Sukces "to" nie końcowa destynacja, "to" podróż. Przyjmuj porażki z godnością, a zwycięstwa z pokorą.',
		motivation_author: 'Zig Ziglar',
	},
	{
		motivation_text: 'Niech twoje marzenia będą większe niż twoje obawy, a działania mocniejsze niż twoje wymówki.',
		motivation_author: 'Unknown',
	},
	{ motivation_text: 'Sekretem sukcesu jest rozpoczęcie od pierwszego kroku', motivation_author: 'Mark Twain' },
	{
		motivation_text: 'Twoje ograniczenia są jedynie wyobraźnią. Jeśli wierzysz w siebie, wszystko jest możliwe.',
		motivation_author: 'Cherie Carter-Scott',
	},
	{ motivation_text: 'Zawsze wydaje się niemożliwe, dopóki nie jest zrobione.', motivation_author: 'Nelson Mandela' },
	{
		motivation_text:
			'Niech cię nie zniechęcają niepowodzenia. To tylko szansa na rozpoczęcie od nowa, tym razem z większym doświadczeniem.',
		motivation_author: 'Henry Ford',
	},
	{ motivation_text: 'Najlepszy sposób przewidzenia przyszłości to ją stworzyć.', motivation_author: 'Peter Drucker' },
	{ motivation_text: 'Jakość twojego życia jest równa jakości twoich nawyków.', motivation_author: 'Robin Sharma' },
	{ motivation_text: 'Zawsze jest za wcześnie, aby się poddać.', motivation_author: 'Norman Vincent Peale' },
	{ motivation_text: 'Osiągnięcia zaczynają się od decyzji, by spróbować.', motivation_author: 'Gail Devers' },
	{
		motivation_text: 'Życie jest krótkie, a świat pełen możliwości. Nie trać czasu na bycie kimś, kim nie chcesz być.',
		motivation_author: 'Chris Hadfield',
	},
	{
		motivation_text: 'Wyzwania są tym, co czyni życie interesującym, a pokonywanie ich to to, co czyni je znaczącym.',
		motivation_author: 'Joshua J. Marine',
	},
	{
		motivation_text:
			'Niech twoje cele będą większe niż twoje obawy, a twoje działania będą mocniejsze niż twoje wątpliwości.',
		motivation_author: 'Unknown',
	},
	{
		motivation_text: 'Twój czas jest teraz. Zacznij tam, gdzie jesteś. Użyj tego, co masz.',
		motivation_author: 'Tony Robbins',
	},
]

const createMotivation = async () => {
	try {
		for (const motivation of motivationData) {
			await Motivation.create(motivation)
			console.log('Motywacja dodana:')
		}
	} catch (error) {
		console.error('Błąd podczas dodawania danych:', error)
	}
}
module.exports = createMotivation
