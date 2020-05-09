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

    //         } else {
    //             data = response;
    //         }
    //
    //     }
    // });
    let testData = "[\n" +
        "        {\n" +
        "            \"id\": \"1\",\n" +
        "            \"identification_code\": \"05747991\",\n" +
        "            \"fullname\": \"АКЦІОНЕРНЕ ТОВАРИСТВО \\\"СУМСЬКЕ МАШИНОБУДІВНЕ НАУКОВО-ВИРОБНИЧЕ ОБ'ЄДНАННЯ\\\"\",\n" +
        "            \"amount_of_money_to_be_recovered\": \"170442994.07\",\n" +
        "            \"number_of_issues\":\"3720\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"2\",\n" +
        "            \"identification_code\": \"24341697\",\n" +
        "            \"fullname\": \"Публічне акціонерне товариство \\\"Футбольний клуб \\\"Металіст\\\"\",\n" +
        "            \"amount_of_money_to_be_recovered\": \"170442994.07\",\n" +
        "            \"number_of_issues\":\"29\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"3\",\n" +
        "            \"identification_code\": \"\\t33270581\",\n" +
        "            \"fullname\": \"ПРИВАТНЕ АКЦІОНЕРНЕ ТОВАРИСТВО \\\"СЄВЄРОДОНЕЦЬКЕ ОБ'ЄДНАННЯ АЗОТ\\\"\",\n" +
        "            \"amount_of_money_to_be_recovered\": \"170442994.07\",\n" +
        "            \"number_of_issues\":\"680\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"4\",\n" +
        "            \"identification_code\": \"05747991\",\n" +
        "            \"fullname\": \"КП ШКЗ Зірка\",\n" +
        "            \"amount_of_money_to_be_recovered\": \"170442994.07\",\n" +
        "            \"number_of_issues\":\"1021\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"5\",\n" +
        "            \"identification_code\": \"05747991\",\n" +
        "            \"fullname\": \"\\tАКЦІОНЕРНЕ ТОВАРИСТВО \\\"ЗАВОД \\\"МАЯК\\\"\",\n" +
        "            \"amount_of_money_to_be_recovered\": \"170442994.07\",\n" +
        "            \"number_of_issues\":\"3720\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"id\": \"6\",\n" +
        "            \"identification_code\": \"05747991\",\n" +
        "            \"fullname\": \"ДП \\\"ДЕВЗ\\\"\",\n" +
        "            \"amount_of_money_to_be_recovered\": \"170442994.07\",\n" +
        "            \"number_of_issues\":\"3720\"\n" +
        "        }\n" +
        "\n" +
        "    ]";
    let data = [
        {
            "id": "1",
            "identification_code": "05747991",
            "fullname": "АКЦІОНЕРНЕ ТОВАРИСТВО \"СУМСЬКЕ МАШИНОБУДІВНЕ НАУКОВО-ВИРОБНИЧЕ ОБ'ЄДНАННЯ\"",
            "amount_of_money_to_be_recovered": "170442994.07",
            "number_of_issues": "3720"
        },
        {
            "id": "2",
            "identification_code": "24341697",
            "fullname": "Публічне акціонерне товариство \"Футбольний клуб \"Металіст\"",
            "amount_of_money_to_be_recovered": "170442994.07",
            "number_of_issues": "29"
        },
        {
            "id": "3",
            "identification_code": "\t33270581",
            "fullname": "ПРИВАТНЕ АКЦІОНЕРНЕ ТОВАРИСТВО \"СЄВЄРОДОНЕЦЬКЕ ОБ'ЄДНАННЯ АЗОТ\"",
            "amount_of_money_to_be_recovered": "170442994.07",
            "number_of_issues": "680"
        },
        {
            "id": "4",
            "identification_code": "05747991",
            "fullname": "КП ШКЗ Зірка",
            "amount_of_money_to_be_recovered": "170442994.07",
            "number_of_issues": "1021"
        },
        {
            "id": "5",
            "identification_code": "05747991",
            "fullname": "\tАКЦІОНЕРНЕ ТОВАРИСТВО \"ЗАВОД \"МАЯК\"",
            "amount_of_money_to_be_recovered": "170442994.07",
            "number_of_issues": "3720"
        },
        {
            "id": "6",
            "identification_code": "05747991",
            "fullname": "ДП \"ДЕВЗ\"",
            "amount_of_money_to_be_recovered": "170442994.07",
            "number_of_issues": "3720"
        }

    ];

    let parsed_data = JSON.parse(testData);

    $('#numberOfRecords').text(`Кількість записів в реєстрі: ${parsed_data.length}`);

    let index = 1;

    parsed_data.forEach(function (entity) {
        let entityElement = `<tr  class="print-no-page-break">
                        <td data-title="№">${index}</td>
                        <td data-title="Ідентифікаційний номер">${entity.identification_code}</td>
                        <td data-title="Найменування боржника">
                            <span >${entity.fullname}</span>
                        </td>
                        <td data-title="Загальна сума заборгованості">${entity.amount_of_money_to_be_recovered}</td>
                        <td data-title="Кількість відкритих ВП">${entity.number_of_issues}</td>
                        <td>
                            <a href="search_debtor.html?id_code=${entity.identification_code}&type=legal" >
                                Шукати у єдиному реєстрі боржників
                            </a>
                        </td>
                    </tr>`;

        $("#results").append(entityElement);

        index++;
    });

});
