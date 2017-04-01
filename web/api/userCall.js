
var server = 'http://www.resulio.com/resulioBackend/api/';
function contactUs(emailVal, subVal, msgVal) {
    var formData = {
        email : emailVal,
        subject : subVal,
        msg : msgVal
    };
    //console.log("email=" + emailVal + "  & subVal=" + subVal);
       $.ajax({
        type: "POST",
        url: server + 'contactus.php',
        data: formData,
         beforeSend: function () { },
        complete: function () { },
        success: function (data) {
         console.dir(data)
            if (data.code === 200) {
                console.log('success');              
                $('#dialog').dialogBox({  
                            autoHide: true,
                            time: 2000,
                            title: '',
                            content: 'Requst sent successfully',               
                });     
                setInterval(function(){location.reload()}, 2000 );               
            } else
                showError(data);
              

        },
        error: function (data) {
            console.log(data)
            showError(data);
            $('#dialog').dialogBox({
                autoHide: true,
                time: 2000,
                title: '',
                content: 'Server Response failed...'
            });
            // alert( "Server Response failed... " )
        }
    });

    }

function subscription(emailVal) {
    var formData = {
        email : emailVal       
    };
    //console.log("email=" + emailVal );
       $.ajax({
        type: "POST",
        url: server + 'subscription.php',
        data: formData,
         beforeSend: function () { },
        complete: function () { },
        success: function (data) {
         console.dir(data)
            if (data.code === 200) {
                console.log('success2');              
             $('#dialog').dialogBox({ 
                            autoHide: true,
                            time: 2000,
                            title: '',
                            content: 'Subscription resuest sent successfully',               
                });
                setInterval(function(){location.reload()}, 2000 );     
                
            } else
                showError(data);
        },
        error: function (data) {
              console.log(data)
            //showError(data);
            $('#dialog').dialogBox({
                autoHide: true,
                time: 2000,
                title: '',
                content: 'Server Response failed...'
            });
            // alert( "Server Response failed... " )
        }
    });


    }

