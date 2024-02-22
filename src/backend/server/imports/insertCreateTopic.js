const Topic = require('../models/topic')

const topicData = [
	{
		topic_name: 'CREATE TABLE',
		topic_description: `Tabela w relacyjnej bazie danych jest podobna do tabeli na papierze, składającej się z wierszy i kolumn. Kolejność i liczba kolumn są stałe, a każda kolumna posiada nazwę. Liczba wierszy w tabeli jest zmienna i zależy od ilości danych przechowywanych w danym czasie. W bazie danych SQL nie ma gwarancji co do kolejności wierszy w tabeli; po zapytaniu o tabelę, wiersze mogą być zwrócone w nieokreślonej kolejności, chyba że zostanie wyraźnie zażądane ich sortowanie,. Ponadto SQL nie przypisuje unikalnych identyfikatorów do wierszy, co może prowadzić do obecności wielu identycznych wierszy w tabeli. Jest to konsekwencja matematycznego modelu SQL, ale zazwyczaj nie jest to pożądane. W dalszej części tego rozdziału zostanie omówione, jak rozwiązać ten problem.

        Każda kolumna w tabeli ma określony typ danych, który ogranicza zakres możliwych wartości, jakie można przypisać do tej kolumny i nadaje semantykę przechowywanym w niej danym, umożliwiając ich wykorzystanie w obliczeniach. Na przykład kolumna o typie numerycznym nie będzie akceptować ciągów tekstowych, a dane w niej przechowywane będą wykorzystywane do obliczeń matematycznych. Z kolei kolumna o typie tekstowym będzie akceptować praktycznie każdy rodzaj danych, ale nie będzie nadawać się do obliczeń matematycznych, choć dostępne będą inne operacje, takie jak łączenie ciągów.
        
        PostgreSQL oferuje szeroki zakres wbudowanych typów danych, które pasują do wielu aplikacji. Użytkownicy mają także możliwość definiowania własnych typów danych. Większość wbudowanych typów danych ma intuicyjne nazwy i semantykę. Niektóre z często stosowanych typów danych to: liczby całkowite (integer), liczby zmiennoprzecinkowe (numeric), ciągi znaków (text), daty (date), godziny (time), oraz znaczniki czasu (timestamp).
        
        Aby utworzyć tabelę, należy użyć odpowiednio sformułowanej instrukcji CREATE TABLE. W tej instrukcji podajemy co najmniej nazwę nowej tabeli, nazwy kolumn oraz ich typy danych. Na przykład:
        
        CREATE TABLE moja_pierwsza_tabela (
            pierwsza_kolumna text,
            druga_kolumna integer
        );
        To spowoduje utworzenie tabeli o nazwie "moja_pierwsza_tabela" z dwiema kolumnami. Pierwsza kolumna będzie miała nazwę "pierwsza_kolumna" i typ danych "text", a druga kolumna będzie miała nazwę "druga_kolumna" i typ danych "integer".
        
        
        Jeśli chcesz usunąć tabelę, możesz to zrobić za pomocą polecenia DROP TABLE. Na przykład:
        
        DROP TABLE moja_pierwsza_tabela;
        DROP TABLE Products;
        
        To polecenie usuwa tabelę o nazwie "moja_pierwsza_tabela" oraz tabelę o nazwie "Products".
        `,
	},
	{
		topic_name: 'ALTER TABLE',
		topic_description: `Aby dodać nową kolumnę, użyj polecenia podobnego do tego:

        ALTER TABLE products ADD COLUMN description text;
        Natomiast aby usunąć kolumnę, użyj polecenia w stylu:
        
        ALTER TABLE products DROP COLUMN description;
        Możesz także wykorzystać polecenie ALTER TABLE do dodania nowej kolumny do tabeli o nazwie "products", która będzie przechowywać dane tekstowe, oraz do usunięcia kolumny "description" z tej samej tabeli.
        
)`,
	},
	{
		topic_name: 'INSERT INTO',
		topic_description: `Kiedy tabela jest tworzona, nie zawiera żadnych danych. Pierwszym krokiem przed użyciem bazy danych jest wstawienie danych. Dane są wstawiane po jednym wierszu na raz. Możesz również wstawić więcej niż jeden wiersz za pomocą pojedynczej komendy, ale nie jest możliwe wstawienie czegoś, co nie jest kompletnym wierszem. Nawet jeśli znasz tylko niektóre wartości kolumn, musi być utworzony kompletny wiersz.

        Aby utworzyć nowy wiersz, użyj polecenia INSERT. Polecenie wymaga nazwy tabeli i wartości kolumn:
        
        CREATE TABLE products (
            product_no integer,
            name text,
            price numeric
        );
        Przykładowe polecenie do wstawienia wiersza byłoby:
        
        INSERT INTO products VALUES (1, ''Ser'', 9.99);
        Wartości danych są wymienione w kolejności, w jakiej kolumny pojawiają się w tabeli, oddzielone przecinkami. Zazwyczaj wartości danych będą stałymi (stałymi), ale są również dozwolone wyrażenia skalarne.
        
        Powyższa składnia ma wadę, że musisz znać kolejność kolumn w tabeli. Aby temu zapobiec, można również wymienić kolumny jawnie. Na przykład oba następujące polecenia mają ten sam efekt co powyższe:
        
        INSERT INTO products (product_no, name, price) VALUES (1, ''Ser'', 9.99);
        INSERT INTO products (name, price, product_no) VALUES (''Ser'', 9.99, 1);
        Wielu użytkowników uważa za dobrą praktykę zawsze wymieniać nazwy kolumn.
        
        Jeśli nie masz wartości dla wszystkich kolumn, możesz pominąć niektóre z nich. W takim przypadku kolumny zostaną wypełnione ich wartościami domyślnymi. Na przykład:
        
        INSERT INTO products (product_no, name) VALUES (1, ''Ser'');
        INSERT INTO products VALUES (1, ''Ser'');
        Druga forma jest rozszerzeniem PostgreSQL. Wypełnia ona kolumny od lewej strony tak wieloma wartościami, ile jest podanych, a reszta zostanie ustawiona na wartości domyślne.
        
        Dla jasności możesz również wyraźnie żądać wartości domyślnych, dla poszczególnych kolumn lub dla całego wiersza:
        
        INSERT INTO products (product_no, name, price) VALUES (1, ''Ser'', DEFAULT);
        INSERT INTO products DEFAULT VALUES;
        Możesz wstawić wiele wierszy za jednym razem:
        INSERT INTO products (product_no, name, price) VALUES
            (1, ''Ser'', 9.99),
            (2, ''Chleb'', 1.99),
            (3, ''Mleko'', 2.99);
        `,
	},
	{
		topic_name: 'UPDATE',
		topic_description: `Aktualizacja danych, które już znajdują się w bazie danych, nazywana jest aktualizacją. Możesz aktualizować poszczególne wiersze, wszystkie wiersze w tabeli lub podzbiór wszystkich wierszy. Każda kolumna może być aktualizowana oddzielnie; pozostałe kolumny nie są dotknięte.

        Aby zaktualizować istniejące wiersze, użyj polecenia UPDATE. Wymaga to trzech elementów informacji:
        
        Nazwy tabeli i kolumny do aktualizacji
        Nowej wartości kolumny
        Których wierszy należy zaktualizować
        SQL zazwyczaj nie dostarcza unikalnego identyfikatora dla wierszy. Dlatego nie zawsze jest możliwe bezpośrednie określenie, który wiersz należy zaktualizować. Zamiast tego określasz, które warunki musi spełnić wiersz, aby został zaktualizowany. Tylko jeśli masz klucz główny w tabeli (niezależnie od tego, czy został zadeklarowany, czy nie), możesz niezawodnie odwoływać się do poszczególnych wierszy, wybierając warunek zgodny z kluczem głównym. Narzędzia graficznego dostępu do bazy danych polegają na tej zasadzie, pozwalając na indywidualną aktualizację wierszy.
        
        Na przykład to polecenie aktualizuje wszystkie produkty, których cena wynosi 5, aby miały cenę 10:
        
        UPDATE products SET price = 10 WHERE price = 5;
        
        Może to spowodować aktualizację zero, jednego lub wielu wierszy. Nie jest to błąd próbować aktualizować wiersz, który nie pasuje do żadnych wierszy.
        
        Przyjrzyjmy się temu poleceniu szczegółowo. Po pierwsze jest słowo kluczowe UPDATE, a następnie nazwa tabeli. Jak zwykle, nazwa tabeli może być kwalifikowana schematem, w przeciwnym razie jest wyszukiwana w ścieżce. Następnie jest słowo kluczowe SET, a następnie nazwa kolumny, znak równości i nowa wartość kolumny. Nowa wartość kolumny może być dowolnym wyrażeniem skalarowym, nie tylko stałą. Na przykład, jeśli chcesz podnieść cenę wszystkich produktów o 10%, możesz użyć:
        
        UPDATE products SET price = price * 1.10;
        
        Jak widać, wyrażenie dla nowej wartości może odnosić się do istniejącej wartości(wartości) w wierszu. Pominięto również klauzulę WHERE. Jeśli jest pominięta, oznacza to, że wszystkie wiersze w tabeli są aktualizowane. Jeśli jest obecny, aktualizowane są tylko te wiersze, które pasują do warunku WHERE. Należy zauważyć, że znak równości w klauzuli SET jest przypisaniem, podczas gdy w klauzuli WHERE jest to porównanie, ale nie tworzy to żadnej niejednoznaczności. Oczywiście warunek WHERE nie musi być testem równości. Dostępne są inne operatory. Ale wyrażenie musi być ewaluowane do wyniku logicznego.
        
        Możesz aktualizować więcej niż jedną kolumnę w poleceniu UPDATE, wymieniając więcej niż jedno przypisanie w klauzuli SET. Na przykład:
        
        UPDATE mytable SET a = 5, b = 3, c = 1 WHERE a > 0;
        `,
	},
	{
		topic_name: 'SELECT',
		topic_description: `Proces pobierania danych z bazy danych lub polecenie służące do pobierania danych z bazy danych nazywa się zapytaniem. W języku SQL polecenie SELECT służy do określania zapytań. Ogólna składnia polecenia SELECT to:

        [WITH with_queries] SELECT select_list FROM table_expression [sort_specification]
        
        Następujące sekcje opisują szczegóły listy wyboru, wyrażenia tabeli i specyfikacji sortowania. Zapytania WITH są traktowane na końcu, ponieważ są to zaawansowane funkcje.
        
        Proste zapytanie ma postać:
        
        SELECT * FROM table1;
        
        Zakładając, że istnieje tabela o nazwie table1, to polecenie to pobierze wszystkie wiersze i wszystkie zdefiniowane przez użytkownika kolumny z table1. Specyfikacja listy wyboru * oznacza wszystkie kolumny, które dostarcza wyrażenie tabeli. Lista wyboru może również wybierać podzbiór dostępnych kolumn lub wykonywać obliczenia przy użyciu kolumn. Na przykład, jeśli tabela1 ma kolumny o nazwach a, b i c (oraz być może inne), możesz wykonać następujące zapytanie:
        
        SELECT a, b + c FROM table1;
        
        (założenie, że b i c są typu numerycznego). Zobacz Rozdział 7.3 dla więcej szczegółów.
        
        FROM table1 to proste wyrażenie tabeli: odczytuje tylko jedną tabelę. Ogólnie rzecz biorąc, wyrażenia tabeli mogą być skomplikowanymi konstrukcjami bazującymi na tabelach, łączeniach i podzapytaniach. Ale można również pominąć wyrażenie tabeli i użyć polecenia SELECT jako kalkulatora:
        
        SELECT 3 * 4;
        `,
	},
	{
		topic_name: 'DELETE',
		topic_description: `Dotychczas omówiliśmy, jak dodawać dane do tabel i jak zmieniać dane. Pozostaje jeszcze omówić, jak usuwać dane, które nie są już potrzebne. Podobnie jak dodawanie danych możliwe jest jedynie w całych wierszach, tak samo usuwanie danych polega na usuwaniu całych wierszy z tabeli. W poprzedniej sekcji wyjaśniliśmy, że SQL nie dostarcza sposobu bezpośredniego odwoływania się do poszczególnych wierszy. Dlatego usuwanie wierszy może być wykonywane tylko poprzez określenie warunków, które muszą spełniać usuwane wiersze. Jeśli tabela ma klucz główny, możesz określić dokładny wiersz. Ale możesz także usuwać grupy wierszy pasujących do warunku lub usunąć wszystkie wiersze z tabeli jednocześnie.

        Do usuwania wierszy używa się polecenia DELETE; składnia jest bardzo podobna do polecenia UPDATE. Na przykład, aby usunąć wszystkie wiersze z tabeli products, których cena wynosi 10, użyj:
        
        DELETE FROM products WHERE price = 10;
        
        Jeśli po prostu napiszesz:
        
        DELETE FROM products;
        `,
	},
]

const createTopic = async () => {
	try {
		for (const topics of topicData) {
			await Topic.create(topics)
			console.log('Temat dodany:')
		}
	} catch (error) {
		console.error('Błąd podczas dodawania danych:', error)
	}
}
module.exports = createTopic
