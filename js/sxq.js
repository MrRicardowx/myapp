$(function () {
    let data=[JSON.parse(localStorage.dat)]
             let atr = '';
                 if(data[0].pic){
                     atr+=
                         `
                         <li class="title1">${data[0].title}</li>
                         <li class="time1">${data[0].time}</li>
                         <li class="src1">${data[0].src}</li>
                         <li class="img1"><img src=${data[0].pic}></li>
                         <li class="content1">${data[0].content}</li>

                         `
                 }
                 else{
                     atr+=`
                          <li class="title1">${data[0].title}</li>
                         <li class="time1">${data[0].time}</li>
                         <li class="src1">${data[0].src}</li>
                         <li class="content1">${data[0].content}</li>
                         `
                 }
             $('.content').html(atr)
    $('.back').click(function () {
        history.back()
    })
})