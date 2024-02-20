const Faq = require('../models/faq_table')

const faqData = [
	{
		faq_name: 'Gdzie mogę skierować pytania lub wątpliwości ?',
		faq_description:
			'Wszelkie pytania należy kierować za pomocą formularza kontaktowego do którego można przejść klikając w zakładkę pomoc a następnie klikając w zakładkę Skontaktuj się',
	},
	{
		faq_name: 'Gdzie mogę zmienić adres mailowy lub hasło ?',
		faq_description: 'Zakładka zmiana adresu mailowego lub hasła znajduje się w zakładce ustawienia',
	},
	{
		faq_name: 'Co mogę zrobić z zebranymi punktami ?',
		faq_description:
			'Zebrane punkty mogą posłużyć prowadzącemu do wystawienia tobie oceny z przedmiotu Podstawy Baz Danych',
	},
]

const createFaq = async () => {
	try {
		for (const faqs of faqData) {
			await Faq.create(faqs)
			console.log('FAQ dodane')
		}
	} catch (error) {
		console.error('Błąd podczas dodawania danych:', error)
	}
}

module.exports = createFaq
