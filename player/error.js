module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'Nie gra':
            message.channel.send(`${client.emotes.error} - Na tym serwerze nie jest odtwarzana żadna muzyka!`);
            break;
        case 'Nie połączony':
            message.channel.send(`${client.emotes.error} - Nie masz połączenia z żadnym kanałem głosowym!`);
            break;
        case 'Nie jest w stanie dołączyć':
            message.channel.send(`${client.emotes.error} - Nie mogę dołączyć do Twojego kanału głosowego, sprawdź moje uprawnienia!`);
            break;
        case 'Film niedostępny':
            message.channel.send(`${client.emotes.error} - ${args[0].title} nie jest dostępny w Twoim kraju! Pomijanie ... `);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Coś poszło nie tak ... Błąd: ${error}`);
    };
};
