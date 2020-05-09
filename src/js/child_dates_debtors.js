$('#showInfo').click(function () {

    let info = $('#info');

    if (info.hasClass('ng-hide'))
        info.removeClass('ng-hide')
    else
        info.addClass('ng-hide');
});

$(document).ready(function () {

    // $.ajax({
    //     url: 'ЗАПРОС НА ТВІЙ СЕРВЕР НАХ',
    //     type: 'get',
    //     success: function (response) {
    //         if (response === null) {
    //             $("#physicalResultsMessage").removeClass('ng-hide');
    //         } else {
    //             data = response;
    //         }
    //
    //     }
    // });
    let testData = "[\n" +
        "        {\n" +
        "            \"id\": \"1\",\n" +
        "            \"fullname\": \"Вороніна Вероніка Анатоліївна\",\n" +
        "            \"birth_date\": \"09.10.1987\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"2\",\n" +
        "            \"fullname\": \"Тесленко Юлія Василівна\",\n" +
        "            \"birth_date\": \"03.09.1990\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"3\",\n" +
        "            \"fullname\": \"Кушнир Любов Олександрівна\",\n" +
        "            \"birth_date\": \"24.01.1990\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"4\",\n" +
        "            \"fullname\": \"Летягіна Ольга Сергіївна\",\n" +
        "            \"birth_date\": \"06.05.1975\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"5\",\n" +
        "            \"fullname\": \"Сілкіна Вікторія Вікторівна\",\n" +
        "            \"birth_date\": \"06.05.1975\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"6\",\n" +
        "            \"fullname\": \"Шевчук Сергій Вікторович\",\n" +
        "            \"birth_date\": \"06.05.1975\"\n" +
        "        }\n" +
        "\n" +
        "    ]";

    let data = [
        {
            "id": "1",
            "fullname": "Вороніна Вероніка Анатоліївна",
            "birth_date": "09.10.1987"
        },
        {
            "id": "2",
            "fullname": "Тесленко Юлія Василівна",
            "birth_date": "03.09.1990"
        },
        {
            "id": "3",
            "fullname": "Кушнир Любов Олександрівна",
            "birth_date": "24.01.1990"
        },
        {
            "id": "4",
            "fullname": "Летягіна Ольга Сергіївна",
            "birth_date": "06.05.1975"
        },
        {
            "id": "5",
            "fullname": "Сілкіна Вікторія Вікторівна",
            "birth_date": "06.05.1975"
        },
        {
            "id": "6",
            "fullname": "Шевчук Сергій Вікторович",
            "birth_date": "06.05.1975"
        }

    ];

    let parsed_data = JSON.parse(testData);

    $('#numberOfRecords').text(`Кількість записів в реєстрі: ${parsed_data.length}`);

    let index = 1;

    parsed_data.forEach(function (entity) {
        let entityElement = `<tr class="print-no-page-break">
                    <td data-title="№"><span class="cell-content">${index}</span></td>
                    <td data-title="Прізвище, ім’я, по батькові"><span
                            class="cell-content">${entity.fullname}</span>
                    </td>
                    <td data-title="Дата народження"><span class="cell-content">${entity.birth_date}</span></td>
                    <td data-title="Детально">
                        <span class="cell-content">
                        <a tabindex="12" href="search_debtor.html?fullname=${entity.fullname}&type=physical">
                            Шукати у єдиному реєстрі боржників
                        </a>
                        </span>
                    </td>
                </tr>`;

        $("#results").append(entityElement);

        index++;
    });

});
