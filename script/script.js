document.addEventListener("DOMContentLoaded", function() {
    fetch('../data/events.json')
        .then(response => response.json())
        .then(events => {
            const eventsContainer = document.getElementById("event");

            events.forEach(event => {
                const eventDiv = document.createElement("div");
                eventDiv.innerHTML = `  <h2>${event.name}</h2>
                                        <p>Дата: ${event.date}</p>
                                        <p>Место: ${event.location}</p>
                                        <button class="details" name="${event.id}">Детали</button>
                                        <button class="registration" name="${event.id}">Регистрация</button>
                                    `;
                eventsContainer.appendChild(eventDiv);
            });
        })
        .catch(error => console.error('Ошибка загрузки данных: ', error));
});



