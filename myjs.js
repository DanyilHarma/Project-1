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
            items: 3
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
    let image = $(this).closest(".coachs").find(".wrapper-img img").attr("src");
    fillModal(image, name, profession);
});

$(document).on("click", ".coachs .more", function () {///////////смена блоков с информацией о тренерах
    $(".info-coach").hide();
    let coach = $(this).attr("data-coach")
    $('.main-window [data-coach="' + coach + '"]').parent().show();
})

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
})

$(".second").click(function () {///////////переход между кнопками
    $(".exp-wrap").addClass("active");
    $(".education-wrapper").removeClass("active").addClass("disable");
    $(".award").removeClass("active");
    $(".second").addClass("active");
    $(".first").removeClass("active");
    $(".thirst").removeClass("active");
})

$(".thirst").click(function () {///////////переход между кнопками
    $(".award").addClass("active");
    $(".education-wrapper").removeClass("active").addClass("disable");
    $(".exp-wrap").removeClass("active");
    $(".thirst").addClass("active");
    $(".first").removeClass("active");
    $(".second").removeClass("active");
})


$(".close").click(function () {//////////закрытие окна
    $(".main-window").removeClass("active").fadeOut();
    $(".opacity").fadeOut();
    unblockCarousel();
    setDefaultTab();
})



///////////////////////АДАПТИВ///////////////////////////////

//////////////////////Меню///////////////////////////////////

$(".mob-menu").click(function () {
    $(".mob-menu-window").addClass("active");
})

$(".inside-mob-window, .about, .treners, .price-menu").click(function () {
    $(".mob-menu-window").removeClass("active");



    /////////////////////Модалка/////////////////////////////////

    $(".close-adap").click(function () {
        $(".main-window").removeClass("active").fadeOut();
        $(".opacity").fadeOut();
        unblockCarousel();
        setDefaultTab();
    })


    $(document).ready(function () {
        var isAccordionInitialized = false;
        setAccordion();

        $(window).resize(function () {
            setAccordion();
        })
    })

    function setAccordion() {
        if ($(window).width() <= 940 && !$(".info-coach").hasClass("ui-accordion")) {
            $(".info-coach").each(function () {
                if (!$(this).hasClass("ui-accordion")) {
                    $(this).accordion({
                        collapsible: true,
                        active: false
                    })
                }
                isAccordionInitialized = true;
            });
        } else {
            $(".info-coach").each(function () {
                if ($(this).hasClass("ui-accordion")) {
                    $(this).accordion("destroy");
                    isAccordionInitialized = false;
                }
            });
        }
    }
})