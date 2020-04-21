// Author Veronelli
var target = document.querySelector('.target')
var key_api = '563492ad6f91700001000001c068a286a5674b65827ce2e66e2fb163'
var next = document.querySelector('.next')
var pexels = document.querySelector('.pexels')
var i = 0;
    target.addEventListener('mouseover', function(){
        target.classList.remove('target-mouseout')
    })
    target.addEventListener('mouseout', function(){
        target.classList.add('target-mouseout')
    })

    $('.next').click(function(){
        $('.background').addClass('swipe-back')
        $('.pexels').addClass('swipe')
        setTimeout(() => {
        $('.pexels').removeClass('swipe')
        $('.background').removeClass('swipe-back')
        }, 500);
    })
    $.ajax({
        method: 'GET',
        beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization', key_api)
        },
        url: 'https://api.pexels.com/v1/search?query=landscape+perros&per_page=15&page=1',
        success: function(data){

        $('.box').append(`<img class="img-header" src="${data.photos[i].src.landscape}">`)
        $('.background').append(`<img class="imgback" src="${data.photos[i].src.landscape}">`)
        console.log(data)
        $('.pexels').append(`<h4 class="photographer">Photographer: ${data.photos[i].photographer}</h4>`)
        
        $('.position').prepend(`<p>${i}/15</p>`)
            $('.next').click(function(){
                    i=i+1
                    console.log(i)
                    $('.img-header').remove()
                    $('.photographer').remove()
                    $('.imgback').remove()
                    $('.position > p').remove()

                    if(!(i<=data.photos.length-1)){
                        i=0
                    }
                    $('.position').prepend(`<p>${i}/15</p>`)
                    $('.background').append(`<img class="imgback" src="${data.photos[i].src.landscape}">`)
                    $('.pexels').append(`<h4 class="photographer">Photographer: ${data.photos[i].photographer}</h4>`)
                    $('.box').append(`<img class="img-header" src="${data.photos[i].src.landscape}">`)
                })
        }
      })
