$(function () {
    let aa = localStorage.index;
    let bb = localStorage.channel;
    console.log(aa,bb)
        $.ajax({
            url: 'https://api.jisuapi.com/news/get?channel=' + bb + '&start=' + aa + '&num=1&appkey=aeaaaaf1ab84e812',
            dataType: 'JSONP',
            beforeSend: function () {
                $('.zz').show()
            },
            success: function (em) {
                $('.zz').hide()
                let crr = em.result.list;
                console.log(crr)
                let atr = '';
                crr.forEach(function (val) {
                    if(val.pic){
                        atr+=
                            `
                        <li class="title1">${val.title}</li>
                        <li class="time1">${val.time}</li>
                        <li class="src1">${val.src}</li>
                        <li class="img1"><img src=${val.pic}></li>
                        <li class="content1">${val.content}</li>
                        `
                    }
                    else{
                        atr+=`
                         <li class="title1">${val.title}</li>
                        <li class="time1">${val.time}</li>
                        <li class="src1">${val.src}</li>
                        <li class="content1">${val.content}</li>
                        `
                    }
                })
                $('.content').html(atr)
            }
        })
    $('.back').click(function () {
        history.back()
    })
})