$(document).ready(function() {

    //file upload
    (function() {
        var inputFile = $('.file-upload > input[type="file"]');
        inputFile.change(function() {
            var fileNameContainer = $('</p>'),
                oldFileContainer = $(this).parent('.file-upload').nextAll('p'),
                inputValue = $(this).val().replace(/C:\\fakepath\\/i, '');

            oldFileContainer.remove();
            fileNameContainer.html(inputValue);
            $(this).parent('.file-upload').after(fileNameContainer);
        });
    })();

    //delete tone confirmation
    (function() {
        var deleteModal = $('#deleteTone'),
            yesBtn = deleteModal.find('.btn-primary');
        yesBtn.click(function(event) {
            //create the alert element
            var alert = $('<div class="container alert">').prepend('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'),
                confirmationTxt = 'Tamali Maak tone was deleted successfully';

            //append the notification message and add corresponding class
            //Add Class alert-danger if the process failed
            alert.append(confirmationTxt).addClass('alert-success');

            //insert right after nav to be at the top of the page
            $('nav').after(alert);

            //to hide the modal
            deleteModal.modal('hide');

            //scroll to the top of the page were the notification is appended
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });
    })();

    //fix fixed footer in inner pages
    (function() {
        if (!$('body').hasClass('login-page')) {
            $('html').addClass('inner');
        }
    })();

    //display conditional fields
    (function() {
        var select = $('select');

        select.change(function() {
            var hiddenInput = $(this).parent().parent().next('.addNew'),
                selectedValue = $(this).val().toUpperCase();

            if (selectedValue == 'ADD NEW') {
                hiddenInput.css('display', 'block');
            } else {
                hiddenInput.css('display', 'none');
            }
        });

    })();

});
