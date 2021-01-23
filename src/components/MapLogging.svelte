<script>
    import { onMount, onDestroy } from "svelte";
    import { mapbox, key } from "../mapbox.js";
    import {
      year_min,
      year_max,
      tileset_logging,
      coordinates,
      source_layer,
      mapbox_style,
      base_colors,
    } from "../consts";
  
    export let year = year_min;
    export let map_palette;
    export let bounds;

    // console.log(bounds)
    // console.log(map_palette)
    // console.log(year)
    
    $: if (typeof map !== "undefined" && done) {
      filterLoggedAreas(year);
    }
  
    let done = false;
  
    let fill_opacity = 0.75;
  
    let container;
    let map;
    let hoveredStateId = null;
  
    function filterAccumulate() {
      map.setFilter("logged_simp", ["<=", "YearHarvested", year]);
      map.setFilter("logged", ["<=", "YearHarvested", year]);
    }
  
    let paint_property = (year) => {
      return [
        "match",
        ["-", year, ["number", ["get", "YearHarvested"]]],
        ...map_palette,
        "#AAAAAA",
      ];
    };
  
    function setPalette(year) {
      map.setPaintProperty("logged_simp", "fill-color", paint_property(year));
      map.setPaintProperty("logged", "fill-color", paint_property(year));
    }
  
    function filterLoggedAreas(year) {
        setPalette(year);
        filterAccumulate();
    }
  
    onMount(async () => {
        console.log(bounds)
      map = new mapbox.Map({
        container,
        style: mapbox_style,
        center: coordinates,
        zoom: 5,
        bearing: 10,
        attributionControl: false,
        logoPosition: "bottom-right",
      });
  
      map.on("load", function () {
        map.addSource("logged", {
          type: "vector",
          url: tileset_logging,
          promoteId: "YearHarvested",
        });
        map.addLayer({
          id: "logged_simp",
          source: "logged",
          "source-layer": source_layer[0],
          type: "fill",
          filter: ["==", "YearHarvested", year],
          paint: {
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              0.5,
              1,
            ],
          },
        });
        map.addLayer({
          id: "logged",
          source: "logged",
          "source-layer": source_layer[1],
          type: "fill",
          filter: ["==", "YearHarvested", year],
          paint: {
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              0.5,
              1,
            ],
          },
        });
        map.addControl(new mapbox.AttributionControl(), "bottom-right");
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
    .map {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      z-index: 0.1;
    }
  
    .mapbox-popup {
      z-index: 100;
      max-width: 400px;
      font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
    }
  </style>
  
  <div class="h-96" bind:this={container}>
    <slot />
  </div>
  