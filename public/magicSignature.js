$(document).ready(function() {
    $.ajax({
        type : 'GET',
        url : '/api/getHash',
        encode: true
    })
    .done((data) => {
        console.log(data);
        $('input[name=privateKey]').val(data.private);
        $('input[name=publicKey]').val(data.public);
    });
    $('#submit1').on('click', event => {
        var  private = {
            data: $('input[name=privateKey]').val()
        }
        console.log(private);
    })
    $('#submit2').on('click', event => {
        var  private = {
            data: $('input[name=publicKey]').val()
        }
        console.log(private);
    })
})