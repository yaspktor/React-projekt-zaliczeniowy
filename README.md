# Aplikacja Pogodowa

Ten projekt to aplikacja pogodowa zbudowana przy użyciu Vite i React. Umożliwia użytkownikom wyszukiwanie bieżącej pogody i prognoz dla różnych lokalizacji.

## Instalacja

Postępuj zgodnie z poniższymi krokami, aby skonfigurować i uruchomić projekt lokalnie.

### Wymagania wstępne

Upewnij się, że masz zainstalowany Node.js i npm na swoim komputerze. Możesz pobrać Node.js [tutaj](https://nodejs.org/).

### Sklonuj repozytorium

```sh
git clone https://github.com/yaspktor/React-projekt-zaliczeniowy.git
cd React-projekt-zaliczeniowy
```
### Zainstaluj zależności
Przejdź do katalogu projektu i zainstaluj wymagane zależności:

```sh
npm install
```

### Zmienne środowiskowe
Utwórz plik .env w głównym katalogu projektu i dodaj swój klucz API OpenWeatherMap:
    
```sh
    VITE_WEATHER_API_KEY=YOUR_API_KEY
```

### Uruchomienie projektu
Aby uruchomić serwer, użyj polecenia:

```sh
npm run dev
```
Otwórz przeglądarkę i przejdź do http://localhost:5173, aby zobaczyć działającą aplikację.
### Komponenty
App.jsx: Główny komponent zarządzający stanem i renderujący inne komponenty.
Background.jsx: Komponent wyświetlający obraz tła w zależności od bieżącej pogody.
CurrentWeather.jsx: Komponent pokazujący bieżące informacje o pogodzie.
Forecast.jsx: Komponent wyświetlający prognozę pogody na kilka następnych dni.
Search.jsx: Komponent umożliwiający wyszukiwanie informacji o pogodzie według lokalizacji.


### API
Aplikacja korzysta z API OpenWeatherMap do pobierania informacji o pogodzie. Możesz uzyskać swój klucz API [tutaj](https://home.openweathermap.org/users/sign_up).