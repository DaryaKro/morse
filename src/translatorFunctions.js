const morseCodeDict = {
    // Английские буквы
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
    'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
    'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
    'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..',
    // Цифры
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    // Русские буквы
    'а': '.-', 'б': '-...', 'в': '.--', 'г': '--.', 'д': '-..', 'е': '.',
    'ё': '.', 'ж': '...-', 'з': '--..', 'и': '..', 'й': '.---', 'к': '-.-',
    'л': '.-..', 'м': '--', 'н': '-.', 'о': '---', 'п': '.--.', 'р': '.-.',
    'с': '...', 'т': '-', 'у': '..-', 'ф': '..-.', 'х': '....', 'ц': '-.-.',
    'ч': '---.', 'ш': '----', 'щ': '--.-', 'ы': '-.--', 'э': '..-..',
    'ю': '..--', 'я': '.-.-', 'ь': '-..-', 'ъ': '--.--'
};

const textToMorse = (text) => {
    return text.toLowerCase().split('').map(char => morseCodeDict[char] || char).join(' ');
};

const textToBinary = (text) => {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
};

const reverseMorseCodeDict = Object.fromEntries(
    Object.entries(morseCodeDict).map(([key, value]) => [value, key])
);

const morseToText = (morse) => {
    return morse.split(' ')
        .map(word => word.split(' ').map(character => reverseMorseCodeDict[character] || '').join(''))
        .join(' ');
};

const binaryToText = (binary) => {
    return binary.split(' ')
        .map(b => String.fromCharCode(parseInt(b, 2)))
        .join('');
};

export { textToMorse, textToBinary, morseToText, binaryToText };