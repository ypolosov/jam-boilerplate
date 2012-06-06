b-grid
======

CSS grid generation class.

Configurating
-------------

Set the following variables in `blocks/config.styl`:

    gridColumns — number of columns.

    gridColumnWidth — column width.
    gridGutterWidth	= space between columns.

    fluidGridContainerMinWidth — min width for fluid grid (default — width of fixed-width version)
    fluidGridContainerMaxWidth = max width for fluid grid.

Usage
-----

1. `b-grid` — class for base element of layout.
2. `b-grid_type_fluid` — modifier for fluid layout.
3. `b-grid__row` — single row of grid.
4. `b-grid__column` — common class for all columns.
5. `b-grid__column_size_N` — column class modifier for setting column size. There N is a number of columns.
6. `b-grid__column_offset_N` — column class modifier for setting left offset. There N is a size offset in columns.

Example
-------

    <div class="b-grid b-grid_type_fluid">
        <div class="b-grid__row">
            <div class="grid__column grid__column_size_12">content</div>
        </div>
        <div class="b-grid__row">
            <div class="grid__column grid__column_size_4">content</div>
            <div class="grid__column grid__column_size_4 grid__column_offset_4">content</div>
        </div>
    </div>