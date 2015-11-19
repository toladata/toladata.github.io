class Twinkle
  constructor: (@context) ->
    @canvas =
      width: @context.outerWidth() * 1.5
      height: @context.outerHeight() * 1.5

    @container = $('<div/>')
      .addClass 'wrapper'
      .width @canvas.width
      .height @canvas.height

    @context.append @container

    @cell =
      width: 32
      height: 32

    @columns = Math.floor @canvas.width / @cell.width
    @rows = Math.floor @canvas.height / @cell.height

    @cells = []

    @spawn_tiles @columns * @rows
    @reveal()

  spawn_tiles: (count) ->
    for index in [0..count]
      cell = $('<div/>')
        .addClass 'cell'
        .addClass if ( Math.random() > 0.5 ) then 'one' else 'zero'
        .data 'cell-id', index
      @cells.push new Cell cell

    @container.append cell.el for cell in @cells

  reveal: ->
    @show_random true

  show_random: (propagate) ->
    hidden = (index for cell, index in @cells when !cell.visible)
    if hidden.length
      @show hidden[Math.floor(Math.random() * hidden.length)]
      window.setTimeout =>
        @show_random propagate
      , 50

  show: (cell) ->
    @cells[cell].show()

class Cell
  constructor: (@el) ->
    @visible = false

    @el.on 'mouseenter touchmove', => @show()

  show: ->
    @visible = true
    @el.addClass 'visible'

  hide: ->
    @visible = false
    @el.removeClass 'visible'

new Twinkle $('aside.visualizer')
