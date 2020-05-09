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
        "            \"fullname\": \"Воловик Леонід Васильович\",\n" +
        "            \"birth_date\": \"06.05.1975\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"2\",\n" +
        "            \"fullname\": \"Антонець В'ячеслав Петрович\",\n" +
        "            \"birth_date\": \"06.05.1975\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"3\",\n" +
        "            \"fullname\": \"Маренич Микола Володимирович\",\n" +
        "            \"birth_date\": \"06.05.1975\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"4\",\n" +
        "            \"fullname\": \"Покутній Віталій Олександрович\",\n" +
        "            \"birth_date\": \"06.05.1975\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"5\",\n" +
        "            \"fullname\": \"Смолянінов Олександр Сергійович\",\n" +
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
            "fullname": "Воловик Леонід Васильович",
            "birth_date": "06.05.1975"
        },
        {
            "id": "2",
            "fullname": "Антонець В'ячеслав Петрович",
            "birth_date": "06.05.1975"
        },
        {
            "id": "3",
            "fullname": "Маренич Микола Володимирович",
            "birth_date": "06.05.1975"
        },
        {
            "id": "4",
            "fullname": "Покутній Віталій Олександрович",
            "birth_date": "06.05.1975"
        },
        {
            "id": "5",
            "fullname": "Смолянінов Олександр Сергійович",
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
