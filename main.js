$( document ).ready(function(){
    $('.overlay').on('click', function(e) {
        if (e.target !== this) {
          return;
        }
        $('.overlay').hide();
      });
      $('input[type=radio][name=number_of_children][value="0"]').prop('checked', true)
})
function add_btn_click(param){
    first = $('#first_add_btn').val()
    if(first=='true'){
        li_elem = param.parentElement.parentElement
        li_elem_parent = li_elem.parentElement
    }else{
        console.log('second')
        li_elem = param.parentElement.parentElement
        li_elem_parent = li_elem.parentElement
    }
    $('.overlay').show()
    $('.modal').show()
    $('input[type=radio][name=number_of_children]').change(function(){
        modal =this
        if(modal.value==1){
            $('#child_1').show()
            $('#form_inputs').show()
            $('.radio_btns').hide()
        }else if(modal.value==2){
            $('#form_inputs').show()
            $('#child_1').show()
            $('#child_2').show()
            $('.radio_btns').hide()
        }else{
            return
        }
        $('#submit_form').on('click',function(){
            $('.modal').hide()
            $('.overlay').hide()
            if (modal.value == 1) {
                child_1 = $('#child_1').val()
                var html = `<ul>
                    <li>
                        <input class="input_div_value" type="text" value="${child_1}" >
                        <ul><li><button class="add_btn" onclick="add_btn_click(this)"><h1 class="btn-h1">+</h1></button></li></ul>
                    </li>
                </ul>`
            
                li_elem_parent.removeChild(li_elem)
                li_elem_parent_html = li_elem_parent.innerHTML
                li_elem_parent_html += html
                li_elem_parent.innerHTML = li_elem_parent_html
                $('input[type=radio][name=number_of_children][value="0"]').prop('checked', true)
                $('#child_1').hide()
                $('#child_1').val('')
                $('#form_inputs').hide()
                $('.radio_btns').show()
            }
            else if (modal.value == 2) {
                child_1 = $('#child_1').val()
                child_2 = $('#child_2').val()
                var html = `<ul>
                    <li>
                        <input class="input_div_value" type="text" value="${child_1}" >
                        <ul><li><button class="add_btn" onclick="add_btn_click(this)"><h1 class="btn-h1">+</h1></button></li></ul>
                    </li>
                    <li>
                        <input class="input_div_value" type="text" value="${child_2}" >
                        <ul><li><button class="add_btn" onclick="add_btn_click(this)"><h1 class="btn-h1">+</h1></button></li></ul>
                    </li>
                </ul>`
                li_elem_parent.removeChild(li_elem)
                li_elem_parent_html = li_elem_parent.innerHTML
                li_elem_parent_html += html
                li_elem_parent.innerHTML = li_elem_parent_html
                $('input[type=radio][name=number_of_children][value="0"]').prop('checked', true)
                $('#form_inputs').hide()
                $('#child_1').hide()
                $('#child_2').hide()   
                $('#child_1').val('')
                $('#child_2').val('')   
                $('.radio_btns').show()
            }
            $('.input_div_value').dblclick(function(){
                input = this.parentElement
                input_ul_parent = input.parentElement
                var delete_li = confirm("do you want to delete");
                if (delete_li == true) {
                    input_ul_parent.removeChild(input)
                    if($(input_ul_parent).children("li").length==0){
                        html = `<li><button class="add_btn" onclick="add_btn_click(this)"><h1 class="btn-h1">+</h1></button></li>`
                        input_ul_parent.innerHTML+=html
                    }
                } else {
                    return
                } 
            })
        })
    })
}
