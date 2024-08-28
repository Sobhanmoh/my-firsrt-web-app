const div1 = document.getElementById('div1')
const but1 = document.getElementById('btn1')
const but2 = document.getElementById('btn2')
const but3 = document.getElementById('btn3')
const email = document.getElementById('email')

but1. addEventListener('click',function () {
    div1.textContent = ''

})

but2. addEventListener('click', function () {
    div1.textContent = email.value
})

but3. addEventListener('click', function () {
    email.textContent = ''
})


function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}