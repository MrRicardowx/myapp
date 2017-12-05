$(function () {
    let arr;
    let sousuo='';
    let str=''
    let keyword;
    if(localStorage.ls){
        list()
    }
    function list() {
        sousuo=localStorage.ls;
        arr=sousuo.split(',')
        arr.shift()
        arr.slice(-6).forEach(function (val) {
            str+=
                `
                <span>${val}</span>
                `
        })
        $('.main').html(str)
    }
    $('.back').click(function () {
        history.back()
    })
    $(':text').blur(function () {
        keyword=$(this).val()
        if($(this).val()==''){
            return;
        }else{
            if(sousuo.includes($(this).val())){
                $(this).val('')
                return;
            }else{
                sousuo+=','+($(this).val())
                keyword=$(this).val()
                $(this).val('')
            }
        }
        localStorage.ls=sousuo;
    })
    function search(keyword){
        $.ajax({
            url:'https://api.jisuapi.com/news/search?keyword='+keyword+'&appkey=aeaaaaf1ab84e812',

            dataType:'JSONP',
            beforeSend:function () {
                $('.zz').show()
            },
            success:function (em) {
                console.log(em)
                $('.zz').hide()
                $('.main').hide()
                let crr=em.result.list;
                let atr='';
                console.log(crr)
                crr.forEach(function (val) {
                    if(!val.pic){
                        atr+=
                            `
                               <li class=nopic>
                                    <a>
                                         <div class="title">${val.title}</div>
                                         <div class="nr">${val.content}</div>
                                    </a>
                                </li>
                                 `
                    }
                    else{
                        atr+=
                            `
                                 <li class=list>
                                    <a>
                                        <div class="left"><img src="${val.pic}" alt=""></div>
                                        <div class="con">${val.title}
                                            <div class="time">${val.src}&nbsp${val.time}</div>
                                        </div>

                                    </a>
                                </li>
                                `
                    }
                })
                $('.content').html(atr)
                let brr=document.querySelectorAll('.nr')
                let a=[...brr]
                a.forEach(function (val, index) {
                    $(val).children().css('display','none')
                    $(val).children().first().css({'white-space':'nowrap','height':'0.4rem','overflow':'hidden','text-overflow':'ellipsis','display':'block'})
                })
                $('.content').on('click','li',function () {
                    let index=$(this).index()
                    let aa=crr[index]
                    localStorage.dat=JSON.stringify(aa)
                    location.href='sxq.html'
                })
            }
        })
    }
    $('.sbtn').click(function (e) {
        console.log(keyword)
        e.preventDefault()
        if(keyword==''){
            return;
        }else{
            console.log(keyword)
            search(keyword)
        }
    })
    $('.main').on('click','span',function () {
        let aa=$(this).html()
        search(aa)
    })
})
