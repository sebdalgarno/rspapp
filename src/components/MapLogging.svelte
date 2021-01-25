<script>
    import { onMount, onDestroy } from "svelte";
    import { mapbox, key } from "../mapbox.js";
    import {
      year_min,
      year_max,
      tileset_logging,
      coordinates,
      source_layer,
      source,
      mapbox_style,
      base_colors,
    } from "../consts";
  
    export let year = year_min;
    export let map_palette;
    export let bounds;
    
    $: if (typeof map !== "undefined" && done) {
      filterLoggedAreas(year);
    }
  
    let done = false;
  
    let fill_opacity = 0.75;
  
    let container;
    let map;
    let hoveredStateId = null;
  
    function filterAccumulate() {
    //   map.setFilter("logged_simple1", ["<=", "year", year]);
      map.setFilter("logged_simple10", ["<=", "year", year]);
    }
  
    let paint_property = (year) => {
      return [
        "match",
        ["-", year, ["number", ["get", "year"]]],
        ...map_palette,
        "#AAAAAA",
      ];
    };
  
    function setPalette(year) {
    //   map.setPaintProperty("logged_simple1", "fill-color", paint_property(year));
      map.setPaintProperty("logged_simple10", "fill-color", paint_property(year));
    }
  
    function filterLoggedAreas(year) {
        setPalette(year);
        filterAccumulate();
    }
  
    onMount(async () => {
      map = new mapbox.Map({
        container,
        style: mapbox_style,
        center: coordinates,
        zoom: 3,
        bearing: 0,
        attributionControl: false,
        // logoPosition: "bottom-right",
      });
  
      map.on("load", function () {
        map.addSource(source[0], {
          type: "vector",
          url: tileset_logging,
          promoteId: "year",
        });
        map.addLayer({
          id: "logged_simple10",
          source: source[0],
          "source-layer": source_layer[0],
          type: "fill",
          filter: ["==", "year", year],
          paint: {
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              0.5,
              1,
            ],
          },
        });
        // map.addLayer({
        //   id: "logged_simple10",
        //   source: "logged_multilayer-79pr0l",
        //   "source-layer": source_layer[1],
        //   type: "fill",
        //   filter: ["==", "year", year],
        //   paint: {
        //     "fill-opacity": [
        //       "case",
        //       ["boolean", ["feature-state", "hover"], false],
        //       0.5,
        //       1,
        //     ],
        //   },
        // });
        map.addControl(new mapbox.NavigationControl());
        map.fitBounds(bounds);
        done = true;
      });
  
    //   var popup = new mapbox.Popup({
    //     closeButton: false,
    //     closeOnClick: false,
    //   });
  
      /////// hover popups for logging areas
    //   map.on("mousemove", "logged", function (e) {
    //     map.getCanvas().style.cursor = "pointer";
  
    //     var coordinates = e.lngLat;
    //     var description = `
    //     <p class='inline-block font-bold'> logged in ${e.features[0].properties.YearHarvested}</p>`;
    
    //     popup.setLngLat(coordinates).setHTML(description).addTo(map);
    //   });
    });
  </script>
  
  <style>
.mapboxgl-ctrl-attrib-inner {
    display: none !important;

}
  </style>
  
  <div class="rounded" style="height: 640px;" bind:this={container}>
    <slot />
  </div>
  