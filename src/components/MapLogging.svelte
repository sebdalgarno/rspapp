<script>
  import { onMount, onDestroy } from "svelte";
  import { mapbox, key } from "../mapbox.js";
  import bbox from "@turf/bbox";
  import {
    year_min,
    tileset_harvest,
    source_layer_harvest,
    source_harvest,
    tileset_ecoregions,
    source_layer_ecoregions,
    source_ecoregions,
    mapbox_style,
    bounds,
    coordinates,
  } from "../consts";

  export let year = year_min;
  export let map_palette;

  $: if (typeof map !== "undefined" && done) {
    filterLoggedAreas(year);
  }

  let done = false;

  let fill_opacity = 0.75;

  let container;
  let map;
  let hoveredStateId = null;
  let clickedEcoregion = null;
  console.log(clickedEcoregion)


  function filterAccumulate() {
    //   map.setFilter("logged_simple1", ["<=", "year", year]);
    map.setFilter("harvest", ["<=", "year", year]);
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
    map.setPaintProperty("harvest", "fill-color", paint_property(year));
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
      map.addSource(source_harvest[0], {
        type: "vector",
        url: tileset_harvest,
        promoteId: "year",
      });
      map.addLayer({
        id: "harvest",
        source: source_harvest[0],
        "source-layer": source_layer_harvest[0],
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
      map.addSource(source_ecoregions[0], {
        type: "vector",
        url: tileset_ecoregions,
        promoteId: "name",
      });

      map.addLayer({
        id: "ecoregions_poly",
        source: source_ecoregions[0],
        "source-layer": source_layer_ecoregions[0],
        type: "fill",
        layout: {},
        paint: {
          "fill-opacity": 0,
        },
      });
      map.addLayer({
        id: "ecoregions_line",
        source: source_ecoregions[0],
        "source-layer": source_layer_ecoregions[0],
        type: "line",
        paint: {
          "line-color": [
            "case",
            ["boolean", ["feature-state", "click"], false],
            "#2962ff",
            "#010203",
          ],
          "line-width": [
            "case",
            ["boolean", ["feature-state", "click"], false],
            1.5,
            0.5,
          ],
        },
      });
      map.on("click", "ecoregions_poly", function (e) {
        if (e.features.length > 0) {
          if (clickedEcoregion) {
            map.setFeatureState(
              {
                source: source_ecoregions[0],
                sourceLayer: source_layer_ecoregions[0],
                id: clickedEcoregion,
              },
              { click: false }
            );
          }
          clickedEcoregion = e.features[0].id;
          map.setFeatureState(
            {
              source: source_ecoregions[0],
              sourceLayer: source_layer_ecoregions[0],
              id: clickedEcoregion,
            },
            { click: true }
          );
          var bounds = bbox(e.features[0].geometry);
          map.fitBounds(bounds, {
            padding: 100,
          });
        }
      });
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

<div class="rounded" style="height: 640px;" bind:this={container}>
  <slot />
</div>

<style>
  .mapboxgl-ctrl-attrib-inner {
    display: none !important;
  }
</style>
