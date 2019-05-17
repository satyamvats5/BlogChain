$(document).ready(function() {
    $('#randomButton').on('click', (event) => {
        var formData = {
            private : $('input[name=privateKey]').val(),
            public : $('input[name=publicKey]').val()
        }
        // console.log(formData);
        $.ajax({
            type : 'POST',
            url : '/api/setKey',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done((data) => {
            // console.log(data);
        });
    });
    $('#privateKey').change(() => {
        var formData = {
            private : $('input[name=privateKey]').val(),
            public : $('input[name=publicKey]').val()
        }
        // console.log(formData);
        $.ajax({
            type : 'POST',
            url : '/api/setKey',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done((data) => {
            // console.log(data);
        });
    });
})