$(document).ready(function() {
    const character = $('#character');
    
    // Button to excite the character
    $('.excited-btn').click(function() {
        character.text("OMG! This is AMAZING!! Let's do this again!!! 😆").removeClass().addClass('excited');
    });
    
    // Button to make the character curious
    $('.curious-btn').click(function() {
        character.text("Huh What’s that? Tell me more! 👀").removeClass().addClass('curious');
    });
    
    // Button to make the character sad
    $('.sad-btn').click(function() {
        character.text("Oh no... I feel so sad right now 😔 What happened?").removeClass().addClass('sad');
    });

    // Button to make the character angry
    $('.angry-btn').click(function() {
        character.text("You did WHAT?! I'm SO MAD! 😡 Grrr").removeClass().addClass('angry');
    });
});
