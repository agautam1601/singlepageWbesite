

function showError(data) {
    if (data.code) {
        var msgText;
        if (data.msg === 'Invalid Username')
        {
            msgText = 'invalidusername';
        } else
            'invalidpassword';
        $('.error-div').css('display', 'inline-block').text(msgText);
        console.log(data.msg);
        $('.glyphicon-refresh ').addClass('collapse');
    }
}
function validateEmail(email) {    //forWhat is for import users
    var val = email;
    var atpos = val.indexOf("@");
    var dotpos = val.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= val.length) {
        
            $(email).addClass('error');
            $(email).val('');
            $(email).attr('placeholder', 'wrong email address');  
        return false;
    } else{
        return true;
    }     
    
}


