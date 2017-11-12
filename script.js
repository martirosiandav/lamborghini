$(document).ready(function () {
    $('section.section5').find('img').on('click', function () {
        $("html").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    let b = true,
        a = true;
    $('#button').on('click', function () {
        if(a) {
            $('div.slide').animate({
                width: '150px',
            }, 600);
            a = false;
        } else {
            $('div.slide').animate({
                width: 0,
            }, 600);
            a = true;
        }
        if(b) {
            $('#button').find('span').eq(0).animate({
                marginBottom: '-3px',
            }, 250, function () {
                $(this).css('transform', "rotate(" + 225 + "deg)",)
            });
            $('#button').find('span').eq(1).animate({
                marginBottom: '-3px',
            }, 250, function () {
                $(this).css('transform', "rotate(" + '-225' + "deg)",)
            });
            $('#button').find('span').eq(2).animate({
                opacity: '0',
            }, 250);
            b = false;
        } else {
            $('#button').find('span').eq(0).animate({
                marginBottom: '6px',
            }, 250, function () {
                $(this).css('transform', "rotate(" + 0 + "deg)",)
            });
            $('#button').find('span').eq(1).animate({
                marginBottom: '6px',
            }, 250, function () {
                $(this).css('transform', "rotate(" + '0' + "deg)",)
            });
            $('#button').find('span').eq(2).animate({
                opacity: '1',
            }, 250);
            b = true;
        }
    });
});