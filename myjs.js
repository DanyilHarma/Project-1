let info = $(".info").mouseenter(function () {
    $(".free-place").addClass("active");
})

info.mouseleave(function () {
    $(".free-place").removeClass("active");
})

/////Настройка Карусели/////
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

////Модальное окно////////
////Блокировка карусели///
function blockCarousel() {
    $('.owl-carousel').addClass('blocked');
}
function unblockCarousel() {
    $('.owl-carousel').removeClass('blocked');
}
/////////////////////////

///////////Создание функции для вставки//////////
function fillModal(image, name, profession) {
    $(".wrapper-img-window img").attr("src", image);
    $(".info-couch").text(name);
    $(".profession-individual").text(profession);
    $(".main-window").addClass("active");
}

$(".more").click(function (event) {////////////////смена имени,фамилии,фотогрфии
    event.preventDefault();
    $(".opacity").fadeIn();
    $(".main-window").fadeIn();
    blockCarousel();
    let name = $(this).siblings(".fi").text();
    let profession = $(this).siblings(".profession").text();
    let image = $(this).closest(".coach").find(".wrapper-img img").attr("src");
    fillModal(image, name, profession);
});

$(document).on("click", ".coachs .more", function () {///////////смена блоков с информацией о тренерах
    $(".info-coach").hide();
    let coach = $(this).attr("data-coach")
    $('.main-window [data-coach="' + coach + '"]').parent().show();
});

function setDefaultTab() {///////////// установка первой вкладки по-умолчанию
    $(".education-wrapper").addClass("active").removeClass("disable");
    $(".exp-wrap, .award").removeClass("active");
    $(".section").removeClass("active");
    $(".first").addClass("active");
}

$(".first").click(function () {///////////переход между кнопками
    $(".education-wrapper").addClass("active").removeClass("disable");
    $(".exp-wrap").removeClass("active");
    $(".award").removeClass("active");
    $(".first").addClass("active");
    $(".second").removeClass("active");
    $(".thirst").removeClass("active");
});

$(".second").click(function () {///////////переход между кнопками
    $(".exp-wrap").addClass("active");
    $(".education-wrapper").removeClass("active").addClass("disable");
    $(".award").removeClass("active");
    $(".second").addClass("active");
    $(".first").removeClass("active");
    $(".thirst").removeClass("active");
});

$(".thirst").click(function () {///////////переход между кнопками
    $(".award").addClass("active");
    $(".education-wrapper").removeClass("active").addClass("disable");
    $(".exp-wrap").removeClass("active");
    $(".thirst").addClass("active");
    $(".first").removeClass("active");
    $(".second").removeClass("active");
});

$(".close").click(function () {//////////закрытие окна
    $(".main-window").removeClass("active").fadeOut();
    $(".opacity").fadeOut();
    unblockCarousel();
    setDefaultTab();
});

///////////////////////ВАЛИДАЦИЯ для формы///////////////////////////////

let submit = $(".send-form").click(function (e) {
    e.preventDefault();
    let name = $(".name-form");
    let tel = $(".tel-form");
    let email = $(".email-form");
    let nameValue = name.val();
    let telValue = tel.val();
    let emailValue = email.val();


    if (nameValue === "") {
        name.addClass("error");
        errorMessage(name, "Введите ваше имя");
    }
    if (telValue === "" || !(/^\+\d{7,}$/).test(telValue)) {
        tel.addClass("error");
        errorMessage(tel, "Введите ваш номер телефона,который состоит из 7 чисел");

    }
    if (emailValue === "") {
        email.addClass("error");
        errorMessage(email, "Введите ваш EMAIL");
    }
    if (nameValue === "" || telValue === "" || !(/^\+\d{7,}$/).test(telValue) || emailValue === "") {
        email.addClass("error");
        tel.addClass("error");
        name.addClass("error");
        return false;
    }
    else {
        name.val(""),
            tel.val(""),
            email.val("");
        email.removeClass("error");
        name.removeClass("error");
        tel.removeClass("error");
        $(".error-message").remove();
    }
})
function errorMessage(element, message) {
    let errorMessage = element.next(".error-message");
    if (errorMessage.length > 0) {
        errorMessage.text(message);
    } else {
        let errorDiv = $("<div class='error-message'></div>");
        let errorMessage = $("<span class='error-span'></span>").text(message);

        errorDiv.append(errorMessage);


        element.parent().append(errorDiv);
        element.after(errorDiv);
    }
}



///////////////////////АДАПТИВ///////////////////////////////

//////////////////////Меню///////////////////////////////////

$(".mob-menu").click(function () {
    $(".mob-menu-window").addClass("active");
})

$(".inside-mob-window, .about, .treners, .price-menu").click(function () {
    $(".mob-menu-window").removeClass("active");
})


/////////////////////Модалка/////////////////////////////////



$(".close-adap img").click(function () {
    $(".main-window").removeClass("active").fadeOut();
    $(".opacity").fadeOut();
    $(".exp-wrap,.award").removeClass("active");
    $(".main-window").css("height", "98vh");
    unblockCarousel();
    // setDefaultTab();
})


$(document).ready(function () {
    if ($(window).width() < 900) {
        $(".education-wrapper").show();
        $(".select-info").change(function () {
            let selectInfo = $(this).val();
            $("." + selectInfo).show();
            if (selectInfo === "education-wrapper") {
                $(".exp-wrap,.award").hide();
            }
            if (selectInfo === "exp-wrap") {
                $(".education-wrapper,.award").hide();
            }
            if (selectInfo === "award") {
                $(".education-wrapper,.exp-wrap").hide();
            }
        })
    }
})

