class ScrollTo
  constructor: ->
    
  go: (to, from) ->
    to = $(to)
    $('html, body').animate
      scrollTop: to.offset().top
    ,
      duration: Math.sqrt(Math.abs(from.offset().top - to.offset().top) * 100)
      queue: false

smooth_scroll = new ScrollTo

$('[data-scrollto]').on 'click', (e) ->
  e.preventDefault()
  smooth_scroll.go $(this).data('scrollto'), $(this)
