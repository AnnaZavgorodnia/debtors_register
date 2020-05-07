$('input:radio[name="debtorType"]').change(
    function () {
        if ($(this).val() === 'physical') {
            $('#physicalPage').removeClass('ng-hide');
            $('#legalPage').addClass('ng-hide');
        } else if ($(this).val() === 'legal') {
            $('#legalPage').removeClass('ng-hide');
            $('#physicalPage').addClass('ng-hide');
        }
    });


$("#inputSurname").keyup(function () {
    if ($(this).val() !== '') {
        $('#surnameFieldset').removeClass('invalid');


        if ($('#nameFieldset').hasClass('invalid')) {
            $("#searchBtnPhysical").prop("disabled", true);

            if ($("#inputCode").val() === '') {
                $('#codeFieldset').addClass('invalid');
            }
        } else {
            $("#searchBtnPhysical").prop("disabled", false);
            $('#codeFieldset').removeClass('invalid');
        }

    } else {
        $('#surnameFieldset').addClass('invalid');
        $("#searchBtnPhysical").prop("disabled", true);
    }
});

$("#inputName").keyup(function () {
    if ($(this).val() !== '') {
        $('#nameFieldset').removeClass('invalid');


        if ($('#surnameFieldset').hasClass('invalid')) {
            $("#searchBtnPhysical").prop("disabled", true);

            if ($("#inputCode").val() === '') {
                $('#codeFieldset').addClass('invalid');
            }
        } else {
            $("#searchBtnPhysical").prop("disabled", false);
            $('#codeFieldset').removeClass('invalid');
        }

    } else {
        $('#nameFieldset').addClass('invalid');
        $("#searchBtnPhysical").prop("disabled", true);

    }
});

$("#inputCode").keyup(function () {

    if ($(this).val() !== '') {
        $('#codeFieldset').removeClass('invalid');

        $('#nameFieldset').removeClass('invalid');
        $('#surnameFieldset').removeClass('invalid');

        $('#inputCodeWarning').removeClass('ng-hide');

        $("#searchBtnPhysical").prop("disabled", false);

    } else {

        $('#inputCodeWarning').addClass('ng-hide');

        $('#nameFieldset').addClass('invalid');
        $('#surnameFieldset').addClass('invalid');

        $("#searchBtnPhysical").prop("disabled", true);

        $('#codeFieldset').addClass('invalid');
    }
});

$('#cleanFormPhysical').click(function () {
    $('#physicalForm')[0].reset();
});

$('#searchBtnPhysical').click(
    function (e) {
        e.preventDefault();

        let surname = $("#inputSurname").val();
        let name = $("#inputName").val();
        let identification_code = $("#inputCode").val();

        if (identification_code !== '' || (name !== '' && surname !== '')) {
            let patro = $('#inputPatro').val();
            let birth_date = $('#inputBirthDate').val();
            let chargeback_category = $('#categorySelect_33 option:selected').text();

            // $.ajax({
            //     url: 'ЗАПРОС НА ТВІЙ СЕРВЕР НАХ',
            //     type: 'post',
            //     data: {
            //         fullname: [name, surname, patro].filter(Boolean).join(" "),
            //         birth_date,
            //         chargeback_category,
            //         identification_code
            //     },
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
                "                {\n" +
                "                    \"full_name\": \"Вороніна Вероніка Анатоліївна\",\n" +
                "                    \"birth_date\": \"09.10.1987\",\n" +
                "                    \"executive_document_reciever\": \"інший орган, посадова особа Корабельний РВ ДВС м Херсон\",\n" +
                "                    \"issuer_state_agency\": \"Переяслав-Хмельницький міськрайонний відділ державної виконавчої служби Центрального міжрегіонального управління Міністерства юстиції (м. Київ)\",\n" +
                "                    \"issuer_full_name\": \"Марченко Ярослав Олександрович\",\n" +
                "                    \"issuer_email\": \"pr_xmdvs@ukr.net\",\n" +
                "                    \"issuer_phone_number\": \"045677-23-35\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів на користь держави\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"full_name\": \"Петренко Оксана Петрівна\",\n" +
                "                    \"birth_date\": \"08.08.1973\",\n" +
                "                    \"executive_document_reciever\": \"господарський суд Господарський суд Одеської області , суддя Демешин О.А.\",\n" +
                "                    \"issuer_state_agency\": \"Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області\",\n" +
                "                    \"issuer_full_name\": \"Баловнєва Оксана Сергіївна (не діє)\",\n" +
                "                    \"issuer_email\": \"info@km.od.dvs.gov.ua\",\n" +
                "                    \"issuer_phone_number\": \"57277648\",\n" +
                "                    \"executive_document_number_of_issue\": \"60217212\",\n" +
                "                    \"chargeback_category\": \"стягнення коштів\"\n" +
                "                }\n" +
                "            ]";

            let dataArray = [
                {
                    "full_name": "Вороніна Вероніка Анатоліївна",
                    "birth_date": "09.10.1987",
                    "executive_document_reciever": "інший орган, посадова особа Корабельний РВ ДВС м Херсон",
                    "issuer_state_agency": "Переяслав-Хмельницький міськрайонний відділ державної виконавчої служби Центрального міжрегіонального управління Міністерства юстиції (м. Київ)",
                    "issuer_full_name": "Марченко Ярослав Олександрович",
                    "issuer_email": "pr_xmdvs@ukr.net",
                    "issuer_phone_number": "045677-23-35",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів на користь держави"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                },
                {
                    "full_name": "Петренко Оксана Петрівна",
                    "birth_date": "08.08.1973",
                    "executive_document_reciever": "господарський суд Господарський суд Одеської області , суддя Демешин О.А.",
                    "issuer_state_agency": "Лиманський районний відділ державної виконавчої служби Головного територіального управління юстиції в Одеській області",
                    "issuer_full_name": "Баловнєва Оксана Сергіївна (не діє)",
                    "issuer_email": "info@km.od.dvs.gov.ua",
                    "issuer_phone_number": "57277648",
                    "executive_document_number_of_issue": "60217212",
                    "chargeback_category": "стягнення коштів"
                }
            ];

            let parsed_data = JSON.parse(testData);

            let resTable = $('#physicalResultsTable');

            resTable.removeClass('ng-hide');

            {
                let today = new Date();
                let dateTimeStr = today.toLocaleDateString() + " " + today.toLocaleTimeString();

                $('#searchDateTime').text('Дата та час пошуку: ' + dateTimeStr);
            }


            parsed_data.forEach(function (entity) {
                let entityElement = `<tr class="print-no-page-break">
                            <td>${entity.full_name}</td>
                            <td>${entity.birth_date}</td>
                            <td>${entity.executive_document_reciever}</td>
                            <td class="wide-column">${entity.issuer_state_agency}
                                <br>
                                <br> ${entity.issuer_full_name}
                                <br>
                                <span> тел: <a href="${entity.issuer_phone_number}">${entity.issuer_phone_number}</a></span>
                                <br>
                                <span> email: <a
                                        href="${entity.issuer_email}">${entity.issuer_email}</a></span>
                            </td>
                            <td>${entity.executive_document_number_of_issue}</td>
                            <td>${entity.chargeback_category}</td>
                            <td class="ng">
                                <button type="button" class="btn btn--color-negative">Видалити</button>
                                <button type="button" class="btn btn--color-warning"
                                        onclick="window.location='update_debt.html'">Редагувати
                                </button>
                            </td>
                        </tr>`;

                $("#physicalResults").append(entityElement);
            });


            $('html, body').animate({
                scrollTop: resTable.offset().top
            }, 1000);

        } else {

        }
    }
);



