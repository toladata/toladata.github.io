class Waypoint
  constructor: (@el) ->
    @target = $(@el.data('scrollto'))

    $(window).on 'resize.Waypoint', (e) => @measure()
    $(window).on 'scroll.Waypoint', (e) => @poll()

  measure: ->
    @offset =
      top: @target.offset().top
      bottom: @target.offset().top + @target.outerHeight()

  poll: ->
    if @in_view()
      @el.addClass 'in-view'
    else
      @el.removeClass 'in-view'

  in_view: ->
    @offset.top < ( $(window).scrollTop() + $(window).height() / 2 ) < @offset.bottom


$('[data-scrollto]').each (index, el) ->
  new Waypoint $(el)