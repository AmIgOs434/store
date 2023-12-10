import $ from 'jquery'

export default function set_message(text,type) {
    if (type==='standart'){
        var $item = $('<div class="message">' + text + '</div>');
    }
    if (type==='completed'){
        var $item = $('<div class="message1">' + text + '</div>');
    }
    if (type==='error'){
        var $item = $('<div class="message2">' + text + '</div>');
    }
    
    $item.appendTo($('.message-box')).delay(4000).slideDown(100, function(){
        $item.remove();
    });

}
