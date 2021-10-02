$(document).ready(function () {
    //Side Nav links Click
    $('.side-nav a').click(function () {
        $('.side-nav a').removeClass('active');
        $(this).addClass('active');
    });





    //Date & Time
    function showTime() {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let time = date.toLocaleTimeString();

        let currentDateTime = `${day}-${month}-${year} , ${time}`;
        $('#dateTime').text(currentDateTime);
        setTimeout(showTime, 1000);
    }
    showTime();



    //Show Name Field in Add-invoice form
    $('.add-invoice').on('submit', function (e) {
        var phoneNum = $('#phone-number').val();
        e.preventDefault();
        if (phoneNum !== null) {
            $('.name-input-group').show(300);
        }
    })

    //
    $('.pay-method input[type="checkbox"]').on('click', function () {

        if ($(this).prop("checked") == true) {
            $(this).parents('.pay-method').find('.money').show(300);
            console.log($(this).attr('id'));
        } else {
            $(this).parent().find('.money').hide(300);
        }
    })


})