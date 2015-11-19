class Equalizer
  constructor: (@el, selector = '*', @min = 0, @max = Infinity) ->
    # Reset Counter
    @speed = @el.data('resize-speed') || 0
    @tallest = 0
    @columns = @el.children selector

    $(window).on 'resize.columns', =>
      if ( @min < $(window).width() < @max ) then @calc() else @reset()

  calc: ->
    # Unset Heights
    @last = @tallest
    @reset()
    height = 0

    $.each @columns, (index, column) =>
      height = $(column).outerHeight()
      @tallest = height if height > @tallest

    @set()

  reset: ->
    @tallest = 0
    @columns.css 'height', ''

  set: ->
    @columns.css 'height', @last
    @columns.animate
      'height': @tallest
    ,
      duration: @speed
      queue: false

new Equalizer $('.action article'), '*', 1024
