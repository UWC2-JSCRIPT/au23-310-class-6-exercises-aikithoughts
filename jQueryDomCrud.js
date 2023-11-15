// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

$(document).ready(function () {
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    var $buyNowLink = $('<a>', {
        text: 'Buy Now!',
        id: 'cta',
        href: '#'
    });

    // Insert the new <a> element after the last <p> element
    $('main p:last').after($buyNowLink);

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    var imgDataColor = $('img').attr('data-color');
    console.log('The data-color attribute value is:', imgDataColor);

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    $('ul li:eq(2)').addClass('highlight');

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $('p:last').remove();

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"

    $('#cta').on('click', function(e){
        e.preventDefault();
        $(this).replaceWith('<p>Added to cart!</p>');
    })


})