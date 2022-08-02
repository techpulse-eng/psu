"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_map_cluster-layer_jsx"],{

/***/ "./Components/map/Cluster.js":
/*!***********************************!*\
  !*** ./Components/map/Cluster.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerClusterGroup": () => (/* binding */ MarkerClusterGroup),
/* harmony export */   "MarkerCluster": () => (/* binding */ MarkerCluster),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/MapLayer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);






var _excluded = ["children", "leaflet"];



__webpack_require__(/*! ./MarkerCluster.css */ "./Components/map/MarkerCluster.css");

__webpack_require__(/*! ./MarkerCluster.Default.css */ "./Components/map/MarkerCluster.Default.css");
/*
 * L.MarkerClusterGroup extends L.FeatureGroup by clustering the markers contained within
 */


var MarkerClusterGroup = (leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerClusterGroup) = leaflet__WEBPACK_IMPORTED_MODULE_6___default().FeatureGroup.extend({
  options: {
    maxClusterRadius: 80,
    //A cluster will cover at most this many pixels from its center
    iconCreateFunction: null,
    clusterPane: (leaflet__WEBPACK_IMPORTED_MODULE_6___default().Marker.prototype.options.pane),
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    singleMarkerMode: false,
    disableClusteringAtZoom: null,
    // Setting this to false prevents the removal of any clusters outside of the viewpoint, which
    // is the default behaviour for performance reasons.
    removeOutsideVisibleBounds: true,
    // Set to false to disable all animations (zoom and spiderfy).
    // If false, option animateAddingMarkers below has no effect.
    // If L.DomUtil.TRANSITION is falsy, this option has no effect.
    animate: true,
    //Whether to animate adding markers after adding the MarkerClusterGroup to the map
    // If you are adding individual markers set to true, if adding bulk markers leave false for massive performance gains.
    animateAddingMarkers: false,
    // Make it possible to provide custom function to calculate spiderfy shape positions
    spiderfyShapePositions: null,
    //Increase to increase the distance away that spiderfied markers appear from the center
    spiderfyDistanceMultiplier: 1,
    // Make it possible to specify a polyline options on a spider leg
    spiderLegPolylineOptions: {
      weight: 1.5,
      color: '#222',
      opacity: 0.5
    },
    // When bulk adding layers, adds markers in chunks. Means addLayers may not add all the layers in the call, others will be loaded during setTimeouts
    chunkedLoading: false,
    chunkInterval: 200,
    // process markers for a maximum of ~ n milliseconds (then trigger the chunkProgress callback)
    chunkDelay: 50,
    // at the end of each interval, give n milliseconds back to system/browser
    chunkProgress: null,
    // progress callback: function(processed, total, elapsed) (e.g. for a progress indicator)
    //Options to pass to the L.Polygon constructor
    polygonOptions: {}
  },
  initialize: function initialize(options) {
    leaflet__WEBPACK_IMPORTED_MODULE_6___default().Util.setOptions(this, options);

    if (!this.options.iconCreateFunction) {
      this.options.iconCreateFunction = this._defaultIconCreateFunction;
    }

    this._featureGroup = leaflet__WEBPACK_IMPORTED_MODULE_6___default().featureGroup();

    this._featureGroup.addEventParent(this);

    this._nonPointGroup = leaflet__WEBPACK_IMPORTED_MODULE_6___default().featureGroup();

    this._nonPointGroup.addEventParent(this);

    this._inZoomAnimation = 0;
    this._needsClustering = [];
    this._needsRemoving = []; //Markers removed while we aren't on the map need to be kept track of
    //The bounds of the currently shown area (from _getExpandedVisibleBounds) Updated on zoom/move

    this._currentShownBounds = null;
    this._queue = [];
    this._childMarkerEventHandlers = {
      'dragstart': this._childMarkerDragStart,
      'move': this._childMarkerMoved,
      'dragend': this._childMarkerDragEnd
    }; // Hook the appropriate animation methods.

    var animate = (leaflet__WEBPACK_IMPORTED_MODULE_6___default().DomUtil.TRANSITION) && this.options.animate;
    leaflet__WEBPACK_IMPORTED_MODULE_6___default().extend(this, animate ? this._withAnimation : this._noAnimation); // Remember which MarkerCluster class to instantiate (animated or not).

    this._markerCluster = animate ? (leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerCluster) : (leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerClusterNonAnimated);
  },
  addLayer: function addLayer(layer) {
    if (layer instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LayerGroup)) {
      return this.addLayers([layer]);
    } //Don't cluster non point data


    if (!layer.getLatLng) {
      this._nonPointGroup.addLayer(layer);

      this.fire('layeradd', {
        layer: layer
      });
      return this;
    }

    if (!this._map) {
      this._needsClustering.push(layer);

      this.fire('layeradd', {
        layer: layer
      });
      return this;
    }

    if (this.hasLayer(layer)) {
      return this;
    } //If we have already clustered we'll need to add this one to a cluster


    if (this._unspiderfy) {
      this._unspiderfy();
    }

    this._addLayer(layer, this._maxZoom);

    this.fire('layeradd', {
      layer: layer
    }); // Refresh bounds and weighted positions.

    this._topClusterLevel._recalculateBounds();

    this._refreshClustersIcons(); //Work out what is visible


    var visibleLayer = layer,
        currentZoom = this._zoom;

    if (layer.__parent) {
      while (visibleLayer.__parent._zoom >= currentZoom) {
        visibleLayer = visibleLayer.__parent;
      }
    }

    if (this._currentShownBounds.contains(visibleLayer.getLatLng())) {
      if (this.options.animateAddingMarkers) {
        this._animationAddLayer(layer, visibleLayer);
      } else {
        this._animationAddLayerNonAnimated(layer, visibleLayer);
      }
    }

    return this;
  },
  removeLayer: function removeLayer(layer) {
    if (layer instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LayerGroup)) {
      return this.removeLayers([layer]);
    } //Non point layers


    if (!layer.getLatLng) {
      this._nonPointGroup.removeLayer(layer);

      this.fire('layerremove', {
        layer: layer
      });
      return this;
    }

    if (!this._map) {
      if (!this._arraySplice(this._needsClustering, layer) && this.hasLayer(layer)) {
        this._needsRemoving.push({
          layer: layer,
          latlng: layer._latlng
        });
      }

      this.fire('layerremove', {
        layer: layer
      });
      return this;
    }

    if (!layer.__parent) {
      return this;
    }

    if (this._unspiderfy) {
      this._unspiderfy();

      this._unspiderfyLayer(layer);
    } //Remove the marker from clusters


    this._removeLayer(layer, true);

    this.fire('layerremove', {
      layer: layer
    }); // Refresh bounds and weighted positions.

    this._topClusterLevel._recalculateBounds();

    this._refreshClustersIcons();

    layer.off(this._childMarkerEventHandlers, this);

    if (this._featureGroup.hasLayer(layer)) {
      this._featureGroup.removeLayer(layer);

      if (layer.clusterShow) {
        layer.clusterShow();
      }
    }

    return this;
  },
  //Takes an array of markers and adds them in bulk
  addLayers: function addLayers(layersArray, skipLayerAddEvent) {
    if (!leaflet__WEBPACK_IMPORTED_MODULE_6___default().Util.isArray(layersArray)) {
      return this.addLayer(layersArray);
    }

    var fg = this._featureGroup,
        npg = this._nonPointGroup,
        chunked = this.options.chunkedLoading,
        chunkInterval = this.options.chunkInterval,
        chunkProgress = this.options.chunkProgress,
        l = layersArray.length,
        offset = 0,
        originalArray = true,
        m,
        started,
        process,
        needsClustering;

    if (this._map) {
      started = new Date().getTime();
      process = leaflet__WEBPACK_IMPORTED_MODULE_6___default().bind(function () {
        var start = new Date().getTime(),
            elapsed,
            markers,
            otherMarker; // Make sure to unspiderfy before starting to add some layers

        if (this._map && this._unspiderfy) {
          this._unspiderfy();
        }

        for (; offset < l; offset++) {
          if (chunked && offset % 200 === 0) {
            // every couple hundred markers, instrument the time elapsed since processing started:
            elapsed = new Date().getTime() - start;

            if (elapsed > chunkInterval) {
              break; // been working too hard, time to take a break :-)
            }
          }

          m = layersArray[offset]; // Group of layers, append children to layersArray and skip.
          // Side effects:
          // - Total increases, so chunkProgress ratio jumps backward.
          // - Groups are not included in this group, only their non-group child layers (hasLayer).
          // Changing array length while looping does not affect performance in current browsers:
          // http://jsperf.com/for-loop-changing-length/6

          if (m instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LayerGroup)) {
            if (originalArray) {
              layersArray = layersArray.slice();
              originalArray = false;
            }

            this._extractNonGroupLayers(m, layersArray);

            l = layersArray.length;
            continue;
          } //Not point data, can't be clustered


          if (!m.getLatLng) {
            npg.addLayer(m);

            if (!skipLayerAddEvent) {
              this.fire('layeradd', {
                layer: m
              });
            }

            continue;
          }

          if (this.hasLayer(m)) {
            continue;
          }

          this._addLayer(m, this._maxZoom);

          if (!skipLayerAddEvent) {
            this.fire('layeradd', {
              layer: m
            });
          } //If we just made a cluster of size 2 then we need to remove the other marker from the map (if it is) or we never will


          if (m.__parent) {
            if (m.__parent.getChildCount() === 2) {
              markers = m.__parent.getAllChildMarkers(), otherMarker = markers[0] === m ? markers[1] : markers[0];
              fg.removeLayer(otherMarker);
            }
          }
        }

        if (chunkProgress) {
          // report progress and time elapsed:
          chunkProgress(offset, l, new Date().getTime() - started);
        } // Completed processing all markers.


        if (offset === l) {
          // Refresh bounds and weighted positions.
          this._topClusterLevel._recalculateBounds();

          this._refreshClustersIcons();

          this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds);
        } else {
          setTimeout(process, this.options.chunkDelay);
        }
      }, this);
      process();
    } else {
      needsClustering = this._needsClustering;

      for (; offset < l; offset++) {
        m = layersArray[offset]; // Group of layers, append children to layersArray and skip.

        if (m instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LayerGroup)) {
          if (originalArray) {
            layersArray = layersArray.slice();
            originalArray = false;
          }

          this._extractNonGroupLayers(m, layersArray);

          l = layersArray.length;
          continue;
        } //Not point data, can't be clustered


        if (!m.getLatLng) {
          npg.addLayer(m);
          continue;
        }

        if (this.hasLayer(m)) {
          continue;
        }

        needsClustering.push(m);
      }
    }

    return this;
  },
  //Takes an array of markers and removes them in bulk
  removeLayers: function removeLayers(layersArray) {
    var i,
        m,
        l = layersArray.length,
        fg = this._featureGroup,
        npg = this._nonPointGroup,
        originalArray = true,
        layersArray2,
        l2;

    if (!this._map) {
      for (i = 0; i < l; i++) {
        m = layersArray[i]; // Group of layers, append children to layersArray and skip.

        if (m instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LayerGroup)) {
          if (originalArray) {
            layersArray = layersArray.slice();
            originalArray = false;
          }

          this._extractNonGroupLayers(m, layersArray);

          l = layersArray.length;
          continue;
        }

        this._arraySplice(this._needsClustering, m);

        npg.removeLayer(m);

        if (this.hasLayer(m)) {
          this._needsRemoving.push({
            layer: m,
            latlng: m._latlng
          });
        }

        this.fire('layerremove', {
          layer: m
        });
      }

      return this;
    }

    if (this._unspiderfy) {
      this._unspiderfy(); // Work on a copy of the array, so that next loop is not affected.


      layersArray2 = layersArray.slice(), l2 = l;

      for (i = 0; i < l2; i++) {
        m = layersArray2[i]; // Group of layers, append children to layersArray and skip.

        if (m instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LayerGroup)) {
          this._extractNonGroupLayers(m, layersArray2);

          l2 = layersArray2.length;
          continue;
        }

        this._unspiderfyLayer(m);
      }
    }

    for (i = 0; i < l; i++) {
      m = layersArray[i]; // Group of layers, append children to layersArray and skip.

      if (m instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LayerGroup)) {
        if (originalArray) {
          layersArray = layersArray.slice();
          originalArray = false;
        }

        this._extractNonGroupLayers(m, layersArray);

        l = layersArray.length;
        continue;
      }

      if (!m.__parent) {
        npg.removeLayer(m);
        this.fire('layerremove', {
          layer: m
        });
        continue;
      }

      this._removeLayer(m, true, true);

      this.fire('layerremove', {
        layer: m
      });

      if (fg.hasLayer(m)) {
        fg.removeLayer(m);

        if (m.clusterShow) {
          m.clusterShow();
        }
      }
    } // Refresh bounds and weighted positions.


    this._topClusterLevel._recalculateBounds();

    this._refreshClustersIcons(); //Fix up the clusters and markers on the map


    this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds);

    return this;
  },
  //Removes all layers from the MarkerClusterGroup
  clearLayers: function clearLayers() {
    //Need our own special implementation as the LayerGroup one doesn't work for us
    //If we aren't on the map (yet), blow away the markers we know of
    if (!this._map) {
      this._needsClustering = [];
      this._needsRemoving = [];
      delete this._gridClusters;
      delete this._gridUnclustered;
    }

    if (this._noanimationUnspiderfy) {
      this._noanimationUnspiderfy();
    } //Remove all the visible layers


    this._featureGroup.clearLayers();

    this._nonPointGroup.clearLayers();

    this.eachLayer(function (marker) {
      marker.off(this._childMarkerEventHandlers, this);
      delete marker.__parent;
    }, this);

    if (this._map) {
      //Reset _topClusterLevel and the DistanceGrids
      this._generateInitialClusters();
    }

    return this;
  },
  //Override FeatureGroup.getBounds as it doesn't work
  getBounds: function getBounds() {
    var bounds = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLngBounds)(),
        i;

    if (this._topClusterLevel) {
      bounds.extend(this._topClusterLevel._bounds);
    }

    for (i = this._needsClustering.length - 1; i >= 0; i--) {
      bounds.extend(this._needsClustering[i].getLatLng());
    }

    bounds.extend(this._nonPointGroup.getBounds());
    return bounds;
  },
  //Overrides LayerGroup.eachLayer
  eachLayer: function eachLayer(method, context) {
    var markers = this._needsClustering.slice(),
        needsRemoving = this._needsRemoving,
        thisNeedsRemoving,
        i,
        j;

    if (this._topClusterLevel) {
      this._topClusterLevel.getAllChildMarkers(markers);
    }

    for (i = markers.length - 1; i >= 0; i--) {
      thisNeedsRemoving = true;

      for (j = needsRemoving.length - 1; j >= 0; j--) {
        if (needsRemoving[j].layer === markers[i]) {
          thisNeedsRemoving = false;
          break;
        }
      }

      if (thisNeedsRemoving) {
        method.call(context, markers[i]);
      }
    }

    this._nonPointGroup.eachLayer(method, context);
  },
  //Overrides LayerGroup.getLayers
  getLayers: function getLayers() {
    var layers = [];
    this.eachLayer(function (l) {
      layers.push(l);
    });
    return layers;
  },
  //Overrides LayerGroup.getLayer, WARNING: Really bad performance
  getLayer: function getLayer(id) {
    var result = null;
    id = parseInt(id, 10);
    this.eachLayer(function (l) {
      if (leaflet__WEBPACK_IMPORTED_MODULE_6___default().stamp(l) === id) {
        result = l;
      }
    });
    return result;
  },
  //Returns true if the given layer is in this MarkerClusterGroup
  hasLayer: function hasLayer(layer) {
    if (!layer) {
      return false;
    }

    var i,
        anArray = this._needsClustering;

    for (i = anArray.length - 1; i >= 0; i--) {
      if (anArray[i] === layer) {
        return true;
      }
    }

    anArray = this._needsRemoving;

    for (i = anArray.length - 1; i >= 0; i--) {
      if (anArray[i].layer === layer) {
        return false;
      }
    }

    return !!(layer.__parent && layer.__parent._group === this) || this._nonPointGroup.hasLayer(layer);
  },
  //Zoom down to show the given layer (spiderfying if necessary) then calls the callback
  zoomToShowLayer: function zoomToShowLayer(layer, callback) {
    var map = this._map;

    if (typeof callback !== 'function') {
      callback = function () {};
    }

    var showMarker = function () {
      // Assumes that map.hasLayer checks for direct appearance on map, not recursively calling
      // hasLayer on Layer Groups that are on map (typically not calling this MarkerClusterGroup.hasLayer, which would always return true)
      if ((map.hasLayer(layer) || map.hasLayer(layer.__parent)) && !this._inZoomAnimation) {
        this._map.off('moveend', showMarker, this);

        this.off('animationend', showMarker, this);

        if (map.hasLayer(layer)) {
          callback();
        } else if (layer.__parent._icon) {
          this.once('spiderfied', callback, this);

          layer.__parent.spiderfy();
        }
      }
    };

    if (layer._icon && this._map.getBounds().contains(layer.getLatLng())) {
      //Layer is visible ond on screen, immediate return
      callback();
    } else if (layer.__parent._zoom < Math.round(this._map._zoom)) {
      //Layer should be visible at this zoom level. It must not be on screen so just pan over to it
      this._map.on('moveend', showMarker, this);

      this._map.panTo(layer.getLatLng());
    } else {
      this._map.on('moveend', showMarker, this);

      this.on('animationend', showMarker, this);

      layer.__parent.zoomToBounds();
    }
  },
  //Overrides FeatureGroup.onAdd
  onAdd: function onAdd(map) {
    this._map = map;
    var i, l, layer;

    if (!isFinite(this._map.getMaxZoom())) {
      throw "Map has no maxZoom specified";
    }

    this._featureGroup.addTo(map);

    this._nonPointGroup.addTo(map);

    if (!this._gridClusters) {
      this._generateInitialClusters();
    }

    this._maxLat = map.options.crs.projection.MAX_LATITUDE; //Restore all the positions as they are in the MCG before removing them

    for (i = 0, l = this._needsRemoving.length; i < l; i++) {
      layer = this._needsRemoving[i];
      layer.newlatlng = layer.layer._latlng;
      layer.layer._latlng = layer.latlng;
    } //Remove them, then restore their new positions


    for (i = 0, l = this._needsRemoving.length; i < l; i++) {
      layer = this._needsRemoving[i];

      this._removeLayer(layer.layer, true);

      layer.layer._latlng = layer.newlatlng;
    }

    this._needsRemoving = []; //Remember the current zoom level and bounds

    this._zoom = Math.round(this._map._zoom);
    this._currentShownBounds = this._getExpandedVisibleBounds();

    this._map.on('zoomend', this._zoomEnd, this);

    this._map.on('moveend', this._moveEnd, this);

    if (this._spiderfierOnAdd) {
      //TODO FIXME: Not sure how to have spiderfier add something on here nicely
      this._spiderfierOnAdd();
    }

    this._bindEvents(); //Actually add our markers to the map:


    l = this._needsClustering;
    this._needsClustering = [];
    this.addLayers(l, true);
  },
  //Overrides FeatureGroup.onRemove
  onRemove: function onRemove(map) {
    map.off('zoomend', this._zoomEnd, this);
    map.off('moveend', this._moveEnd, this);

    this._unbindEvents(); //In case we are in a cluster animation


    this._map._mapPane.className = this._map._mapPane.className.replace(' leaflet-cluster-anim', '');

    if (this._spiderfierOnRemove) {
      //TODO FIXME: Not sure how to have spiderfier add something on here nicely
      this._spiderfierOnRemove();
    }

    delete this._maxLat; //Clean up all the layers we added to the map

    this._hideCoverage();

    this._featureGroup.remove();

    this._nonPointGroup.remove();

    this._featureGroup.clearLayers();

    this._map = null;
  },
  getVisibleParent: function getVisibleParent(marker) {
    var vMarker = marker;

    while (vMarker && !vMarker._icon) {
      vMarker = vMarker.__parent;
    }

    return vMarker || null;
  },
  //Remove the given object from the given array
  _arraySplice: function _arraySplice(anArray, obj) {
    var i;

    for (i = anArray.length - 1; i >= 0; i--) {
      if (anArray[i] === obj) {
        anArray.splice(i, 1);
        return true;
      }
    }
  },

  /**
   * Removes a marker from all _gridUnclustered zoom levels, starting at the supplied zoom.
   * @param marker to be removed from _gridUnclustered.
   * @param z integer bottom start zoom level (included)
   * @private
   */
  _removeFromGridUnclustered: function _removeFromGridUnclustered(marker, z) {
    var map = this._map,
        gridUnclustered = this._gridUnclustered,
        minZoom = Math.floor(this._map.getMinZoom());

    for (; z >= minZoom; z--) {
      if (!gridUnclustered[z].removeObject(marker, map.project(marker.getLatLng(), z))) {
        break;
      }
    }
  },
  _childMarkerDragStart: function _childMarkerDragStart(e) {
    e.target.__dragStart = e.target._latlng;
  },
  _childMarkerMoved: function _childMarkerMoved(e) {
    var isPopupOpen;

    if (!this._ignoreMove && !e.target.__dragStart) {
      isPopupOpen = e.target._popup && e.target._popup.isOpen();

      this._moveChild(e.target, e.oldLatLng, e.latlng);

      if (isPopupOpen) {
        e.target.openPopup();
      }
    }
  },
  _moveChild: function _moveChild(layer, from, to) {
    layer._latlng = from;
    this.removeLayer(layer);
    layer._latlng = to;
    this.addLayer(layer);
  },
  _childMarkerDragEnd: function _childMarkerDragEnd(e) {
    var dragStart = e.target.__dragStart;
    delete e.target.__dragStart;

    if (dragStart) {
      this._moveChild(e.target, dragStart, e.target._latlng);
    }
  },
  //Internal function for removing a marker from everything.
  //dontUpdateMap: set to true if you will handle updating the map manually (for bulk functions)
  _removeLayer: function _removeLayer(marker, removeFromDistanceGrid, dontUpdateMap) {
    var gridClusters = this._gridClusters,
        gridUnclustered = this._gridUnclustered,
        fg = this._featureGroup,
        map = this._map,
        minZoom = Math.floor(this._map.getMinZoom()); //Remove the marker from distance clusters it might be in

    if (removeFromDistanceGrid) {
      this._removeFromGridUnclustered(marker, this._maxZoom);
    } //Work our way up the clusters removing them as we go if required


    var cluster = marker.__parent,
        markers = cluster._markers,
        otherMarker; //Remove the marker from the immediate parents marker list

    this._arraySplice(markers, marker);

    while (cluster) {
      cluster._childCount--;
      cluster._boundsNeedUpdate = true;

      if (cluster._zoom < minZoom) {
        //Top level, do nothing
        break;
      } else if (removeFromDistanceGrid && cluster._childCount <= 1) {
        //Cluster no longer required
        //We need to push the other marker up to the parent
        otherMarker = cluster._markers[0] === marker ? cluster._markers[1] : cluster._markers[0]; //Update distance grid

        gridClusters[cluster._zoom].removeObject(cluster, map.project(cluster._cLatLng, cluster._zoom));

        gridUnclustered[cluster._zoom].addObject(otherMarker, map.project(otherMarker.getLatLng(), cluster._zoom)); //Move otherMarker up to parent


        this._arraySplice(cluster.__parent._childClusters, cluster);

        cluster.__parent._markers.push(otherMarker);

        otherMarker.__parent = cluster.__parent;

        if (cluster._icon) {
          //Cluster is currently on the map, need to put the marker on the map instead
          fg.removeLayer(cluster);

          if (!dontUpdateMap) {
            fg.addLayer(otherMarker);
          }
        }
      } else {
        cluster._iconNeedsUpdate = true;
      }

      cluster = cluster.__parent;
    }

    delete marker.__parent;
  },
  _isOrIsParent: function _isOrIsParent(el, oel) {
    while (oel) {
      if (el === oel) {
        return true;
      }

      oel = oel.parentNode;
    }

    return false;
  },
  //Override L.Evented.fire
  fire: function fire(type, data, propagate) {
    if (data && data.layer instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerCluster)) {
      //Prevent multiple clustermouseover/off events if the icon is made up of stacked divs (Doesn't work in ie <= 8, no relatedTarget)
      if (data.originalEvent && this._isOrIsParent(data.layer._icon, data.originalEvent.relatedTarget)) {
        return;
      }

      type = 'cluster' + type;
    }

    leaflet__WEBPACK_IMPORTED_MODULE_6___default().FeatureGroup.prototype.fire.call(this, type, data, propagate);
  },
  //Override L.Evented.listens
  listens: function listens(type, propagate) {
    return leaflet__WEBPACK_IMPORTED_MODULE_6___default().FeatureGroup.prototype.listens.call(this, type, propagate) || leaflet__WEBPACK_IMPORTED_MODULE_6___default().FeatureGroup.prototype.listens.call(this, 'cluster' + type, propagate);
  },
  //Default functionality
  _defaultIconCreateFunction: function _defaultIconCreateFunction(cluster) {
    var childCount = cluster.getChildCount();
    var c = ' marker-cluster-';

    if (childCount < 10) {
      c += 'small';
    } else if (childCount < 100) {
      c += 'medium';
    } else {
      c += 'large';
    }

    return new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().DivIcon)({
      html: '<div><span>' + childCount + '</span></div>',
      className: 'marker-cluster' + c,
      iconSize: new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().Point)(40, 40)
    });
  },
  _bindEvents: function _bindEvents() {
    var map = this._map,
        spiderfyOnMaxZoom = this.options.spiderfyOnMaxZoom,
        showCoverageOnHover = this.options.showCoverageOnHover,
        zoomToBoundsOnClick = this.options.zoomToBoundsOnClick; //Zoom on cluster click or spiderfy if we are at the lowest level

    if (spiderfyOnMaxZoom || zoomToBoundsOnClick) {
      this.on('clusterclick', this._zoomOrSpiderfy, this);
    } //Show convex hull (boundary) polygon on mouse over


    if (showCoverageOnHover) {
      this.on('clustermouseover', this._showCoverage, this);
      this.on('clustermouseout', this._hideCoverage, this);
      map.on('zoomend', this._hideCoverage, this);
    }
  },
  _zoomOrSpiderfy: function _zoomOrSpiderfy(e) {
    var cluster = e.layer,
        bottomCluster = cluster;

    while (bottomCluster._childClusters.length === 1) {
      bottomCluster = bottomCluster._childClusters[0];
    }

    if (bottomCluster._zoom === this._maxZoom && bottomCluster._childCount === cluster._childCount && this.options.spiderfyOnMaxZoom) {
      // All child markers are contained in a single cluster from this._maxZoom to this cluster.
      cluster.spiderfy();
    } else if (this.options.zoomToBoundsOnClick) {
      cluster.zoomToBounds();
    } // Focus the map again for keyboard users.


    if (e.originalEvent && e.originalEvent.keyCode === 13) {
      this._map._container.focus();
    }
  },
  _showCoverage: function _showCoverage(e) {
    var map = this._map;

    if (this._inZoomAnimation) {
      return;
    }

    if (this._shownPolygon) {
      map.removeLayer(this._shownPolygon);
    }

    if (e.layer.getChildCount() > 2 && e.layer !== this._spiderfied) {
      this._shownPolygon = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().Polygon)(e.layer.getConvexHull(), this.options.polygonOptions);
      map.addLayer(this._shownPolygon);
    }
  },
  _hideCoverage: function _hideCoverage() {
    if (this._shownPolygon) {
      this._map.removeLayer(this._shownPolygon);

      this._shownPolygon = null;
    }
  },
  _unbindEvents: function _unbindEvents() {
    var spiderfyOnMaxZoom = this.options.spiderfyOnMaxZoom,
        showCoverageOnHover = this.options.showCoverageOnHover,
        zoomToBoundsOnClick = this.options.zoomToBoundsOnClick,
        map = this._map;

    if (spiderfyOnMaxZoom || zoomToBoundsOnClick) {
      this.off('clusterclick', this._zoomOrSpiderfy, this);
    }

    if (showCoverageOnHover) {
      this.off('clustermouseover', this._showCoverage, this);
      this.off('clustermouseout', this._hideCoverage, this);
      map.off('zoomend', this._hideCoverage, this);
    }
  },
  _zoomEnd: function _zoomEnd() {
    if (!this._map) {
      //May have been removed from the map by a zoomEnd handler
      return;
    }

    this._mergeSplitClusters();

    this._zoom = Math.round(this._map._zoom);
    this._currentShownBounds = this._getExpandedVisibleBounds();
  },
  _moveEnd: function _moveEnd() {
    if (this._inZoomAnimation) {
      return;
    }

    var newBounds = this._getExpandedVisibleBounds();

    this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, newBounds);

    this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), newBounds);

    this._currentShownBounds = newBounds;
  },
  _generateInitialClusters: function _generateInitialClusters() {
    var maxZoom = Math.ceil(this._map.getMaxZoom()),
        minZoom = Math.floor(this._map.getMinZoom()),
        radius = this.options.maxClusterRadius,
        radiusFn = radius,
        zoom; //If we just set maxClusterRadius to a single number, we need to create
    //a simple function to return that number. Otherwise, we just have to
    //use the function we've passed in.

    if (typeof radius !== "function") {
      radiusFn = function () {
        return radius;
      };
    }

    if (this.options.disableClusteringAtZoom !== null) {
      maxZoom = this.options.disableClusteringAtZoom - 1;
    }

    this._maxZoom = maxZoom;
    this._gridClusters = {};
    this._gridUnclustered = {}; //Set up DistanceGrids for each zoom

    for (zoom = maxZoom; zoom >= minZoom; zoom--) {
      this._gridClusters[zoom] = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().DistanceGrid)(radiusFn(zoom));
      this._gridUnclustered[zoom] = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().DistanceGrid)(radiusFn(zoom));
    } // Instantiate the appropriate L.MarkerCluster class (animated or not).


    this._topClusterLevel = new this._markerCluster(this, minZoom - 1);
  },
  //Zoom: Zoom to start adding at (Pass this._maxZoom to start at the bottom)
  _addLayer: function _addLayer(layer, zoom) {
    var gridClusters = this._gridClusters,
        gridUnclustered = this._gridUnclustered,
        minZoom = Math.floor(this._map.getMinZoom()),
        markerPoint,
        z,
        closest,
        parent,
        newCluster,
        lastParent;

    if (this.options.singleMarkerMode) {
      this._overrideMarkerIcon(layer);
    }

    layer.on(this._childMarkerEventHandlers, this); //Find the lowest zoom level to slot this one in

    for (; zoom >= minZoom; zoom--) {
      markerPoint = this._map.project(layer.getLatLng(), zoom); // calculate pixel position
      //Try find a cluster close by

      closest = gridClusters[zoom].getNearObject(markerPoint);

      if (closest) {
        closest._addChild(layer);

        layer.__parent = closest;
        return;
      } //Try find a marker close by to form a new cluster with


      closest = gridUnclustered[zoom].getNearObject(markerPoint);

      if (closest) {
        parent = closest.__parent;

        if (parent) {
          this._removeLayer(closest, false);
        } //Create new cluster with these 2 in it


        newCluster = new this._markerCluster(this, zoom, closest, layer);
        gridClusters[zoom].addObject(newCluster, this._map.project(newCluster._cLatLng, zoom));
        closest.__parent = newCluster;
        layer.__parent = newCluster; //First create any new intermediate parent clusters that don't exist

        lastParent = newCluster;

        for (z = zoom - 1; z > parent._zoom; z--) {
          lastParent = new this._markerCluster(this, z, lastParent);
          gridClusters[z].addObject(lastParent, this._map.project(closest.getLatLng(), z));
        }

        parent._addChild(lastParent); //Remove closest from this zoom level and any above that it is in, replace with newCluster


        this._removeFromGridUnclustered(closest, zoom);

        return;
      } //Didn't manage to cluster in at this zoom, record us as a marker here and continue upwards


      gridUnclustered[zoom].addObject(layer, markerPoint);
    } //Didn't get in anything, add us to the top


    this._topClusterLevel._addChild(layer);

    layer.__parent = this._topClusterLevel;
  },

  /**
   * Refreshes the icon of all "dirty" visible clusters.
   * Non-visible "dirty" clusters will be updated when they are added to the map.
   * @private
   */
  _refreshClustersIcons: function _refreshClustersIcons() {
    this._featureGroup.eachLayer(function (c) {
      if (c instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerCluster) && c._iconNeedsUpdate) {
        c._updateIcon();
      }
    });
  },
  //Enqueue code to fire after the marker expand/contract has happened
  _enqueue: function _enqueue(fn) {
    this._queue.push(fn);

    if (!this._queueTimeout) {
      this._queueTimeout = setTimeout(leaflet__WEBPACK_IMPORTED_MODULE_6___default().bind(this._processQueue, this), 300);
    }
  },
  _processQueue: function _processQueue() {
    var i;

    for (i = 0; i < this._queue.length; i++) {
      this._queue[i].call(this);
    }

    this._queue.length = 0;
    clearTimeout(this._queueTimeout);
    this._queueTimeout = null;
  },
  //Merge and split any existing clusters that are too big or small
  _mergeSplitClusters: function _mergeSplitClusters() {
    var mapZoom = Math.round(this._map._zoom); //In case we are starting to split before the animation finished

    this._processQueue();

    if (this._zoom < mapZoom && this._currentShownBounds.intersects(this._getExpandedVisibleBounds())) {
      //Zoom in, split
      this._animationStart(); //Remove clusters now off screen


      this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds());

      this._animationZoomIn(this._zoom, mapZoom);
    } else if (this._zoom > mapZoom) {
      //Zoom out, merge
      this._animationStart();

      this._animationZoomOut(this._zoom, mapZoom);
    } else {
      this._moveEnd();
    }
  },
  //Gets the maps visible bounds expanded in each direction by the size of the screen (so the user cannot see an area we do not cover in one pan)
  _getExpandedVisibleBounds: function _getExpandedVisibleBounds() {
    if (!this.options.removeOutsideVisibleBounds) {
      return this._mapBoundsInfinite;
    } else if ((leaflet__WEBPACK_IMPORTED_MODULE_6___default().Browser.mobile)) {
      return this._checkBoundsMaxLat(this._map.getBounds());
    }

    return this._checkBoundsMaxLat(this._map.getBounds().pad(1)); // Padding expands the bounds by its own dimensions but scaled with the given factor.
  },

  /**
   * Expands the latitude to Infinity (or -Infinity) if the input bounds reach the map projection maximum defined latitude
   * (in the case of Web/Spherical Mercator, it is 85.0511287798 / see https://en.wikipedia.org/wiki/Web_Mercator#Formulas).
   * Otherwise, the removeOutsideVisibleBounds option will remove markers beyond that limit, whereas the same markers without
   * this option (or outside MCG) will have their position floored (ceiled) by the projection and rendered at that limit,
   * making the user think that MCG "eats" them and never displays them again.
   * @param bounds L.LatLngBounds
   * @returns {L.LatLngBounds}
   * @private
   */
  _checkBoundsMaxLat: function _checkBoundsMaxLat(bounds) {
    var maxLat = this._maxLat;

    if (maxLat !== undefined) {
      if (bounds.getNorth() >= maxLat) {
        bounds._northEast.lat = Infinity;
      }

      if (bounds.getSouth() <= -maxLat) {
        bounds._southWest.lat = -Infinity;
      }
    }

    return bounds;
  },
  //Shared animation code
  _animationAddLayerNonAnimated: function _animationAddLayerNonAnimated(layer, newCluster) {
    var markers;

    if (newCluster === layer) {
      this._featureGroup.addLayer(layer);
    } else if (newCluster._childCount === 2) {
      newCluster._addToMap();

      markers = newCluster.getAllChildMarkers();

      this._featureGroup.removeLayer(markers[0]);

      this._featureGroup.removeLayer(markers[1]);
    } else {
      newCluster._updateIcon();
    }
  },

  /**
   * Extracts individual (i.e. non-group) layers from a Layer Group.
   * @param group to extract layers from.
   * @param output {Array} in which to store the extracted layers.
   * @returns {*|Array}
   * @private
   */
  _extractNonGroupLayers: function _extractNonGroupLayers(group, output) {
    var layers = group.getLayers(),
        i = 0,
        layer;
    output = output || [];

    for (; i < layers.length; i++) {
      layer = layers[i];

      if (layer instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LayerGroup)) {
        this._extractNonGroupLayers(layer, output);

        continue;
      }

      output.push(layer);
    }

    return output;
  },

  /**
   * Implements the singleMarkerMode option.
   * @param layer Marker to re-style using the Clusters iconCreateFunction.
   * @returns {L.Icon} The newly created icon.
   * @private
   */
  _overrideMarkerIcon: function _overrideMarkerIcon(layer) {
    var icon = layer.options.icon = this.options.iconCreateFunction({
      getChildCount: function getChildCount() {
        return 1;
      },
      getAllChildMarkers: function getAllChildMarkers() {
        return [layer];
      }
    });
    return icon;
  }
}); // Constant bounds used in case option "removeOutsideVisibleBounds" is set to false.

leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerClusterGroup.include({
  _mapBoundsInfinite: new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLngBounds)(new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLng)(-Infinity, -Infinity), new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLng)(Infinity, Infinity))
});
leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerClusterGroup.include({
  _noAnimation: {
    //Non Animated versions of everything
    _animationStart: function _animationStart() {//Do nothing...
    },
    _animationZoomIn: function _animationZoomIn(previousZoomLevel, newZoomLevel) {
      this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), previousZoomLevel);

      this._topClusterLevel._recursivelyAddChildrenToMap(null, newZoomLevel, this._getExpandedVisibleBounds()); //We didn't actually animate, but we use this event to mean "clustering animations have finished"


      this.fire('animationend');
    },
    _animationZoomOut: function _animationZoomOut(previousZoomLevel, newZoomLevel) {
      this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), previousZoomLevel);

      this._topClusterLevel._recursivelyAddChildrenToMap(null, newZoomLevel, this._getExpandedVisibleBounds()); //We didn't actually animate, but we use this event to mean "clustering animations have finished"


      this.fire('animationend');
    },
    _animationAddLayer: function _animationAddLayer(layer, newCluster) {
      this._animationAddLayerNonAnimated(layer, newCluster);
    }
  },
  _withAnimation: {
    //Animated versions here
    _animationStart: function _animationStart() {
      this._map._mapPane.className += ' leaflet-cluster-anim';
      this._inZoomAnimation++;
    },
    _animationZoomIn: function _animationZoomIn(previousZoomLevel, newZoomLevel) {
      var bounds = this._getExpandedVisibleBounds(),
          fg = this._featureGroup,
          minZoom = Math.floor(this._map.getMinZoom()),
          i;

      this._ignoreMove = true; //Add all children of current clusters to map and remove those clusters from map

      this._topClusterLevel._recursively(bounds, previousZoomLevel, minZoom, function (c) {
        var startPos = c._latlng,
            markers = c._markers,
            m;

        if (!bounds.contains(startPos)) {
          startPos = null;
        }

        if (c._isSingleParent() && previousZoomLevel + 1 === newZoomLevel) {
          //Immediately add the new child and remove us
          fg.removeLayer(c);

          c._recursivelyAddChildrenToMap(null, newZoomLevel, bounds);
        } else {
          //Fade out old cluster
          c.clusterHide();

          c._recursivelyAddChildrenToMap(startPos, newZoomLevel, bounds);
        } //Remove all markers that aren't visible any more
        //TODO: Do we actually need to do this on the higher levels too?


        for (i = markers.length - 1; i >= 0; i--) {
          m = markers[i];

          if (!bounds.contains(m._latlng)) {
            fg.removeLayer(m);
          }
        }
      });

      this._forceLayout(); //Update opacities


      this._topClusterLevel._recursivelyBecomeVisible(bounds, newZoomLevel); //TODO Maybe? Update markers in _recursivelyBecomeVisible


      fg.eachLayer(function (n) {
        if (!(n instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerCluster)) && n._icon) {
          n.clusterShow();
        }
      }); //update the positions of the just added clusters/markers

      this._topClusterLevel._recursively(bounds, previousZoomLevel, newZoomLevel, function (c) {
        c._recursivelyRestoreChildPositions(newZoomLevel);
      });

      this._ignoreMove = false; //Remove the old clusters and close the zoom animation

      this._enqueue(function () {
        //update the positions of the just added clusters/markers
        this._topClusterLevel._recursively(bounds, previousZoomLevel, minZoom, function (c) {
          fg.removeLayer(c);
          c.clusterShow();
        });

        this._animationEnd();
      });
    },
    _animationZoomOut: function _animationZoomOut(previousZoomLevel, newZoomLevel) {
      this._animationZoomOutSingle(this._topClusterLevel, previousZoomLevel - 1, newZoomLevel); //Need to add markers for those that weren't on the map before but are now


      this._topClusterLevel._recursivelyAddChildrenToMap(null, newZoomLevel, this._getExpandedVisibleBounds()); //Remove markers that were on the map before but won't be now


      this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), previousZoomLevel, this._getExpandedVisibleBounds());
    },
    _animationAddLayer: function _animationAddLayer(layer, newCluster) {
      var me = this,
          fg = this._featureGroup;
      fg.addLayer(layer);

      if (newCluster !== layer) {
        if (newCluster._childCount > 2) {
          //Was already a cluster
          newCluster._updateIcon();

          this._forceLayout();

          this._animationStart();

          layer._setPos(this._map.latLngToLayerPoint(newCluster.getLatLng()));

          layer.clusterHide();

          this._enqueue(function () {
            fg.removeLayer(layer);
            layer.clusterShow();

            me._animationEnd();
          });
        } else {
          //Just became a cluster
          this._forceLayout();

          me._animationStart();

          me._animationZoomOutSingle(newCluster, this._map.getMaxZoom(), this._zoom);
        }
      }
    }
  },
  // Private methods for animated versions.
  _animationZoomOutSingle: function _animationZoomOutSingle(cluster, previousZoomLevel, newZoomLevel) {
    var bounds = this._getExpandedVisibleBounds(),
        minZoom = Math.floor(this._map.getMinZoom()); //Animate all of the markers in the clusters to move to their cluster center point


    cluster._recursivelyAnimateChildrenInAndAddSelfToMap(bounds, minZoom, previousZoomLevel + 1, newZoomLevel);

    var me = this; //Update the opacity (If we immediately set it they won't animate)

    this._forceLayout();

    cluster._recursivelyBecomeVisible(bounds, newZoomLevel); //TODO: Maybe use the transition timing stuff to make this more reliable
    //When the animations are done, tidy up


    this._enqueue(function () {
      var m;

      //This cluster stopped being a cluster before the timeout fired
      if (cluster._childCount === 1) {
        m = cluster._markers[0]; //If we were in a cluster animation at the time then the opacity and position of our child could be wrong now, so fix it

        this._ignoreMove = true;
        m.setLatLng(m.getLatLng());
        this._ignoreMove = false;

        if (m.clusterShow) {
          m.clusterShow();
        }
      } else {
        cluster._recursively(bounds, newZoomLevel, minZoom, function (c) {
          c._recursivelyRemoveChildrenFromMap(bounds, minZoom, previousZoomLevel + 1);
        });
      }

      me._animationEnd();
    });
  },
  _animationEnd: function _animationEnd() {
    if (this._map) {
      this._map._mapPane.className = this._map._mapPane.className.replace(' leaflet-cluster-anim', '');
    }

    this._inZoomAnimation--;
    this.fire('animationend');
  },
  //Force a browser layout of stuff in the map
  // Should apply the current opacity and location to all elements so we can update them again for an animation
  _forceLayout: function _forceLayout() {
    //In my testing this works, infact offsetWidth of any element seems to work.
    //Could loop all this._layers and do this for each _icon if it stops working
    leaflet__WEBPACK_IMPORTED_MODULE_6___default().Util.falseFn(document.body.offsetWidth);
  }
});

(leaflet__WEBPACK_IMPORTED_MODULE_6___default().markerClusterGroup) = function (options) {
  return new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerClusterGroup)(options);
};

var MarkerCluster = (leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerCluster) = leaflet__WEBPACK_IMPORTED_MODULE_6___default().Marker.extend({
  options: (leaflet__WEBPACK_IMPORTED_MODULE_6___default().Icon.prototype.options),
  initialize: function initialize(group, zoom, a, b) {
    leaflet__WEBPACK_IMPORTED_MODULE_6___default().Marker.prototype.initialize.call(this, a ? a._cLatLng || a.getLatLng() : new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLng)(0, 0), {
      icon: this,
      pane: group.options.clusterPane
    });
    this._group = group;
    this._zoom = zoom;
    this._markers = [];
    this._childClusters = [];
    this._childCount = 0;
    this._iconNeedsUpdate = true;
    this._boundsNeedUpdate = true;
    this._bounds = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLngBounds)();

    if (a) {
      this._addChild(a);
    }

    if (b) {
      this._addChild(b);
    }
  },
  //Recursively retrieve all child markers of this cluster
  getAllChildMarkers: function getAllChildMarkers(storageArray, ignoreDraggedMarker) {
    var i, j;
    storageArray = storageArray || [];

    for (i = this._childClusters.length - 1; i >= 0; i--) {
      this._childClusters[i].getAllChildMarkers(storageArray);
    }

    for (j = this._markers.length - 1; j >= 0; j--) {
      if (ignoreDraggedMarker && this._markers[j].__dragStart) {
        continue;
      }

      storageArray.push(this._markers[j]);
    }

    return storageArray;
  },
  //Returns the count of how many child markers we have
  getChildCount: function getChildCount() {
    return this._childCount;
  },
  //Zoom to the minimum of showing all of the child markers, or the extents of this cluster
  zoomToBounds: function zoomToBounds(fitBoundsOptions) {
    var childClusters = this._childClusters.slice(),
        map = this._group._map,
        boundsZoom = map.getBoundsZoom(this._bounds),
        zoom = this._zoom + 1,
        mapZoom = map.getZoom(),
        i,
        newClusters; //calculate how far we need to zoom down to see all of the markers


    while (childClusters.length > 0 && boundsZoom > zoom) {
      zoom++;
      newClusters = [];

      for (i = 0; i < childClusters.length; i++) {
        newClusters = newClusters.concat(childClusters[i]._childClusters);
      }

      childClusters = newClusters;
    }

    if (boundsZoom > zoom) {
      this._group._map.setView(this._latlng, zoom);
    } else if (boundsZoom <= mapZoom) {
      //If fitBounds wouldn't zoom us down, zoom us down instead
      this._group._map.setView(this._latlng, mapZoom + 1);
    } else {
      this._group._map.fitBounds(this._bounds, fitBoundsOptions);
    }
  },
  getBounds: function getBounds() {
    var bounds = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLngBounds)();
    bounds.extend(this._bounds);
    return bounds;
  },
  _updateIcon: function _updateIcon() {
    this._iconNeedsUpdate = true;

    if (this._icon) {
      this.setIcon(this);
    }
  },
  //Cludge for Icon, we pretend to be an icon for performance
  createIcon: function createIcon() {
    if (this._iconNeedsUpdate) {
      this._iconObj = this._group.options.iconCreateFunction(this);
      this._iconNeedsUpdate = false;
    }

    return this._iconObj.createIcon();
  },
  createShadow: function createShadow() {
    return this._iconObj.createShadow();
  },
  _addChild: function _addChild(new1, isNotificationFromChild) {
    this._iconNeedsUpdate = true;
    this._boundsNeedUpdate = true;

    this._setClusterCenter(new1);

    if (new1 instanceof (leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerCluster)) {
      if (!isNotificationFromChild) {
        this._childClusters.push(new1);

        new1.__parent = this;
      }

      this._childCount += new1._childCount;
    } else {
      if (!isNotificationFromChild) {
        this._markers.push(new1);
      }

      this._childCount++;
    }

    if (this.__parent) {
      this.__parent._addChild(new1, true);
    }
  },

  /**
   * Makes sure the cluster center is set. If not, uses the child center if it is a cluster, or the marker position.
   * @param child L.MarkerCluster|L.Marker that will be used as cluster center if not defined yet.
   * @private
   */
  _setClusterCenter: function _setClusterCenter(child) {
    if (!this._cLatLng) {
      // when clustering, take position of the first point as the cluster center
      this._cLatLng = child._cLatLng || child._latlng;
    }
  },

  /**
   * Assigns impossible bounding values so that the next extend entirely determines the new bounds.
   * This method avoids having to trash the previous L.LatLngBounds object and to create a new one, which is much slower for this class.
   * As long as the bounds are not extended, most other methods would probably fail, as they would with bounds initialized but not extended.
   * @private
   */
  _resetBounds: function _resetBounds() {
    var bounds = this._bounds;

    if (bounds._southWest) {
      bounds._southWest.lat = Infinity;
      bounds._southWest.lng = Infinity;
    }

    if (bounds._northEast) {
      bounds._northEast.lat = -Infinity;
      bounds._northEast.lng = -Infinity;
    }
  },
  _recalculateBounds: function _recalculateBounds() {
    var markers = this._markers,
        childClusters = this._childClusters,
        latSum = 0,
        lngSum = 0,
        totalCount = this._childCount,
        i,
        child,
        childLatLng,
        childCount; // Case where all markers are removed from the map and we are left with just an empty _topClusterLevel.

    if (totalCount === 0) {
      return;
    } // Reset rather than creating a new object, for performance.


    this._resetBounds(); // Child markers.


    for (i = 0; i < markers.length; i++) {
      childLatLng = markers[i]._latlng;

      this._bounds.extend(childLatLng);

      latSum += childLatLng.lat;
      lngSum += childLatLng.lng;
    } // Child clusters.


    for (i = 0; i < childClusters.length; i++) {
      child = childClusters[i]; // Re-compute child bounds and weighted position first if necessary.

      if (child._boundsNeedUpdate) {
        child._recalculateBounds();
      }

      this._bounds.extend(child._bounds);

      childLatLng = child._wLatLng;
      childCount = child._childCount;
      latSum += childLatLng.lat * childCount;
      lngSum += childLatLng.lng * childCount;
    }

    this._latlng = this._wLatLng = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLng)(latSum / totalCount, lngSum / totalCount); // Reset dirty flag.

    this._boundsNeedUpdate = false;
  },
  //Set our markers position as given and add it to the map
  _addToMap: function _addToMap(startPos) {
    if (startPos) {
      this._backupLatlng = this._latlng;
      this.setLatLng(startPos);
    }

    this._group._featureGroup.addLayer(this);
  },
  _recursivelyAnimateChildrenIn: function _recursivelyAnimateChildrenIn(bounds, center, maxZoom) {
    this._recursively(bounds, this._group._map.getMinZoom(), maxZoom - 1, function (c) {
      var markers = c._markers,
          i,
          m;

      for (i = markers.length - 1; i >= 0; i--) {
        m = markers[i]; //Only do it if the icon is still on the map

        if (m._icon) {
          m._setPos(center);

          m.clusterHide();
        }
      }
    }, function (c) {
      var childClusters = c._childClusters,
          j,
          cm;

      for (j = childClusters.length - 1; j >= 0; j--) {
        cm = childClusters[j];

        if (cm._icon) {
          cm._setPos(center);

          cm.clusterHide();
        }
      }
    });
  },
  _recursivelyAnimateChildrenInAndAddSelfToMap: function _recursivelyAnimateChildrenInAndAddSelfToMap(bounds, mapMinZoom, previousZoomLevel, newZoomLevel) {
    this._recursively(bounds, newZoomLevel, mapMinZoom, function (c) {
      c._recursivelyAnimateChildrenIn(bounds, c._group._map.latLngToLayerPoint(c.getLatLng()).round(), previousZoomLevel); //TODO: depthToAnimateIn affects _isSingleParent, if there is a multizoom we may/may not be.
      //As a hack we only do a animation free zoom on a single level zoom, if someone does multiple levels then we always animate


      if (c._isSingleParent() && previousZoomLevel - 1 === newZoomLevel) {
        c.clusterShow();

        c._recursivelyRemoveChildrenFromMap(bounds, mapMinZoom, previousZoomLevel); //Immediately remove our children as we are replacing them. TODO previousBounds not bounds

      } else {
        c.clusterHide();
      }

      c._addToMap();
    });
  },
  _recursivelyBecomeVisible: function _recursivelyBecomeVisible(bounds, zoomLevel) {
    this._recursively(bounds, this._group._map.getMinZoom(), zoomLevel, null, function (c) {
      c.clusterShow();
    });
  },
  _recursivelyAddChildrenToMap: function _recursivelyAddChildrenToMap(startPos, zoomLevel, bounds) {
    this._recursively(bounds, this._group._map.getMinZoom() - 1, zoomLevel, function (c) {
      var i, nm;

      if (zoomLevel === c._zoom) {
        return;
      } //Add our child markers at startPos (so they can be animated out)


      for (i = c._markers.length - 1; i >= 0; i--) {
        nm = c._markers[i];

        if (!bounds.contains(nm._latlng)) {
          continue;
        }

        if (startPos) {
          nm._backupLatlng = nm.getLatLng();
          nm.setLatLng(startPos);

          if (nm.clusterHide) {
            nm.clusterHide();
          }
        }

        c._group._featureGroup.addLayer(nm);
      }
    }, function (c) {
      c._addToMap(startPos);
    });
  },
  _recursivelyRestoreChildPositions: function _recursivelyRestoreChildPositions(zoomLevel) {
    var i, nm, j, k;

    //Fix positions of child markers
    for (i = this._markers.length - 1; i >= 0; i--) {
      nm = this._markers[i];

      if (nm._backupLatlng) {
        nm.setLatLng(nm._backupLatlng);
        delete nm._backupLatlng;
      }
    }

    if (zoomLevel - 1 === this._zoom) {
      //Reposition child clusters
      for (j = this._childClusters.length - 1; j >= 0; j--) {
        this._childClusters[j]._restorePosition();
      }
    } else {
      for (k = this._childClusters.length - 1; k >= 0; k--) {
        this._childClusters[k]._recursivelyRestoreChildPositions(zoomLevel);
      }
    }
  },
  _restorePosition: function _restorePosition() {
    if (this._backupLatlng) {
      this.setLatLng(this._backupLatlng);
      delete this._backupLatlng;
    }
  },
  //exceptBounds: If set, don't remove any markers/clusters in it
  _recursivelyRemoveChildrenFromMap: function _recursivelyRemoveChildrenFromMap(previousBounds, mapMinZoom, zoomLevel, exceptBounds) {
    var m, i;

    this._recursively(previousBounds, mapMinZoom - 1, zoomLevel - 1, function (c) {
      //Remove markers at every level
      for (i = c._markers.length - 1; i >= 0; i--) {
        m = c._markers[i];

        if (!exceptBounds || !exceptBounds.contains(m._latlng)) {
          c._group._featureGroup.removeLayer(m);

          if (m.clusterShow) {
            m.clusterShow();
          }
        }
      }
    }, function (c) {
      //Remove child clusters at just the bottom level
      for (i = c._childClusters.length - 1; i >= 0; i--) {
        m = c._childClusters[i];

        if (!exceptBounds || !exceptBounds.contains(m._latlng)) {
          c._group._featureGroup.removeLayer(m);

          if (m.clusterShow) {
            m.clusterShow();
          }
        }
      }
    });
  },
  //Run the given functions recursively to this and child clusters
  // boundsToApplyTo: a L.LatLngBounds representing the bounds of what clusters to recurse in to
  // zoomLevelToStart: zoom level to start running functions (inclusive)
  // zoomLevelToStop: zoom level to stop running functions (inclusive)
  // runAtEveryLevel: function that takes an L.MarkerCluster as an argument that should be applied on every level
  // runAtBottomLevel: function that takes an L.MarkerCluster as an argument that should be applied at only the bottom level
  _recursively: function _recursively(boundsToApplyTo, zoomLevelToStart, zoomLevelToStop, runAtEveryLevel, runAtBottomLevel) {
    var childClusters = this._childClusters,
        zoom = this._zoom,
        i,
        c;

    if (zoomLevelToStart <= zoom) {
      if (runAtEveryLevel) {
        runAtEveryLevel(this);
      }

      if (runAtBottomLevel && zoom === zoomLevelToStop) {
        runAtBottomLevel(this);
      }
    }

    if (zoom < zoomLevelToStart || zoom < zoomLevelToStop) {
      for (i = childClusters.length - 1; i >= 0; i--) {
        c = childClusters[i];

        if (c._boundsNeedUpdate) {
          c._recalculateBounds();
        }

        if (boundsToApplyTo.intersects(c._bounds)) {
          c._recursively(boundsToApplyTo, zoomLevelToStart, zoomLevelToStop, runAtEveryLevel, runAtBottomLevel);
        }
      }
    }
  },
  //Returns true if we are the parent of only one cluster and that cluster is the same as us
  _isSingleParent: function _isSingleParent() {
    //Don't need to check this._markers as the rest won't work if there are any
    return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
  }
});
/*
* Extends L.Marker to include two extra methods: clusterHide and clusterShow.
* 
* They work as setOpacity(0) and setOpacity(1) respectively, but
* don't overwrite the options.opacity
* 
*/

leaflet__WEBPACK_IMPORTED_MODULE_6___default().Marker.include({
  clusterHide: function clusterHide() {
    var backup = this.options.opacity;
    this.setOpacity(0);
    this.options.opacity = backup;
    return this;
  },
  clusterShow: function clusterShow() {
    return this.setOpacity(this.options.opacity);
  }
});

(leaflet__WEBPACK_IMPORTED_MODULE_6___default().DistanceGrid) = function (cellSize) {
  this._cellSize = cellSize;
  this._sqCellSize = cellSize * cellSize;
  this._grid = {};
  this._objectPoint = {};
};

(leaflet__WEBPACK_IMPORTED_MODULE_6___default().DistanceGrid.prototype) = {
  addObject: function addObject(obj, point) {
    var x = this._getCoord(point.x),
        y = this._getCoord(point.y),
        grid = this._grid,
        row = grid[y] = grid[y] || {},
        cell = row[x] = row[x] || [],
        stamp = leaflet__WEBPACK_IMPORTED_MODULE_6___default().Util.stamp(obj);

    this._objectPoint[stamp] = point;
    cell.push(obj);
  },
  updateObject: function updateObject(obj, point) {
    this.removeObject(obj);
    this.addObject(obj, point);
  },
  //Returns true if the object was found
  removeObject: function removeObject(obj, point) {
    var x = this._getCoord(point.x),
        y = this._getCoord(point.y),
        grid = this._grid,
        row = grid[y] = grid[y] || {},
        cell = row[x] = row[x] || [],
        i,
        len;

    delete this._objectPoint[leaflet__WEBPACK_IMPORTED_MODULE_6___default().Util.stamp(obj)];

    for (i = 0, len = cell.length; i < len; i++) {
      if (cell[i] === obj) {
        cell.splice(i, 1);

        if (len === 1) {
          delete row[x];
        }

        return true;
      }
    }
  },
  eachObject: function eachObject(fn, context) {
    var i,
        j,
        k,
        len,
        row,
        cell,
        removed,
        grid = this._grid;

    for (i in grid) {
      row = grid[i];

      for (j in row) {
        cell = row[j];

        for (k = 0, len = cell.length; k < len; k++) {
          removed = fn.call(context, cell[k]);

          if (removed) {
            k--;
            len--;
          }
        }
      }
    }
  },
  getNearObject: function getNearObject(point) {
    var x = this._getCoord(point.x),
        y = this._getCoord(point.y),
        i,
        j,
        k,
        row,
        cell,
        len,
        obj,
        dist,
        objectPoint = this._objectPoint,
        closestDistSq = this._sqCellSize,
        closest = null;

    for (i = y - 1; i <= y + 1; i++) {
      row = this._grid[i];

      if (row) {
        for (j = x - 1; j <= x + 1; j++) {
          cell = row[j];

          if (cell) {
            for (k = 0, len = cell.length; k < len; k++) {
              obj = cell[k];
              dist = this._sqDist(objectPoint[leaflet__WEBPACK_IMPORTED_MODULE_6___default().Util.stamp(obj)], point);

              if (dist < closestDistSq || dist <= closestDistSq && closest === null) {
                closestDistSq = dist;
                closest = obj;
              }
            }
          }
        }
      }
    }

    return closest;
  },
  _getCoord: function _getCoord(x) {
    var coord = Math.floor(x / this._cellSize);
    return isFinite(coord) ? coord : x;
  },
  _sqDist: function _sqDist(p, p2) {
    var dx = p2.x - p.x,
        dy = p2.y - p.y;
    return dx * dx + dy * dy;
  }
};
/* Copyright (c) 2012 the authors listed at the following URL, and/or
the authors of referenced articles or incorporated external code:
http://en.literateprograms.org/Quickhull_(Javascript)?action=history&offset=20120410175256

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Retrieved from: http://en.literateprograms.org/Quickhull_(Javascript)?oldid=18434
*/

(function () {
  (leaflet__WEBPACK_IMPORTED_MODULE_6___default().QuickHull) = {
    /*
     * @param {Object} cpt a point to be measured from the baseline
     * @param {Array} bl the baseline, as represented by a two-element
     *   array of latlng objects.
     * @returns {Number} an approximate distance measure
     */
    getDistant: function getDistant(cpt, bl) {
      var vY = bl[1].lat - bl[0].lat,
          vX = bl[0].lng - bl[1].lng;
      return vX * (cpt.lat - bl[0].lat) + vY * (cpt.lng - bl[0].lng);
    },

    /*
     * @param {Array} baseLine a two-element array of latlng objects
     *   representing the baseline to project from
     * @param {Array} latLngs an array of latlng objects
     * @returns {Object} the maximum point and all new points to stay
     *   in consideration for the hull.
     */
    findMostDistantPointFromBaseLine: function findMostDistantPointFromBaseLine(baseLine, latLngs) {
      var maxD = 0,
          maxPt = null,
          newPoints = [],
          i,
          pt,
          d;

      for (i = latLngs.length - 1; i >= 0; i--) {
        pt = latLngs[i];
        d = this.getDistant(pt, baseLine);

        if (d > 0) {
          newPoints.push(pt);
        } else {
          continue;
        }

        if (d > maxD) {
          maxD = d;
          maxPt = pt;
        }
      }

      return {
        maxPoint: maxPt,
        newPoints: newPoints
      };
    },

    /*
     * Given a baseline, compute the convex hull of latLngs as an array
     * of latLngs.
     *
     * @param {Array} latLngs
     * @returns {Array}
     */
    buildConvexHull: function buildConvexHull(baseLine, latLngs) {
      var convexHullBaseLines = [],
          t = this.findMostDistantPointFromBaseLine(baseLine, latLngs);

      if (t.maxPoint) {
        // if there is still a point "outside" the base line
        convexHullBaseLines = convexHullBaseLines.concat(this.buildConvexHull([baseLine[0], t.maxPoint], t.newPoints));
        convexHullBaseLines = convexHullBaseLines.concat(this.buildConvexHull([t.maxPoint, baseLine[1]], t.newPoints));
        return convexHullBaseLines;
      } else {
        // if there is no more point "outside" the base line, the current base line is part of the convex hull
        return [baseLine[0]];
      }
    },

    /*
     * Given an array of latlngs, compute a convex hull as an array
     * of latlngs
     *
     * @param {Array} latLngs
     * @returns {Array}
     */
    getConvexHull: function getConvexHull(latLngs) {
      // find first baseline
      var maxLat = false,
          minLat = false,
          maxLng = false,
          minLng = false,
          maxLatPt = null,
          minLatPt = null,
          maxLngPt = null,
          minLngPt = null,
          maxPt = null,
          minPt = null,
          i,
          pt;

      for (i = latLngs.length - 1; i >= 0; i--) {
        pt = latLngs[i];

        if (maxLat === false || pt.lat > maxLat) {
          maxLatPt = pt;
          maxLat = pt.lat;
        }

        if (minLat === false || pt.lat < minLat) {
          minLatPt = pt;
          minLat = pt.lat;
        }

        if (maxLng === false || pt.lng > maxLng) {
          maxLngPt = pt;
          maxLng = pt.lng;
        }

        if (minLng === false || pt.lng < minLng) {
          minLngPt = pt;
          minLng = pt.lng;
        }
      }

      if (minLat !== maxLat) {
        minPt = minLatPt;
        maxPt = maxLatPt;
      } else {
        minPt = minLngPt;
        maxPt = maxLngPt;
      }

      var ch = [].concat(this.buildConvexHull([minPt, maxPt], latLngs), this.buildConvexHull([maxPt, minPt], latLngs));
      return ch;
    }
  };
})();

leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerCluster.include({
  getConvexHull: function getConvexHull() {
    var childMarkers = this.getAllChildMarkers(),
        points = [],
        p,
        i;

    for (i = childMarkers.length - 1; i >= 0; i--) {
      p = childMarkers[i].getLatLng();
      points.push(p);
    }

    return leaflet__WEBPACK_IMPORTED_MODULE_6___default().QuickHull.getConvexHull(points);
  }
}); //This code is 100% based on https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet
//Huge thanks to jawj for implementing it first to make my job easy :-)

leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerCluster.include({
  _2PI: Math.PI * 2,
  _circleFootSeparation: 25,
  //related to circumference of circle
  _circleStartAngle: 0,
  _spiralFootSeparation: 28,
  //related to size of spiral (experiment!)
  _spiralLengthStart: 11,
  _spiralLengthFactor: 5,
  _circleSpiralSwitchover: 9,
  //show spiral instead of circle from this marker count upwards.
  // 0 -> always spiral; Infinity -> always circle
  spiderfy: function spiderfy() {
    if (this._group._spiderfied === this || this._group._inZoomAnimation) {
      return;
    }

    var childMarkers = this.getAllChildMarkers(null, true),
        group = this._group,
        map = group._map,
        center = map.latLngToLayerPoint(this._latlng),
        positions;

    this._group._unspiderfy();

    this._group._spiderfied = this; //TODO Maybe: childMarkers order by distance to center

    if (this._group.options.spiderfyShapePositions) {
      positions = this._group.options.spiderfyShapePositions(childMarkers.length, center);
    } else if (childMarkers.length >= this._circleSpiralSwitchover) {
      positions = this._generatePointsSpiral(childMarkers.length, center);
    } else {
      center.y += 10; // Otherwise circles look wrong => hack for standard blue icon, renders differently for other icons.

      positions = this._generatePointsCircle(childMarkers.length, center);
    }

    this._animationSpiderfy(childMarkers, positions);
  },
  unspiderfy: function unspiderfy(zoomDetails) {
    /// <param Name="zoomDetails">Argument from zoomanim if being called in a zoom animation or null otherwise</param>
    if (this._group._inZoomAnimation) {
      return;
    }

    this._animationUnspiderfy(zoomDetails);

    this._group._spiderfied = null;
  },
  _generatePointsCircle: function _generatePointsCircle(count, centerPt) {
    var circumference = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + count),
        legLength = circumference / this._2PI,
        //radius from circumference
    angleStep = this._2PI / count,
        res = [],
        i,
        angle;
    legLength = Math.max(legLength, 35); // Minimum distance to get outside the cluster icon.

    res.length = count;

    for (i = 0; i < count; i++) {
      // Clockwise, like spiral.
      angle = this._circleStartAngle + i * angleStep;
      res[i] = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().Point)(centerPt.x + legLength * Math.cos(angle), centerPt.y + legLength * Math.sin(angle))._round();
    }

    return res;
  },
  _generatePointsSpiral: function _generatePointsSpiral(count, centerPt) {
    var spiderfyDistanceMultiplier = this._group.options.spiderfyDistanceMultiplier,
        legLength = spiderfyDistanceMultiplier * this._spiralLengthStart,
        separation = spiderfyDistanceMultiplier * this._spiralFootSeparation,
        lengthFactor = spiderfyDistanceMultiplier * this._spiralLengthFactor * this._2PI,
        angle = 0,
        res = [],
        i;
    res.length = count; // Higher index, closer position to cluster center.

    for (i = count; i >= 0; i--) {
      // Skip the first position, so that we are already farther from center and we avoid
      // being under the default cluster icon (especially important for Circle Markers).
      if (i < count) {
        res[i] = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().Point)(centerPt.x + legLength * Math.cos(angle), centerPt.y + legLength * Math.sin(angle))._round();
      }

      angle += separation / legLength + i * 0.0005;
      legLength += lengthFactor / angle;
    }

    return res;
  },
  _noanimationUnspiderfy: function _noanimationUnspiderfy() {
    var group = this._group,
        map = group._map,
        fg = group._featureGroup,
        childMarkers = this.getAllChildMarkers(null, true),
        m,
        i;
    group._ignoreMove = true;
    this.setOpacity(1);

    for (i = childMarkers.length - 1; i >= 0; i--) {
      m = childMarkers[i];
      fg.removeLayer(m);

      if (m._preSpiderfyLatlng) {
        m.setLatLng(m._preSpiderfyLatlng);
        delete m._preSpiderfyLatlng;
      }

      if (m.setZIndexOffset) {
        m.setZIndexOffset(0);
      }

      if (m._spiderLeg) {
        map.removeLayer(m._spiderLeg);
        delete m._spiderLeg;
      }
    }

    group.fire('unspiderfied', {
      cluster: this,
      markers: childMarkers
    });
    group._ignoreMove = false;
    group._spiderfied = null;
  }
}); //Non Animated versions of everything

(leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerClusterNonAnimated) = leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerCluster.extend({
  _animationSpiderfy: function _animationSpiderfy(childMarkers, positions) {
    var group = this._group,
        map = group._map,
        fg = group._featureGroup,
        legOptions = this._group.options.spiderLegPolylineOptions,
        i,
        m,
        leg,
        newPos;
    group._ignoreMove = true; // Traverse in ascending order to make sure that inner circleMarkers are on top of further legs. Normal markers are re-ordered by newPosition.
    // The reverse order trick no longer improves performance on modern browsers.

    for (i = 0; i < childMarkers.length; i++) {
      newPos = map.layerPointToLatLng(positions[i]);
      m = childMarkers[i]; // Add the leg before the marker, so that in case the latter is a circleMarker, the leg is behind it.

      leg = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().Polyline)([this._latlng, newPos], legOptions);
      map.addLayer(leg);
      m._spiderLeg = leg; // Now add the marker.

      m._preSpiderfyLatlng = m._latlng;
      m.setLatLng(newPos);

      if (m.setZIndexOffset) {
        m.setZIndexOffset(1000000); //Make these appear on top of EVERYTHING
      }

      fg.addLayer(m);
    }

    this.setOpacity(0.3);
    group._ignoreMove = false;
    group.fire('spiderfied', {
      cluster: this,
      markers: childMarkers
    });
  },
  _animationUnspiderfy: function _animationUnspiderfy() {
    this._noanimationUnspiderfy();
  }
}); //Animated versions here

leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerCluster.include({
  _animationSpiderfy: function _animationSpiderfy(childMarkers, positions) {
    var me = this,
        group = this._group,
        map = group._map,
        fg = group._featureGroup,
        thisLayerLatLng = this._latlng,
        thisLayerPos = map.latLngToLayerPoint(thisLayerLatLng),
        svg = (leaflet__WEBPACK_IMPORTED_MODULE_6___default().Path.SVG),
        legOptions = leaflet__WEBPACK_IMPORTED_MODULE_6___default().extend({}, this._group.options.spiderLegPolylineOptions),
        // Copy the options so that we can modify them for animation.
    finalLegOpacity = legOptions.opacity,
        i,
        m,
        leg,
        legPath,
        legLength,
        newPos;

    if (finalLegOpacity === undefined) {
      finalLegOpacity = (leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity);
    }

    if (svg) {
      // If the initial opacity of the spider leg is not 0 then it appears before the animation starts.
      legOptions.opacity = 0; // Add the class for CSS transitions.

      legOptions.className = (legOptions.className || '') + ' leaflet-cluster-spider-leg';
    } else {
      // Make sure we have a defined opacity.
      legOptions.opacity = finalLegOpacity;
    }

    group._ignoreMove = true; // Add markers and spider legs to map, hidden at our center point.
    // Traverse in ascending order to make sure that inner circleMarkers are on top of further legs. Normal markers are re-ordered by newPosition.
    // The reverse order trick no longer improves performance on modern browsers.

    for (i = 0; i < childMarkers.length; i++) {
      m = childMarkers[i];
      newPos = map.layerPointToLatLng(positions[i]); // Add the leg before the marker, so that in case the latter is a circleMarker, the leg is behind it.

      leg = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().Polyline)([thisLayerLatLng, newPos], legOptions);
      map.addLayer(leg);
      m._spiderLeg = leg; // Explanations: https://jakearchibald.com/2013/animated-line-drawing-svg/
      // In our case the transition property is declared in the CSS file.

      if (svg) {
        legPath = leg._path;
        legLength = legPath.getTotalLength() + 0.1; // Need a small extra length to avoid remaining dot in Firefox.

        legPath.style.strokeDasharray = legLength; // Just 1 length is enough, it will be duplicated.

        legPath.style.strokeDashoffset = legLength;
      } // If it is a marker, add it now and we'll animate it out


      if (m.setZIndexOffset) {
        m.setZIndexOffset(1000000); // Make normal markers appear on top of EVERYTHING
      }

      if (m.clusterHide) {
        m.clusterHide();
      } // Vectors just get immediately added


      fg.addLayer(m);

      if (m._setPos) {
        m._setPos(thisLayerPos);
      }
    }

    group._forceLayout();

    group._animationStart(); // Reveal markers and spider legs.


    for (i = childMarkers.length - 1; i >= 0; i--) {
      newPos = map.layerPointToLatLng(positions[i]);
      m = childMarkers[i]; //Move marker to new position

      m._preSpiderfyLatlng = m._latlng;
      m.setLatLng(newPos);

      if (m.clusterShow) {
        m.clusterShow();
      } // Animate leg (animation is actually delegated to CSS transition).


      if (svg) {
        leg = m._spiderLeg;
        legPath = leg._path;
        legPath.style.strokeDashoffset = 0; //legPath.style.strokeOpacity = finalLegOpacity;

        leg.setStyle({
          opacity: finalLegOpacity
        });
      }
    }

    this.setOpacity(0.3);
    group._ignoreMove = false;
    setTimeout(function () {
      group._animationEnd();

      group.fire('spiderfied', {
        cluster: me,
        markers: childMarkers
      });
    }, 200);
  },
  _animationUnspiderfy: function _animationUnspiderfy(zoomDetails) {
    var me = this,
        group = this._group,
        map = group._map,
        fg = group._featureGroup,
        thisLayerPos = zoomDetails ? map._latLngToNewLayerPoint(this._latlng, zoomDetails.zoom, zoomDetails.center) : map.latLngToLayerPoint(this._latlng),
        childMarkers = this.getAllChildMarkers(null, true),
        svg = (leaflet__WEBPACK_IMPORTED_MODULE_6___default().Path.SVG),
        m,
        i,
        leg,
        legPath,
        legLength,
        nonAnimatable;
    group._ignoreMove = true;

    group._animationStart(); //Make us visible and bring the child markers back in


    this.setOpacity(1);

    for (i = childMarkers.length - 1; i >= 0; i--) {
      m = childMarkers[i]; //Marker was added to us after we were spiderfied

      if (!m._preSpiderfyLatlng) {
        continue;
      } //Close any popup on the marker first, otherwise setting the location of the marker will make the map scroll


      m.closePopup(); //Fix up the location to the real one

      m.setLatLng(m._preSpiderfyLatlng);
      delete m._preSpiderfyLatlng; //Hack override the location to be our center

      nonAnimatable = true;

      if (m._setPos) {
        m._setPos(thisLayerPos);

        nonAnimatable = false;
      }

      if (m.clusterHide) {
        m.clusterHide();
        nonAnimatable = false;
      }

      if (nonAnimatable) {
        fg.removeLayer(m);
      } // Animate the spider leg back in (animation is actually delegated to CSS transition).


      if (svg) {
        leg = m._spiderLeg;
        legPath = leg._path;
        legLength = legPath.getTotalLength() + 0.1;
        legPath.style.strokeDashoffset = legLength;
        leg.setStyle({
          opacity: 0
        });
      }
    }

    group._ignoreMove = false;
    setTimeout(function () {
      //If we have only <= one child left then that marker will be shown on the map so don't remove it!
      var stillThereChildCount = 0;

      for (i = childMarkers.length - 1; i >= 0; i--) {
        m = childMarkers[i];

        if (m._spiderLeg) {
          stillThereChildCount++;
        }
      }

      for (i = childMarkers.length - 1; i >= 0; i--) {
        m = childMarkers[i];

        if (!m._spiderLeg) {
          //Has already been unspiderfied
          continue;
        }

        if (m.clusterShow) {
          m.clusterShow();
        }

        if (m.setZIndexOffset) {
          m.setZIndexOffset(0);
        }

        if (stillThereChildCount > 1) {
          fg.removeLayer(m);
        }

        map.removeLayer(m._spiderLeg);
        delete m._spiderLeg;
      }

      group._animationEnd();

      group.fire('unspiderfied', {
        cluster: me,
        markers: childMarkers
      });
    }, 200);
  }
});
leaflet__WEBPACK_IMPORTED_MODULE_6___default().MarkerClusterGroup.include({
  //The MarkerCluster currently spiderfied (if any)
  _spiderfied: null,
  unspiderfy: function unspiderfy() {
    this._unspiderfy.apply(this, arguments);
  },
  _spiderfierOnAdd: function _spiderfierOnAdd() {
    this._map.on('click', this._unspiderfyWrapper, this);

    if (this._map.options.zoomAnimation) {
      this._map.on('zoomstart', this._unspiderfyZoomStart, this);
    } //Browsers without zoomAnimation or a big zoom don't fire zoomstart


    this._map.on('zoomend', this._noanimationUnspiderfy, this);

    if (!(leaflet__WEBPACK_IMPORTED_MODULE_6___default().Browser.touch)) {
      this._map.getRenderer(this); //Needs to happen in the pageload, not after, or animations don't work in webkit
      //  http://stackoverflow.com/questions/8455200/svg-animate-with-dynamically-added-elements
      //Disable on touch browsers as the animation messes up on a touch zoom and isn't very noticable

    }
  },
  _spiderfierOnRemove: function _spiderfierOnRemove() {
    this._map.off('click', this._unspiderfyWrapper, this);

    this._map.off('zoomstart', this._unspiderfyZoomStart, this);

    this._map.off('zoomanim', this._unspiderfyZoomAnim, this);

    this._map.off('zoomend', this._noanimationUnspiderfy, this); //Ensure that markers are back where they should be
    // Use no animation to avoid a sticky leaflet-cluster-anim class on mapPane


    this._noanimationUnspiderfy();
  },
  //On zoom start we add a zoomanim handler so that we are guaranteed to be last (after markers are animated)
  //This means we can define the animation they do rather than Markers doing an animation to their actual location
  _unspiderfyZoomStart: function _unspiderfyZoomStart() {
    if (!this._map) {
      //May have been removed from the map by a zoomEnd handler
      return;
    }

    this._map.on('zoomanim', this._unspiderfyZoomAnim, this);
  },
  _unspiderfyZoomAnim: function _unspiderfyZoomAnim(zoomDetails) {
    //Wait until the first zoomanim after the user has finished touch-zooming before running the animation
    if (leaflet__WEBPACK_IMPORTED_MODULE_6___default().DomUtil.hasClass(this._map._mapPane, 'leaflet-touching')) {
      return;
    }

    this._map.off('zoomanim', this._unspiderfyZoomAnim, this);

    this._unspiderfy(zoomDetails);
  },
  _unspiderfyWrapper: function _unspiderfyWrapper() {
    /// <summary>_unspiderfy but passes no arguments</summary>
    this._unspiderfy();
  },
  _unspiderfy: function _unspiderfy(zoomDetails) {
    if (this._spiderfied) {
      this._spiderfied.unspiderfy(zoomDetails);
    }
  },
  _noanimationUnspiderfy: function _noanimationUnspiderfy() {
    if (this._spiderfied) {
      this._spiderfied._noanimationUnspiderfy();
    }
  },
  //If the given layer is currently being spiderfied then we unspiderfy it so it isn't on the map anymore etc
  _unspiderfyLayer: function _unspiderfyLayer(layer) {
    if (layer._spiderLeg) {
      this._featureGroup.removeLayer(layer);

      if (layer.clusterShow) {
        layer.clusterShow();
      } //Position will be fixed up immediately in _animationUnspiderfy


      if (layer.setZIndexOffset) {
        layer.setZIndexOffset(0);
      }

      this._map.removeLayer(layer._spiderLeg);

      delete layer._spiderLeg;
    }
  }
});

var MarkerClusterGroupComp = /*#__PURE__*/function (_MapLayer) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MarkerClusterGroupComp, _MapLayer);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MarkerClusterGroupComp);

  function MarkerClusterGroupComp() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MarkerClusterGroupComp);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MarkerClusterGroupComp, [{
    key: "createLeafletElement",
    value: function createLeafletElement(_ref) {
      var children = _ref.children,
          map = _ref.leaflet.map,
          props = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

      var clusterProps = {};
      var clusterEvents = {}; // Splitting props and events to different objects

      Object.entries(props).forEach(function (_ref2) {
        var _ref3 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
            propName = _ref3[0],
            prop = _ref3[1];

        return propName.startsWith('on') ? clusterEvents[propName] = prop : clusterProps[propName] = prop;
      }); // Creating markerClusterGroup Leaflet element

      var markerClusterGroup = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().markerClusterGroup)(clusterProps);
      this.contextValue = {
        layerContainer: markerClusterGroup,
        map: map
      }; // Initializing event listeners

      Object.entries(clusterEvents).forEach(function (_ref4) {
        var _ref5 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, 2),
            eventAsProp = _ref5[0],
            callback = _ref5[1];

        var clusterEvent = "cluster".concat(eventAsProp.substring(2).toLowerCase());
        markerClusterGroup.on(clusterEvent, callback);
      });
      return markerClusterGroup;
    }
  }]);

  return MarkerClusterGroupComp;
}(react_leaflet__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_leaflet__WEBPACK_IMPORTED_MODULE_8__.withLeaflet)(MarkerClusterGroupComp));

/***/ }),

/***/ "./Components/map/cluster-layer.jsx":
/*!******************************************!*\
  !*** ./Components/map/cluster-layer.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDClusterLayer)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marker */ "./Components/map/marker.jsx");
/* harmony import */ var _Cluster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cluster */ "./Components/map/Cluster.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./Components/map/utils.jsx");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\cluster-layer.jsx";





var UDClusterLayer = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UDClusterLayer, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(UDClusterLayer);

  function UDClusterLayer(props) {
    var _this;

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UDClusterLayer);

    _this = _super.call(this, props);
    _this.state = {
      markers: props.markers
    };
    return _this;
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UDClusterLayer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_7__.isGuid)(this.props.id)) {
        this.pubSubToken = UniversalDashboard.subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      var markers, content;

      if (event.type === "removeElement") {
        this.props.onRemove(event.componentId);
      }

      if (event.type === "clearElement") {
        this.setState({
          markers: []
        });
      }

      if (event.type === 'addElement') {
        markers = this.state.markers;
        content = event.elements;

        if (!Array.isArray(content)) {
          content = [content];
        }

        markers = markers.concat(content);
        this.setState({
          markers: markers
        });
      }
    }
  }, {
    key: "onRemoveMarker",
    value: function onRemoveMarker(id) {
      var markers = this.state.markers.filter(function (x) {
        return x.id !== id;
      });
      this.setState({
        markers: markers
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Cluster__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, this.state.markers.map(function (x) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_marker__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, x, {
          onRemove: _this2.onRemoveMarker.bind(_this2),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 46
          }
        }));
      }));
    }
  }]);

  return UDClusterLayer;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);



/***/ }),

/***/ "./Components/map/marker.jsx":
/*!***********************************!*\
  !*** ./Components/map/marker.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDMarker)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/Marker.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup */ "./Components/map/popup.jsx");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./Components/map/utils.jsx");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\marker.jsx";






var UDMarker = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UDMarker, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(UDMarker);

  function UDMarker() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UDMarker);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UDMarker, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_7__.isGuid)(this.props.id)) {
        this.pubSubToken = UniversalDashboard.subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onReportBounds) {
        this.props.onReportBounds([[this.props.latitude, this.props.longitude], [this.props.latitude, this.props.longitude]]);
      }
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "removeElement") {
        this.props.onRemove(event.componentId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this,
          options;

      var icon = null;

      if (this.props.icon) {
        options = {
          iconUrl: this.props.icon.url
        };

        if (this.props.icon.width && this.props.icon.height) {
          options['iconSize'] = [this.props.icon.width, this.props.icon.height];
        }

        if (this.props.icon.anchorX && this.props.icon.anchorY) {
          options['iconAnchor'] = [this.props.icon.anchorX, this.props.icon.anchorY];
        }

        if (this.props.icon.popupAchorX && this.props.icon.popupAchorY) {
          options['popupAnchor'] = [this.props.icon.popupAchorX, this.props.icon.popupAchorY];
        }

        icon = leaflet__WEBPACK_IMPORTED_MODULE_6___default().icon(options);
      } else {
        icon = leaflet__WEBPACK_IMPORTED_MODULE_6___default().icon({
          iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
          shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")
        });
      }

      var position = [this.props.latitude, this.props.longitude];
      var popup = null;

      if (this.props.popup) {
        popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_popup__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.props.popup, {
          latitude: this.props.latitude,
          longitude: this.props.longitude,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_8__["default"], {
        position: position,
        icon: icon,
        ref: function ref(x) {
          return _this.marker = x;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 16
        }
      }, popup);
    }
  }]);

  return UDMarker;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);



/***/ }),

/***/ "./Components/map/popup.jsx":
/*!**********************************!*\
  !*** ./Components/map/popup.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDPopup)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/Popup.js");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\popup.jsx";



var UDPopup = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UDPopup, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(UDPopup);

  function UDPopup() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UDPopup);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UDPopup, [{
    key: "render",
    value: function render() {
      var content = null;

      if (Array.isArray(this.props.content)) {
        content = this.props.content.map(function (x) {
          return UniversalDashboard.renderComponent(x);
        });
      } else {
        content = UniversalDashboard.renderComponent(this.props.content);
      }

      var position = null;

      if (this.props.latitude && this.props.longitude) {
        position = [this.props.latitude, this.props.longitude];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_5__["default"], {
        position: position,
        maxWidth: this.props.maxWidth,
        minWidth: this.props.minWidth,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 16
        }
      }, content);
    }
  }]);

  return UDPopup;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);



/***/ }),

/***/ "./Components/map/utils.jsx":
/*!**********************************!*\
  !*** ./Components/map/utils.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isGuid": () => (/* binding */ isGuid)
/* harmony export */ });
function isGuid(str) {
  if (str == null) {
    return false;
  }

  if (str[0] === "{") {
    str = str.substring(1, str.length - 1);
  }

  var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
  var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regexGuid.test(str);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./Components/map/MarkerCluster.Default.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./Components/map/MarkerCluster.Default.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".marker-cluster-small {\r\n\tbackground-color: rgba(181, 226, 140, 0.6);\r\n\t}\r\n.marker-cluster-small div {\r\n\tbackground-color: rgba(110, 204, 57, 0.6);\r\n\t}\r\n\r\n.marker-cluster-medium {\r\n\tbackground-color: rgba(241, 211, 87, 0.6);\r\n\t}\r\n.marker-cluster-medium div {\r\n\tbackground-color: rgba(240, 194, 12, 0.6);\r\n\t}\r\n\r\n.marker-cluster-large {\r\n\tbackground-color: rgba(253, 156, 115, 0.6);\r\n\t}\r\n.marker-cluster-large div {\r\n\tbackground-color: rgba(241, 128, 23, 0.6);\r\n\t}\r\n\r\n\t/* IE 6-8 fallback colors */\r\n.leaflet-oldie .marker-cluster-small {\r\n\tbackground-color: rgb(181, 226, 140);\r\n\t}\r\n.leaflet-oldie .marker-cluster-small div {\r\n\tbackground-color: rgb(110, 204, 57);\r\n\t}\r\n\r\n.leaflet-oldie .marker-cluster-medium {\r\n\tbackground-color: rgb(241, 211, 87);\r\n\t}\r\n.leaflet-oldie .marker-cluster-medium div {\r\n\tbackground-color: rgb(240, 194, 12);\r\n\t}\r\n\r\n.leaflet-oldie .marker-cluster-large {\r\n\tbackground-color: rgb(253, 156, 115);\r\n\t}\r\n.leaflet-oldie .marker-cluster-large div {\r\n\tbackground-color: rgb(241, 128, 23);\r\n}\r\n\r\n.marker-cluster {\r\n\tbackground-clip: padding-box;\r\n\tborder-radius: 20px;\r\n\t}\r\n.marker-cluster div {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tmargin-left: 5px;\r\n\tmargin-top: 5px;\r\n\r\n\ttext-align: center;\r\n\tborder-radius: 15px;\r\n\tfont: 12px \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n.marker-cluster span {\r\n\tline-height: 30px;\r\n\t}", "",{"version":3,"sources":["webpack://./Components/map/MarkerCluster.Default.css"],"names":[],"mappings":"AAAA;CACC,0CAA0C;CAC1C;AACD;CACC,yCAAyC;CACzC;;AAED;CACC,yCAAyC;CACzC;AACD;CACC,yCAAyC;CACzC;;AAED;CACC,0CAA0C;CAC1C;AACD;CACC,yCAAyC;CACzC;;CAEA,2BAA2B;AAC5B;CACC,oCAAoC;CACpC;AACD;CACC,mCAAmC;CACnC;;AAED;CACC,mCAAmC;CACnC;AACD;CACC,mCAAmC;CACnC;;AAED;CACC,oCAAoC;CACpC;AACD;CACC,mCAAmC;AACpC;;AAEA;CACC,4BAA4B;CAC5B,mBAAmB;CACnB;AACD;CACC,WAAW;CACX,YAAY;CACZ,gBAAgB;CAChB,eAAe;;CAEf,kBAAkB;CAClB,mBAAmB;CACnB,yDAAyD;CACzD;AACD;CACC,iBAAiB;CACjB","sourcesContent":[".marker-cluster-small {\r\n\tbackground-color: rgba(181, 226, 140, 0.6);\r\n\t}\r\n.marker-cluster-small div {\r\n\tbackground-color: rgba(110, 204, 57, 0.6);\r\n\t}\r\n\r\n.marker-cluster-medium {\r\n\tbackground-color: rgba(241, 211, 87, 0.6);\r\n\t}\r\n.marker-cluster-medium div {\r\n\tbackground-color: rgba(240, 194, 12, 0.6);\r\n\t}\r\n\r\n.marker-cluster-large {\r\n\tbackground-color: rgba(253, 156, 115, 0.6);\r\n\t}\r\n.marker-cluster-large div {\r\n\tbackground-color: rgba(241, 128, 23, 0.6);\r\n\t}\r\n\r\n\t/* IE 6-8 fallback colors */\r\n.leaflet-oldie .marker-cluster-small {\r\n\tbackground-color: rgb(181, 226, 140);\r\n\t}\r\n.leaflet-oldie .marker-cluster-small div {\r\n\tbackground-color: rgb(110, 204, 57);\r\n\t}\r\n\r\n.leaflet-oldie .marker-cluster-medium {\r\n\tbackground-color: rgb(241, 211, 87);\r\n\t}\r\n.leaflet-oldie .marker-cluster-medium div {\r\n\tbackground-color: rgb(240, 194, 12);\r\n\t}\r\n\r\n.leaflet-oldie .marker-cluster-large {\r\n\tbackground-color: rgb(253, 156, 115);\r\n\t}\r\n.leaflet-oldie .marker-cluster-large div {\r\n\tbackground-color: rgb(241, 128, 23);\r\n}\r\n\r\n.marker-cluster {\r\n\tbackground-clip: padding-box;\r\n\tborder-radius: 20px;\r\n\t}\r\n.marker-cluster div {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tmargin-left: 5px;\r\n\tmargin-top: 5px;\r\n\r\n\ttext-align: center;\r\n\tborder-radius: 15px;\r\n\tfont: 12px \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n.marker-cluster span {\r\n\tline-height: 30px;\r\n\t}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./Components/map/MarkerCluster.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./Components/map/MarkerCluster.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".leaflet-cluster-anim .leaflet-marker-icon, .leaflet-cluster-anim .leaflet-marker-shadow {\r\n\t-webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\t-moz-transition: -moz-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\t-o-transition: -o-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\ttransition: transform 0.3s ease-out, opacity 0.3s ease-in;\r\n}\r\n\r\n.leaflet-cluster-spider-leg {\r\n\t/* stroke-dashoffset (duration and function) should match with leaflet-marker-icon transform in order to track it exactly */\r\n\t-webkit-transition: -webkit-stroke-dashoffset 0.3s ease-out, -webkit-stroke-opacity 0.3s ease-in;\r\n\t-moz-transition: -moz-stroke-dashoffset 0.3s ease-out, -moz-stroke-opacity 0.3s ease-in;\r\n\t-o-transition: -o-stroke-dashoffset 0.3s ease-out, -o-stroke-opacity 0.3s ease-in;\r\n\ttransition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;\r\n}\r\n", "",{"version":3,"sources":["webpack://./Components/map/MarkerCluster.css"],"names":[],"mappings":"AAAA;CACC,yEAAyE;CACzE,mEAAmE;CACnE,+DAA+D;CAC/D,yDAAyD;AAC1D;;AAEA;CACC,2HAA2H;CAC3H,gGAAgG;CAChG,uFAAuF;CACvF,iFAAiF;CACjF,wEAAwE;AACzE","sourcesContent":[".leaflet-cluster-anim .leaflet-marker-icon, .leaflet-cluster-anim .leaflet-marker-shadow {\r\n\t-webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\t-moz-transition: -moz-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\t-o-transition: -o-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\ttransition: transform 0.3s ease-out, opacity 0.3s ease-in;\r\n}\r\n\r\n.leaflet-cluster-spider-leg {\r\n\t/* stroke-dashoffset (duration and function) should match with leaflet-marker-icon transform in order to track it exactly */\r\n\t-webkit-transition: -webkit-stroke-dashoffset 0.3s ease-out, -webkit-stroke-opacity 0.3s ease-in;\r\n\t-moz-transition: -moz-stroke-dashoffset 0.3s ease-out, -moz-stroke-opacity 0.3s ease-in;\r\n\t-o-transition: -o-stroke-dashoffset 0.3s ease-out, -o-stroke-opacity 0.3s ease-in;\r\n\ttransition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react-leaflet/es/Marker.js":
/*!*************************************************!*\
  !*** ./node_modules/react-leaflet/es/Marker.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");









var Marker = /*#__PURE__*/function (_MapLayer) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Marker, _MapLayer);

  function Marker() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = Marker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__.Marker(props.position, this.getOptions(props));
    this.contextValue = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }

    if (toProps.icon !== fromProps.icon) {
      this.leafletElement.setIcon(toProps.icon);
    }

    if (toProps.zIndexOffset !== fromProps.zIndexOffset) {
      this.leafletElement.setZIndexOffset(toProps.zIndexOffset);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.draggable !== fromProps.draggable) {
      if (toProps.draggable === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children == null || this.contextValue == null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_context__WEBPACK_IMPORTED_MODULE_4__.LeafletProvider, {
      value: this.contextValue
    }, children);
  };

  return Marker;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_context__WEBPACK_IMPORTED_MODULE_4__.withLeaflet)(Marker));

/***/ }),

/***/ "./Components/map/MarkerCluster.Default.css":
/*!**************************************************!*\
  !*** ./Components/map/MarkerCluster.Default.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MarkerCluster_Default_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./MarkerCluster.Default.css */ "./node_modules/css-loader/dist/cjs.js!./Components/map/MarkerCluster.Default.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MarkerCluster_Default_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_MarkerCluster_Default_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MarkerCluster_Default_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MarkerCluster_Default_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./Components/map/MarkerCluster.css":
/*!******************************************!*\
  !*** ./Components/map/MarkerCluster.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MarkerCluster_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./MarkerCluster.css */ "./node_modules/css-loader/dist/cjs.js!./Components/map/MarkerCluster.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MarkerCluster_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_MarkerCluster_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MarkerCluster_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MarkerCluster_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-icon-2x.png":
/*!*************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-icon-2x.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "680f69f3c2e6b90c1812.png";

/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-shadow.png":
/*!************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-shadow.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0c6cc1401c107b501ef.png";

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

}]);
//# sourceMappingURL=Components_map_cluster-layer_jsx.4801c5ad01874741f87a9e617215aa63.bundle.map