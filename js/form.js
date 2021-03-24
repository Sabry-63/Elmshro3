$(document).ready(function () {
    // Form Login

    // Show Password
    $(".fa-eye").click(function (e) {
        e.preventDefault();
        $(this).hide();
        $(".fa-eye-slash").fadeIn();
        $(this).siblings("input.form-control").attr("type", "text");
    });

    // Hide Password
    $(".fa-eye-slash").click(function (e) {
        e.preventDefault();
        $(this).hide();
        $(".fa-eye").fadeIn();
        $(this).siblings("input.form-control").attr("type", "password");
    });
});
