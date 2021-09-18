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


})