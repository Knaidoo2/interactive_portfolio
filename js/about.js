$(document).ready(function() {
    $('.nav-text').on('mouseover', function() {
        const target = $(this).data('target');
        $('.nav-button').hide();
        $(`.nav-button[data-target="${target}"]`).show();
    }).on('mouseout', function() {
        $('.nav-button').hide();
    });

    $('.nav-button').on('click', function() {
        const targetId = $(this).data('target');
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

$(document).ready(function() {
    $('.nav-text').on('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        const target = $(this).attr('href').substring(1); // Get target section ID

        // Smooth scroll to the target section
        $('html, body').animate({
            scrollTop: $('#' + target).offset().top
        }, 800, function() {
            // After scrolling, show the target section with animation
            $('.section').removeClass('show').hide(); // Hide all sections
            $('#' + target).addClass('show').fadeIn(); // Show the target section
        });
    });
});

console.log(window.getComputedStyle(document.getElementById('terminal')).fontSize);


