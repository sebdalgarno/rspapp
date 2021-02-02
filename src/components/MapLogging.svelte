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
    coordinates
  } from "../consts";
  import regions from "../regions.json"
  import regionBounds from "../bbox.json"
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let year = year_min;
  export let map_palette;

  $: if (typeof map !== "undefined" && done) {
    filterLoggedAreas(year);
  }

  let done = false;

  let container;
  let map;
  let hoveredStateId = null;
  let clickedEcoregion = null;
  export let ecoregion;

  let select_bounds;
  $: if (ecoregion) {
    select_bounds = regionBounds.filter(function (x) {
      return x.ecoregion == ecoregion.value;
    });
    map.fitBounds(select_bounds[0].bbox, {
      padding: 130,
    });
    regions.forEach(function (f) {
      map.setFeatureState(
        {
          source: source_ecoregions[0],
          sourceLayer: source_layer_ecoregions[0],
          id: f.value,
        },
        { click: false }
      );
    });
    map.setFeatureState(
      {
        source: source_ecoregions[0],
        sourceLayer: source_layer_ecoregions[0],
        id: ecoregion.value,
      },
      { click: true }
    );
  }
  function filterAccumulate() {
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
            2,
            0.5,
          ],
        },
      });
      map.on("click", "ecoregions_poly", function (e) {
        dispatch("update-ecoregion", {
            value: clickedEcoregion,
          });
        if (e.features.length > 0) {
          if (clickedEcoregion) {
            regions.forEach(function (f) {
              map.setFeatureState(
                {
                  source: source_ecoregions[0],
                  sourceLayer: source_layer_ecoregions[0],
                  id: f.value,
                },
                { click: false }
              );
            });
          }
          clickedEcoregion = e.features[0].id;
          dispatch("update-ecoregion", {
            value: clickedEcoregion,
          });
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
            padding: 130,
          });
        }
      });
      map.addControl(new mapbox.NavigationControl());
      map.fitBounds(bounds);
      done = true;
    });

    map.on("mousemove", "ecoregions_poly", function (e) {
      map.getCanvas().style.cursor = "pointer";
    });
  });
</script>

<div class="rounded" style="height: 640px;" bind:this={container}>
  <slot />
</div>

<style>
</style>
