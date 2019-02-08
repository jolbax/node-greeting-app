const greetings = require("./greeting.js");
const decorator = require("./decorator.js");

greetings.greetingEnglish();
greetings.greetingJapanese();
greetings.greetingSpanish();
greetings.greetingIcelandic();

decorator.decorateGreeting(greetings.greetingEnglish, 'Olaf');
decorator.decorateGreeting(greetings.greetingJapanese, 'Haruki');
decorator.decorateGreeting(greetings.greetingSpanish, 'Carlos');
decorator.decorateGreeting(greetings.greetingIcelandic, 'Ute');