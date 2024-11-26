$(document).ready(function() {
    const character = $('#character');
    
    $('.excited-btn').click(function() {
        character.text("OMG! This is AMAZING!! Let's do this again!!! 😆").removeClass().addClass('excited');
    });
    
    $('.curious-btn').click(function() {
        character.text("Huh What’s that? Tell me more! 👀").removeClass().addClass('curious');
    });
    
    $('.sad-btn').click(function() {
        character.text("Oh no... I feel so sad right now 😔 What happened?").removeClass().addClass('sad');
    });

    $('.angry-btn').click(function() {
        character.text("You did WHAT?! I'm SO MAD! 😡 Grrr").removeClass().addClass('angry');
    });
});
