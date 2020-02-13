/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/src/js/kgpmeter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/js/FamilyTree.js":
/*!**********************************!*\
  !*** ./app/src/js/FamilyTree.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FamilyTree = undefined;\n\nvar _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ \"./node_modules/babel-runtime/helpers/toConsumableArray.js\");\n\nvar _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);\n\nvar _set = __webpack_require__(/*! babel-runtime/core-js/set */ \"./node_modules/babel-runtime/core-js/set.js\");\n\nvar _set2 = _interopRequireDefault(_set);\n\nvar _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ \"./node_modules/babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FamilyTree = exports.FamilyTree = function () {\n  function FamilyTree(nodes) {\n    (0, _classCallCheck3.default)(this, FamilyTree);\n\n    this.nodes = nodes;\n\n    this.maxDepth = 0;\n    this.minFreeIndivId = _.max(_.map(_.filter(this.nodes, function (n) {\n      return n.tag == \"INDI\";\n    }), function (nd) {\n      return parseInt(nd.id.replace(/@|F|I/g, \"\"));\n    })) + 1;\n    this.minFreeFamId = _.max(_.map(_.filter(this.nodes, function (n) {\n      return n.tag == \"FAM\";\n    }), function (nd) {\n      return parseInt(nd.id.replace(/@|F|I/g, \"\"));\n    })) + 1;\n    if (isNaN(this.minFreeIndivId)) {\n      this.minFreeIndivId = 1;\n    }\n    if (isNaN(this.minFreeFamId)) {\n      this.minFreeFamId = 1;\n    }\n\n    // add names to family nodes, and spouse() method\n    this.nodes = _.forEach(this.nodes, function (n) {\n      if (n.tag === \"FAM\") {\n        n.name += \" \" + (n.husb ? n.husb.name : \"\") + \",\" + (n.wife ? n.wife.name : \"\");\n      }\n      FamilyTree.addSpouseMethod(n);\n    });\n\n    //compute nodes positions\n    //this.computeLayout()\n  }\n\n  /**\n   * Serialize the family tree in a JSON ready JS object\n   * \n   * By default this only serializes the basic properties of nodes according to family-tree:\n   * - id, name, sex, tag, fams, famc, chil, wife, husb\n   * \n   * Moreover, FamilyTree nodes are linked (with properties fams, famc, chil, wife, husb) together\n   * by references, this creates cycles.\n   * Hence, this method also replace inter-nodes references by node ids.\n   * \n   * @param {Array[string]} properties (optional) additional properties to be saved\n   * @returns {Object} a JSON ready JS object with structure\n   * {\n   *   class : \"FamilyTree\", // Class of the object\n   *   nodes : nodes, // nodes in an array with ids as links\n   *   properties : properties // the list of properties the nodes have\n   * }\n   */\n\n\n  (0, _createClass3.default)(FamilyTree, [{\n    key: \"serialize\",\n    value: function serialize() {\n      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      properties = [\"id\", \"name\", \"sex\", \"tag\", \"fams\", \"famc\", \"chil\", \"wife\", \"husb\"].concat(properties).filter(function (v, i, s) {\n        return s.indexOf(v) === i;\n      });\n      var nodes = this.nodesArray();\n      nodes = nodes.map(function (n) {\n        var tr = {};\n        properties.forEach(function (p) {\n          return tr[p] = n[p];\n        });\n        return tr;\n      });\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = (0, _getIterator3.default)(nodes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var n = _step.value;\n\n          n.fams = n.fams ? n.fams.map(function (f) {\n            return f.id;\n          }) : null;\n          n.chil = n.chil ? n.chil.map(function (c) {\n            return c.id;\n          }) : null;\n          n.famc = n.famc ? n.famc.id : null;\n          n.wife = n.wife ? n.wife.id : null;\n          n.husb = n.husb ? n.husb.id : null;\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return {\n        class: \"FamilyTree\",\n        nodes: nodes,\n        properties: properties\n      };\n    }\n    /** Takes care of re-establishing the object references in nodes links, the inverse of serialize()\n     * \n     * @param {Array[nodes]} nodesArray an array of nodes, where the fams, famc, chil, wife, husb properties are node ids\n     * @returns A dictionary with node ids as keys and nodes as values and fams, famc, chil, wife properties are direct references\n     */\n\n  }, {\n    key: \"nodesArray\",\n    value: function nodesArray() {\n      return _.map(this.nodes, function (n) {\n        return n;\n      });\n    }\n\n    /**\n     * Checks whether the Family Tree contains the given node (a node with id property or directly a str id)\n     * @param {node or str} node \n     */\n\n  }, {\n    key: \"contains\",\n    value: function contains(node) {\n      return Boolean(node.id ? this.nodes[node.id] : this.nodes[node]);\n    }\n\n    /**\n     * Get links between all nodes: parents, children and family nodes\n     */\n\n  }, {\n    key: \"getLinks\",\n    value: function getLinks() {\n      var links = [];\n      _.forEach(this.nodes, function (node) {\n        if (node.famc) {\n          links.push([node.famc, node]);\n        }\n        if (node.wife) {\n          links.push([node.wife, node]);\n        }\n        if (node.husb) {\n          links.push([node.husb, node]);\n        }\n      });\n      return links;\n    }\n  }, {\n    key: \"getLinksAsIds\",\n    value: function getLinksAsIds() {\n      return this.getLinks().map(function (l) {\n        return l.map(function (n) {\n          return n.id;\n        });\n      });\n    }\n\n    /**\n     * Get links between parents and children, removing family nodes\n     */\n\n  }, {\n    key: \"getParentChildLinks\",\n    value: function getParentChildLinks() {\n      var links = [];\n      var addEdge = function addEdge(a, b) {\n        links.push([a, b]);\n      };\n      this.nodesArray().filter(function (n) {\n        return n.tag == \"FAM\";\n      }).forEach(function (familyNode) {\n        if (familyNode.chil) {\n          familyNode.chil.forEach(function (child) {\n            if (familyNode.wife) addEdge(familyNode.wife, child);\n            if (familyNode.husb) addEdge(familyNode.husb, child);\n          });\n        }\n      });\n      return links;\n    }\n  }, {\n    key: \"getParentChildLinksAsIds\",\n    value: function getParentChildLinksAsIds() {\n      return this.getParentChildLinks().map(function (link) {\n        return [link[0].id, link[1].id];\n      });\n    }\n\n    /*\n    Computes depth of all the nodes in the family tree\n    Also computes max- and min-deph reachable from node relative to centerNode\n    adds following properties to each node:\n    - depth\n    - minDepth\n    - maxDepth\n    */\n\n  }, {\n    key: \"_computeDepths\",\n    value: function _computeDepths(startNode) {\n\n      _.forEach(this.nodes, function (n) {\n        return delete n.depth;\n      });\n      this._computeDepthsRecursive(startNode, 0);\n\n      //ensure non-negative depths & compute family tree global maximum depth\n      var depthExtent = d3.extent(_.map(this.nodes, function (n) {\n        return n.depth;\n      }));\n      var minDepth = depthExtent[0];\n      this.maxDepth = depthExtent[1] - minDepth;\n      //this.nodes = _.mapValues(this.nodes, n=> {n.depth-=minDepth;return n})\n      _.forEach(this.nodes, function (n) {\n        n.depth -= minDepth;\n        n.minDepth -= minDepth;\n        n.maxDepth -= minDepth;\n      });\n    }\n  }, {\n    key: \"_computeDepthsRecursive\",\n    value: function _computeDepthsRecursive(node, depth) {\n      var _this = this;\n\n      if (!node) {\n        return;\n      }\n      //console.log(\"_computeDepthsRecursive! \"+node.id+\" at depth \"+depth)\n      if (node.depth != undefined) {\n        if (node.depth != depth) {\n          throw \"DepthError: \" + node.id + \" resolves to 2 different depths: \" + node.depth + \" and \" + depth;\n        }\n        return;\n      }\n      var maxmindepths = [[depth, depth]];\n\n      node.depth = depth;\n      maxmindepths.push(this._computeDepthsRecursive(node.husb, depth));\n      maxmindepths.push(this._computeDepthsRecursive(node.wife, depth));\n      maxmindepths.push(this._computeDepthsRecursive(node.famc, depth - 1));\n      if (node.fams) {\n        node.fams.forEach(function (fam) {\n          return maxmindepths.push(_this._computeDepthsRecursive(fam, depth));\n        });\n      }\n      if (node.chil) {\n        node.chil.map(function (chil) {\n          return maxmindepths.push(_this._computeDepthsRecursive(chil, depth + 1));\n        });\n      }\n      maxmindepths = maxmindepths.filter(function (mmd) {\n        return mmd != undefined;\n      });\n      node.minDepth = d3.min(maxmindepths, function (d) {\n        return d[0];\n      });\n      node.maxDepth = d3.max(maxmindepths, function (d) {\n        return d[1];\n      });\n      return [node.minDepth, node.maxDepth];\n    }\n  }, {\n    key: \"getNode\",\n    value: function getNode(nodeOrNodeId) {\n      return _.isString(nodeOrNodeId) ? this.nodes[nodeOrNodeId] : nodeOrNodeId;\n    }\n\n    /* add a family to tree, wife, husb chil must be nodes or node ids*/\n\n  }, {\n    key: \"addFamily\",\n    value: function addFamily(wife, husb, child) {\n      //console.log(\"addFamily\")\n      var node = {\n        id: FamilyTree.gedcomId(this.minFreeFamId++, \"F\"),\n        tag: \"FAM\",\n        wife: this.getNode(wife),\n        husb: this.getNode(husb),\n        chil: [child].map(this.getNode).filter(function (x) {\n          return x != undefined;\n        }),\n        spouse: function spouse() {\n          return undefined;\n        }\n      };\n      this.nodes[node.id] = node;\n      return node;\n    }\n\n    /* add an individual to tree, famcId,famsId must be nodes or node ids*/\n\n  }, {\n    key: \"addIndividual\",\n    value: function addIndividual(name, famc, fams, sex) {\n      //console.log(\"addIndividual\")\n      var node = {\n        id: FamilyTree.gedcomId(this.minFreeIndivId++),\n        tag: \"INDI\",\n        name: name,\n        famc: this.getNode(famc),\n        fams: [fams].map(this.getNode).filter(function (x) {\n          return x != undefined;\n        }),\n        sex: sex\n      };\n      FamilyTree.addSpouseMethod(node);\n      this.nodes[node.id] = node;\n\n      return node;\n    }\n\n    /* add child to given parent in tree\n    Also adds spouse if needed\n    */\n\n  }, {\n    key: \"addChild\",\n    value: function addChild(name, sex, parent) {\n      var addSpouseToo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n      var spouseDefaultName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"spouse\";\n\n      //console.log(\"addChild\")\n      parent = this.getNode(parent);\n      var famc = parent.fams[0];\n      if (!famc) {\n        famc = parent.sex == \"F\" ? this.addFamily(parent) : this.addFamily(undefined, parent);\n        parent.fams.push(famc);\n      }\n      if (addSpouseToo && !parent.spouse()) {\n        this.addSpouse(spouseDefaultName, parent);\n      }\n      var child = this.addIndividual(name, famc, undefined, sex);\n      famc.chil.push(child);\n      return child;\n    }\n\n    /* add a parent to given child in tree, childId must be a node id or undefined*/\n\n  }, {\n    key: \"addParent\",\n    value: function addParent(name, sex, child) {\n      child = this.getNode(child);\n      //console.log(\"addParent\")\n      var fams = child.famc;\n      if (!fams) {\n        fams = this.addFamily(undefined, undefined, child);\n        child.famc = fams;\n      }\n      var parent = sex === \"F\" ? fams.wife : fams.husb;\n      if (parent) {\n        return parent;\n      }\n      parent = this.addIndividual(name, undefined, fams, sex);\n      sex == \"F\" ? fams.wife = parent : fams.husb = parent;\n      return parent;\n    }\n\n    /* add a spouse to given spouse in tree, spouseId must be a node id or undefined*/\n\n  }, {\n    key: \"addSpouse\",\n    value: function addSpouse(name, spouse) {\n      var spouse1 = this.getNode(spouse);\n      //console.log(\"addParent\")\n      var fams = spouse1.fams[0];\n      if (!fams) {\n        fams = spouse1.sex == \"F\" ? this.addFamily(spouse1) : this.addFamily(undefined, spouse1);\n        spouse1.fams.push(fams);\n      }\n      var spouse2 = spouse1.sex === \"F\" ? fams.husb : fams.wife;\n      if (spouse2) {\n        return spouse2;\n      }\n      spouse2 = this.addIndividual(name, undefined, fams, spouse1.sex === \"F\" ? \"M\" : \"F\");\n      spouse2.sex == \"F\" ? fams.wife = spouse2 : fams.husb = spouse2;\n      return spouse2;\n    }\n\n    /*\n    properly removes a given node from the family tree, including links and references to it.\n    Also automatically deletes family nodes that are no longer needed.\n    Can also delete all the nodes that are no longer connected to the main tree.\n     arguments:\n    - node: node or node id to be deleted\n    - deleteNodesNotConnectedTo: node or node id, the function deletes all the nodes that are no longer connected to it once the first node has been removed.\n    */\n\n  }, {\n    key: \"deleteNode\",\n    value: function deleteNode(node) {\n      var deleteNodesNotConnectedTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n      node = this.getNode(node);\n      //console.log(\"deleteNode, node.id=\"+node.id+\", \")\n      if (!node) {\n        return new _set2.default();\n      }\n\n      // remove references to this node in other connected nodes\n      if (node.famc) {\n        node.famc.chil = node.famc.chil.filter(function (c) {\n          return c.id != node.id;\n        });\n      }\n      if (node.husb) {\n        node.husb.fams = node.husb.fams.filter(function (c) {\n          return c.id != node.id;\n        });\n      }\n      if (node.wife) {\n        node.wife.fams = node.wife.fams.filter(function (c) {\n          return c.id != node.id;\n        });\n      }\n      if (node.chil) {\n        node.chil.forEach(function (c) {\n          return delete c.famc;\n        });\n      }\n      if (node.fams) {\n        node.fams.forEach(function (c) {\n          if (c.wife && c.wife.id == node.id) {\n            delete c.wife;\n          }\n          if (c.husb && c.husb.id == node.id) {\n            delete c.husb;\n          }\n        });\n      }\n      var deletedNodeId = node.id;\n      delete this.nodes[node.id];\n\n      // remove family nodes that are no longer needed\n      var needlessFamilies = _.filter(this.nodes, function (n) {\n        return n.tag === \"FAM\" && (\n        //( (!n.wife) && (!n.husb)  && (n.chil?n.chil.length<=1:true)) || // no wife, no husb and 1 child -> family no longer needed\n        !n.wife && !n.husb || // no wife, no husb -> family no longer needed\n        (!n.wife || !n.husb) && (n.chil ? n.chil.length == 0 : true) // only 1 spouse and no child -> family no longer needed\n        );\n      });\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = (0, _getIterator3.default)(needlessFamilies), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var fam = _step2.value;\n          this.deleteNode(fam);\n        }\n\n        // also eliminate elements that are no longer connected to the deleteNodesNotConnectedTo node and families without spouses\n        //console.log(\"deleteNode, nodes pre-_computeDepths():\")\n        //console.log(this.nodes)\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2.return) {\n            _iterator2.return();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n\n      var noLongerConnectedNodesIds = [];\n      if (deleteNodesNotConnectedTo) {\n        var startNode = this.getNode(deleteNodesNotConnectedTo);\n        this._computeDepths(startNode);\n        noLongerConnectedNodesIds = _.filter(this.nodes, function (n) {\n          return n.depth == undefined || isNaN(n.depth);\n        }).map(function (n) {\n          return n.id;\n        });\n      }\n      var deletedNodeIds = new _set2.default([].concat((0, _toConsumableArray3.default)(noLongerConnectedNodesIds), (0, _toConsumableArray3.default)(needlessFamilies.map(function (n) {\n        return n.id;\n      })))).add(deletedNodeId);\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = (0, _getIterator3.default)(deletedNodeIds), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var nid = _step3.value;\n          delete this.nodes[nid];\n        }\n\n        // ensure clean chil and fams arrays\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3.return) {\n            _iterator3.return();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n\n      this.cleanChilArrays();\n      this.cleanFamsArrays();\n\n      return deletedNodeIds;\n    }\n\n    // ensure there aren't any \"undefined\" element in nodes' chil or fams arrays\n\n  }, {\n    key: \"cleanChilArrays\",\n    value: function cleanChilArrays() {\n      _.forEach(this.nodes, function (node) {\n        return node.chil ? node.chil = node.chil.filter(Boolean) : node.chil;\n      });\n    }\n  }, {\n    key: \"cleanFamsArrays\",\n    value: function cleanFamsArrays() {\n      _.forEach(this.nodes, function (node) {\n        return node.fams ? node.fams = node.fams.filter(Boolean) : node.fams;\n      });\n    }\n  }], [{\n    key: \"unserializeParseNodes\",\n    value: function unserializeParseNodes(serializedFtree) {\n      var nodesDict = {};\n      serializedFtree.nodes.forEach(function (n) {\n        return nodesDict[n.id] = n;\n      });\n      var _iteratorNormalCompletion4 = true;\n      var _didIteratorError4 = false;\n      var _iteratorError4 = undefined;\n\n      try {\n        for (var _iterator4 = (0, _getIterator3.default)(serializedFtree.nodes), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n          var n = _step4.value;\n\n          n.fams = n.fams ? n.fams.map(function (f) {\n            return nodesDict[f];\n          }) : [];\n          n.chil = n.chil ? n.chil.map(function (c) {\n            return nodesDict[c];\n          }) : [];\n          n.famc = n.famc ? nodesDict[n.famc] : null;\n          n.wife = n.wife ? nodesDict[n.wife] : null;\n          n.husb = n.husb ? nodesDict[n.husb] : null;\n        }\n      } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion4 && _iterator4.return) {\n            _iterator4.return();\n          }\n        } finally {\n          if (_didIteratorError4) {\n            throw _iteratorError4;\n          }\n        }\n      }\n\n      return nodesDict;\n    }\n    /** Unserializes a FamilyTree serialized with JSON.stringify(FamilyTree.serialize())\n     * \n     * @param {string} serializedFtree\n     * @returns {FamilyTree}\n     */\n\n  }, {\n    key: \"unserialize\",\n    value: function unserialize(serializedFtree) {\n      serializedFtree = JSON.parse(serializedFtree);\n      return new FamilyTree(FamilyTree.unserializeParseNodes(serializedFtree));\n    }\n  }, {\n    key: \"gedcomId\",\n    value: function gedcomId(idnb) {\n      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"I\";\n\n      return \"@\" + type + idnb + \"@\";\n    }\n  }, {\n    key: \"addSpouseMethod\",\n    value: function addSpouseMethod(n) {\n      n.spouse = function () {\n        var famsIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n        // only if desired fams exists...\n        if (this.fams && this.fams.length > famsIndex) {\n          var fams = this.fams[famsIndex];\n          // only if both spouses... present\n          if (fams.wife && fams.husb) {\n            // ...can we find the spouse\n            return this.id == fams.wife.id ? fams.husb : fams.wife;\n          }\n        }\n        return undefined;\n      };\n    }\n  }]);\n  return FamilyTree;\n}();\n\n//# sourceURL=webpack:///./app/src/js/FamilyTree.js?");

/***/ }),

/***/ "./app/src/js/FamilyTreeArtist.js":
/*!****************************************!*\
  !*** ./app/src/js/FamilyTreeArtist.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FamilyTreeArtist = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _NodeButtonsGroup = __webpack_require__(/*! ./NodeButtonsGroup.js */ \"./app/src/js/NodeButtonsGroup.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FamilyTreeArtist = exports.FamilyTreeArtist = function () {\n  function FamilyTreeArtist(kgp, i18n) {\n    var transitionDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 800;\n    (0, _classCallCheck3.default)(this, FamilyTreeArtist);\n\n    this.kgp = kgp;\n    this.ftree = this.kgp.ftree;\n    this.i18n = i18n;\n    this.heightFtree = 0;\n    this.init(transitionDuration);\n  }\n\n  (0, _createClass3.default)(FamilyTreeArtist, [{\n    key: \"init\",\n    value: function init() {\n      var transitionDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;\n\n      this.ftree = this.kgp.ftree;\n      var self = this;\n      this.svgg = this.kgp.svg.append(\"g\").attr(\"id\", \"familytree-g\");\n\n      this.update(false, transitionDuration);\n\n      // distinguish you node\n      //this.kgp.target = this.ftree.nodes[this.kgp.youNodeId]\n      var meNodeGroup = d3.select(\"#\" + FamilyTreeArtist.nodeGroupId(this.kgp.youNodeId)).classed(\"you\", true).each(function (d) {\n        d.buttons = _NodeButtonsGroup.youNodeButtons; //youTargetNodeButtons\n        d.i18nName = \"you\";\n      });\n      meNodeGroup.select(\".node-name\").each(function () {\n        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(d) {\n          var nodeNameYou;\n          return _regenerator2.default.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return self.i18n.t(\"node-name-you\");\n\n                case 2:\n                  nodeNameYou = _context.sent;\n\n                  if (Boolean(d.name) & d.name != nodeNameYou) {\n                    this.innerHTML = d.name;\n                  } else {\n                    this.setAttribute(self.i18n.keyAttr, \"node-name-you\");\n                  }\n\n                case 4:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, this);\n        }));\n\n        return function (_x3) {\n          return _ref.apply(this, arguments);\n        };\n      }());\n\n      this.initNodeButtons();\n\n      // hide on mouseleave\n      this.nodeButtons.g.on(\"mouseleave.hide\", function (d) {\n        return self.nodeButtons.hide();\n      });\n\n      // highlight links on hover\n      this.nodeButtons.g.on(\"mouseover.toggleHighlightNodeLinks\", self.generateToggleHighlightNodeLinks(true));\n      this.nodeButtons.g.on(\"mouseleave.toggleHighlightNodeLinks\", self.generateToggleHighlightNodeLinks(false));\n      this.nodeButtons.g.on(\"click.toggleHighlightNodeLinks\", self.generateToggleHighlightNodeLinks(false));\n    }\n  }, {\n    key: \"update\",\n    value: function update(updateSource) {\n      var transitionsDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;\n\n      var self = this;\n      updateSource = updateSource ? { x: updateSource.x, y: updateSource.y } : false;\n      this.ftree.computeLayout(false);\n      this.ftree.center(true, false);\n\n      // rescale tree if gets out of svg\n      var ftreeLeftMargin = 70; // 20 pix for target button, 50 for first node circle\n      var ftreeRightMargin = 170; // 120 for add-relative menu, 50 for last node circle\n      var widthFtree = ftreeLeftMargin + this.ftree.width() + ftreeRightMargin;\n\n      var miny = this.ftree.minY();\n      this.heightFtree = this.ftree.maxY() - miny + 150;\n      // if we can still resize the svg -> let's do it!\n\n      var widthScaleFactor = d3.min([1, this.kgp.svgWidth / widthFtree]);\n      this.kgp.updateSvgHeight(this.heightFtree * widthScaleFactor, transitionsDuration);\n\n      var scaleFactor = d3.min([1, widthScaleFactor, this.kgp.svgHeight / this.heightFtree]);\n\n      var translateX = widthFtree < this.kgp.svgWidth - ftreeRightMargin / 2 ? this.kgp.svgWidth / 2 : scaleFactor * (this.ftree.width() / 2 + ftreeLeftMargin);\n\n      this.svgg.transition().duration(transitionsDuration).attr(\"transform\", \"translate(\" + translateX + \",\" + scaleFactor * (80 - miny) + \") scale(\" + scaleFactor + \")\");\n      // for tutorial videos, use these settings:\n      //.attr(\"transform\",\"translate(\"+550+\",\"+(scaleFactor*(75-miny))+\") scale(\"+scaleFactor+\")\")\n\n      // updateSource:\n      updateSource = updateSource ? updateSource : { x: translateX + (widthFtree - ftreeRightMargin) / 2, y: 50 };\n      this.updateLinks(updateSource, transitionsDuration);\n      this.updateNodes(updateSource, transitionsDuration);\n    }\n  }, {\n    key: \"updateLinks\",\n    value: function updateLinks(source, transitionsDuration) {\n      var _this = this;\n\n      var self = this;\n\n      // adds the links between the nodes\n      var link = this.svgg.selectAll(\".link\");\n\n      // remove links whose source or target is no longer in this.ftree\n      var keepLink = function keepLink(d) {\n        return Boolean(_this.ftree.nodes[d[0].id]) && Boolean(_this.ftree.nodes[d[1].id]);\n      };\n      var linkExit = link.filter(function (d) {\n        return !keepLink(d);\n      });\n      linkExit.transition().duration(transitionsDuration).attr(\"d\", function (d) {\n        return FamilyTreeArtist.renderLink(d[1], d[1]);\n      }).remove();\n\n      link = link.filter(keepLink).data(this.ftree.getLinks(),\n      // add key function: make sure each ftree-link is assigned to the right svg-link-path\n      function (d) {\n        return d ? FamilyTreeArtist.linkNodeId(d[0].id, d[1].id) : this.id;\n      });\n      var linkEnter = link.enter().insert(\"path\", \".nodeg\").attr(\"id\", function (d) {\n        return FamilyTreeArtist.linkNodeId(d[0].id, d[1].id);\n      }).attr(\"class\", function (d) {\n        return \"link \" + FamilyTreeArtist.linkNodeClass(d[0].id) + \" \" + FamilyTreeArtist.linkNodeClass(d[1].id);\n      }).attr(\"d\", FamilyTreeArtist.renderLink(source, source)).attr(\"fill\", \"none\").attr(\"stroke\", \"lightgrey\");\n\n      var linkUpdate = linkEnter.merge(link);\n      linkUpdate.transition().duration(transitionsDuration).attr(\"d\", function (d) {\n        return FamilyTreeArtist.renderLink(d[0], d[1]);\n      });\n    }\n  }, {\n    key: \"updateNodes\",\n    value: function updateNodes(source, transitionsDuration) {\n      var _this2 = this;\n\n      var self = this;\n\n      // maps the node data to the tree layout\n      // let nodes = this.ftree.nodesArray()\n\n      // adds each node as a group\n      var node = this.svgg.selectAll(\".nodeg\");\n\n      // remove nodes whose d is no longer in ftree\n      var keepNode = function keepNode(d) {\n        return Boolean(_this2.ftree.nodes[d.id]);\n      };\n      node.filter(function (d) {\n        return !keepNode(d);\n      }).remove();\n\n      node = node.filter(keepNode).data(this.ftree.nodesArray().filter(function (n) {\n        return !n.hidden;\n      }));\n      //disable action buttons during the transition\n      //node.on(\"mouseenter.actionButtons\",null)\n\n      // nodeEnter: all the new nodes\n      var nodeEnter = node.enter().append(\"g\").attr(\"id\", function (d) {\n        return FamilyTreeArtist.nodeGroupId(d.id);\n      }).attr(\"class\", \"nodeg\").attr(\"transform\", \"translate(\" + source.x + \",\" + source.y + \")\");\n\n      // fam nodes: add height salt, for a different branching height for all famc\n      var famNodes = nodeEnter.filter(function (d) {\n        return d.tag === \"FAM\";\n      });\n      famNodes.insert(\"circle\", \".nodeg\").attr(\"r\", self.kgp.famNodeSize.width / 2)\n      // add man/woman/family classes\n      .attr(\"class\", function (d) {\n        var tr = \"node-circle \";\n        // family classes: one for each member of the family\n        tr += d.husb ? FamilyTreeArtist.famNodeClass(d.husb.id) + \" \" : \"\";\n        tr += d.wife ? FamilyTreeArtist.famNodeClass(d.wife.id) + \" \" : \"\";\n        if (d.chil) {\n          d.chil.forEach(function (c) {\n            tr += FamilyTreeArtist.famNodeClass(c.id) + \" \";\n          });\n        }\n        return tr;\n      }).attr(\"fill\", \"lightgrey\");\n      famNodes.each(function (d) {\n        // @F1@ is special case: it is only famc whose wife and husb aren't targets in links\n        d.heightSalt = d.id == \"@F1@\" ? 0 : 15 - Math.random() * 30;\n      });\n\n      // nodes of individuals\n      var indiNodes = nodeEnter.filter(function (d) {\n        return d.tag === \"INDI\";\n      });\n      indiNodes.append(\"circle\").attr(\"r\", self.kgp.indiNodeSize.width / 2)\n      // add man/woman/family classes\n      .attr(\"class\", function (d) {\n        var tr = \"node-circle \";\n        if (d.sex == \"M\") {\n          tr += \" man\";\n        } else if (d.sex == \"F\") {\n          tr += \" woman\";\n        }\n        return tr;\n      });\n      // draw buttons on mouseenter&click\n      indiNodes.on(\"mouseenter.actionButtons\", function (node) {\n        return self.nodeButtons.wake(node);\n      });\n      indiNodes.on(\"click.actionButtons\", function (node) {\n        return self.nodeButtons.wake(node);\n      });\n      // add buttons to nodes\n      indiNodes.each(function (d) {\n        d.buttons = _NodeButtonsGroup.standardNodeButtons;\n      });\n\n      // adds the DNA logo\n      indiNodes.append(\"text\").attr(\"class\", \"fas fa-dna dna-logo node-logo node-logo-large\").classed(\"invisible-dna\", function (d) {\n        return !d.sequencedDNA;\n      }).attr(\"x\", \"-16px\").attr(\"y\", \" 0px\").attr(\"width\", \"40px\").attr(\"height\", \"40px\").attr('font-family', 'FontAwesome').attr('font-size', \"36px\").text(\"\\uF471\");\n\n      // Node name: a div that has contenteditable\n      indiNodes.append(\"foreignObject\").attr(\"x\", \"-40px\").attr(\"y\", \"14px\").attr(\"width\", \"80px\").attr(\"height\", \"2em\").append(\"xhtml:div\").attr(\"contenteditable\", \"true\").attr(\"class\", \"node-name\").attr(\"spellcheck\", \"false\")\n      // select all text on focus\n      .on(\"focus\", function (d) {\n        var el = this;\n        requestAnimationFrame(function () {\n          var range = document.createRange();\n          range.selectNodeContents(el);\n          var sel = window.getSelection();\n          sel.removeAllRanges();\n          sel.addRange(range);\n        });\n      }).each(function () {\n        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(d) {\n          var nodeNameMan, nodeNameWoman, nodeNameYou;\n          return _regenerator2.default.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  _context2.next = 2;\n                  return self.i18n.t(\"node-name-man\");\n\n                case 2:\n                  nodeNameMan = _context2.sent;\n                  _context2.next = 5;\n                  return self.i18n.t(\"node-name-woman\");\n\n                case 5:\n                  nodeNameWoman = _context2.sent;\n                  _context2.next = 8;\n                  return self.i18n.t(\"node-name-you\");\n\n                case 8:\n                  nodeNameYou = _context2.sent;\n\n                  if (Boolean(d.name) & d.name != nodeNameMan & d.name != nodeNameWoman) {\n                    // only set innerHTML if the name is truly non-standard\n                    this.innerHTML = d.name;\n                  } else if (d.name != nodeNameYou & this.getAttribute(self.i18n.keyAttr) != \"node-name-you\") {\n                    // only set self.i18n.keyAttr if it's not the \"you\" node\n                    //this.setAttribute(self.i18n.keyAttr, d.sex==\"F\"? \"node-name-woman\":\"node-name-man\")\n                    this.setAttribute(self.i18n.keyAttr, \"node-name-\" + d.i18nName);\n                  }\n                  // remove i18n attribute on keydown and quit name editing on enter\n                  // using addEventListener and not d3.on() as accessing the event \n                  // with d3.event might cause problem with webpack/bundler\n                  this.addEventListener(\"keydown\", function (event) {\n                    this.removeAttribute(self.i18n.keyAttr);\n                    d.name = this.innerHTML;\n                    self.kgp.saveFamilyTreeToLocalStorage();\n                    // if line return: remove selection and unselect element\n                    if (event.keyCode == 13) {\n                      window.getSelection().removeAllRanges();\n                      this.blur();\n                    }\n                    return false;\n                  });\n\n                case 11:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2, this);\n        }));\n\n        return function (_x5) {\n          return _ref2.apply(this, arguments);\n        };\n      }());\n\n      // old&new nodes together\n      var nodeUpdate = nodeEnter.merge(node);\n      // hide families with only 1 spouse\n      nodeUpdate.filter(function (d) {\n        return d.tag === \"FAM\";\n      }).classed(\"hidden\", function (d) {\n        return !(d.wife && d.husb);\n      });\n      // highlight links\n      nodeUpdate.on(\"mouseenter.toggleHighlightNodeLinks\", self.generateToggleHighlightNodeLinks(true));\n      nodeUpdate.on(\"mouseleave.toggleHighlightNodeLinks\", self.generateToggleHighlightNodeLinks(false));\n      // transition nodes to new positions smoothly\n      nodeUpdate.transition().duration(transitionsDuration).attr(\"transform\", function (d) {\n        return \"translate(\" + d.x + \",\" + d.y + \")\";\n      });\n    }\n  }, {\n    key: \"setAsTarget\",\n    value: function setAsTarget(newTarget, oldTarget) {\n      this.nodeButtons.hide();\n      // reset old target's buttons, logo & sequenced state\n      if (oldTarget) {\n        oldTarget.buttons = oldTarget.id == this.kgp.youNodeId ? _NodeButtonsGroup.youNodeButtons : _NodeButtonsGroup.standardNodeButtons;\n        d3.select(\"#\" + FamilyTreeArtist.nodeGroupId(oldTarget.id) + \" .node-logo\").attr(\"class\", \"fas fa-dna dna-logo node-logo node-logo-large \" + (oldTarget.lastSequencedDNA ? \"\" : \"invisible-dna\")).attr(\"x\", \"-16px\").text(\"\\uF471\");\n        oldTarget.sequencedDNA = oldTarget.lastSequencedDNA;\n        oldTarget.lastSequencedDNA = undefined;\n      }\n      // set new target\n      newTarget.buttons = newTarget.id == this.kgp.youNodeId ? _NodeButtonsGroup.youTargetNodeButtons : _NodeButtonsGroup.targetNodeButtons;\n      // ...ensure it's not sequenced\n      newTarget.lastSequencedDNA = newTarget.sequencedDNA;\n      newTarget.sequencedDNA = false;\n      //nodeg.select(\".dna-logo\").classed(\"invisible-dna\", !node.sequencedDNA)\n\n      // change the logo\n      d3.select(\"#\" + FamilyTreeArtist.nodeGroupId(newTarget.id) + \" .node-logo\").attr(\"class\", \"fas fa-crosshairs crosshairs-logo node-logo node-logo-large\").attr(\"x\", \"-18px\").text(\"\\uF05B\");\n    }\n  }, {\n    key: \"initNodeButtons\",\n    value: function initNodeButtons() {\n\n      // TODO: this is not super clean, in the future improve the architecture of addRelativeMenu()\n      var addRelativeMenu = function () {\n        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(node) {\n          var canAddChildren, canAddParents, canAddMother, canAddFather, spouseMissing, FOw, FOh, FOx, FOy, hitboxMargin, addRelativeHitbox, addRelativeFO, addRelativeDiv, _addAddRelativeSpan;\n\n          return _regenerator2.default.wrap(function _callee3$(_context3) {\n            while (1) {\n              switch (_context3.prev = _context3.next) {\n                case 0:\n                  _addAddRelativeSpan = function _addAddRelativeSpan(relative, addRelative) {\n                    addRelativeDiv.append(\"span\").attr(self.i18n.keyAttr, \"node-name-\" + relative).on(\"click\", function (node) {\n                      var relativeNode = addRelative(node);\n                      relativeNode.i18nName = self.kgp.relationToYou(node.i18nName, relative);\n                      self.update(node);\n                      self.nodeButtons.hide();\n                      addRelativeHitbox.remove();\n                      self.kgp.saveFamilyTreeToLocalStorage();\n                    });\n                  };\n\n                  //fix: node doesn't propagate to circle\n                  node = self.nodeButtons.g.datum();\n                  removeAddRelativeMenu();\n\n                  // can only add children/parents if tree not too deep\n                  canAddChildren = node.depth < self.kgp.options.maxFamilyTreeDepth - 1;\n                  canAddParents = self.ftree.maxDepth < self.kgp.options.maxFamilyTreeDepth - 1 || node.depth != 0;\n                  canAddMother = (!node.famc || !node.famc.wife) && canAddParents;\n                  canAddFather = (!node.famc || !node.famc.husb) && canAddParents;\n                  spouseMissing = !node.fams || node.fams.length == 0 || !node.fams[0].husb || !node.fams[0].wife;\n                  // FO stands for foreignObject\n\n                  FOw = 100;\n                  FOh = ((canAddChildren ? 2 : 0) + canAddMother + canAddFather + spouseMissing) * 26;\n                  FOx = 20;\n                  FOy = -(FOh / 2);\n                  hitboxMargin = 20;\n\n                  // hitbox so that menu doesn't disappear unexpectedly\n\n                  addRelativeHitbox = addRelativeButton.append(\"path\").classed(\"add-relatives-hitbox\", true).attr(\"d\", \" M\" + (FOx - 2 * hitboxMargin) + \" \" + -hitboxMargin + \" L\" + FOx + \" \" + (FOy - hitboxMargin) + \" L\" + (FOx + FOw + hitboxMargin) + \" \" + (FOy - hitboxMargin) + \" L\" + (FOx + FOw + hitboxMargin) + \" \" + (-FOy + hitboxMargin) + \" L\" + FOx + \" \" + (-FOy + hitboxMargin) + \" L\" + (FOx - 2 * hitboxMargin) + \" \" + hitboxMargin + \" Z\").attr(\"fill\", \"red\").attr(\"opacity\", 0);\n                  addRelativeFO = addRelativeButton.append(\"foreignObject\").classed(\"add-relatives-fo\", true).attr(\"x\", FOx + \"px\").attr(\"y\", FOy + \"px\").attr(\"width\", FOw + 10 + \"px\").attr(\"height\", FOh + 10 + \"px\");\n                  addRelativeDiv = addRelativeFO.append(\"xhtml:div\").attr(\"style\", \"cursor:pointer;\").classed(\"add-relatives-list\", true).on(\"mouseleave.hitbox\", removeAddRelativeMenu);\n\n\n                  if (canAddMother) {\n                    _addAddRelativeSpan(\"mother\", function (d) {\n                      return self.ftree.addParent(\"\", \"F\", d.id);\n                    }, true);\n                  }\n                  if (canAddFather) {\n                    _addAddRelativeSpan(\"father\", function (d) {\n                      return self.ftree.addParent(\"\", \"M\", d.id);\n                    }, true);\n                  }\n                  if (spouseMissing & node.sex == \"M\") {\n                    _addAddRelativeSpan(\"partner\", function (d) {\n                      return self.ftree.addSpouse(\"\", d.id);\n                    }, true);\n                  }\n                  if (spouseMissing & node.sex == \"F\") {\n                    _addAddRelativeSpan(\"partner\", function (d) {\n                      return self.ftree.addSpouse(\"\", d.id);\n                    }, true);\n                  }\n                  if (canAddChildren) {\n                    _addAddRelativeSpan(\"daughter\", function (d) {\n                      return self.ftree.addChild(\"\", \"F\", d.id, false);\n                    }, true);\n                  }\n                  if (canAddChildren) {\n                    _addAddRelativeSpan(\"son\", function (d) {\n                      return self.ftree.addChild(\"\", \"M\", d.id, false);\n                    }, true);\n                  }\n\n                case 22:\n                case \"end\":\n                  return _context3.stop();\n              }\n            }\n          }, _callee3, this);\n        }));\n\n        return function addRelativeMenu(_x6) {\n          return _ref3.apply(this, arguments);\n        };\n      }();\n\n      var self = this;\n      this.nodeButtons = new _NodeButtonsGroup.NodeButtonsGroup(this.svgg, self.kgp.indiNodeSize.width);\n      this.nodeButtons.hide();\n\n      // ------------------------ remove node button ------------------------\n      function removeNode(node) {\n        self.ftree.deleteNode(node.id, self.kgp.youNodeId);\n        self.nodeButtons.hide();\n        self.kgp.scoreRequestHandler.requestScore(self.kgp.target ? self.kgp.target.id : \"\", self.ftree.getLinksAsIds(), self.ftree.nodesArray().filter(function (n) {\n          return n.sequencedDNA;\n        }).map(function (n) {\n          return n.id;\n        }), self.kgp.userId, self.kgp.userSource, self.i18n.lng);\n        self.update();\n        self.kgp.saveFamilyTreeToLocalStorage();\n      }\n\n      self.nodeButtons.addButton(\"remove-node\", 25, -50, \"\\uF506\", \"80px\", \"50px\", self.i18n, \"hint-delete-node\").on(\"click.remove\", removeNode);\n\n      // ------------------------ toggle DNA sequencing button ------------------------\n\n\n      // HOW TO HANDLE +-: d =>'\\uf471'+(d.sequencedDNA?\"-\":\"+\") IN OLD CODE?\n      function toggleDnaButtonText(node) {\n        toggleDNAbutton.select(\"text\").node().innerHTML = \"\\uF471\" + (node.sequencedDNA ? \"-\" : \"+\");\n      }\n      function toggleDNA(node) {\n        node.sequencedDNA = !node.sequencedDNA;\n        toggleDnaButtonText(node);\n        d3.select(\"#\" + FamilyTreeArtist.nodeGroupId(node.id) + \" .dna-logo\").classed(\"invisible-dna\", !node.sequencedDNA);\n        self.kgp.scoreRequestHandler.requestScore(self.kgp.target ? self.kgp.target.id : \"\", self.ftree.getLinksAsIds(), self.ftree.nodesArray().filter(function (n) {\n          return n.sequencedDNA;\n        }).map(function (n) {\n          return n.id;\n        }), self.kgp.userId, self.kgp.userSource, self.i18n.lng);\n        self.kgp.saveFamilyTreeToLocalStorage();\n      }\n      var toggleDNAbutton = self.nodeButtons.addButton(\"toggle-dna\", 25, 50, \"\\uF471+\", \"170px\", \"70px\", self.i18n, \"hint-sequence-node\").on(\"click.sequenced-dna\", toggleDNA);\n      self.nodeButtons.onWakeCallbacks.push(toggleDnaButtonText);\n\n      // ------------------------ set as target button ------------------------\n\n      self.nodeButtons.addButton(\"set-as-target\", -50, 0, \"\\uF05B\", \"120px\", \"45px\", self.i18n, \"change-target\", {\n        FAx: -10, FAy: 7,\n        tooltipx: \"-144px\"\n      }).on(\"click.set-as-target\", function (n) {\n        return self.kgp.selectTarget(n);\n      });\n\n      // ------------------------ add relatives button ------------------------\n      var addRelativeButton = self.nodeButtons.addButton(\"add-relative\", 50, 0, \"\\uF234\", 0, 0, self.i18n, undefined, {\n        FAx: -10, FAy: 6,\n        tooltipx: 0, tooltipy: 0\n      });\n      addRelativeButton.select(\"circle\").on(\"mouseover.addRelative\", addRelativeMenu);\n      addRelativeButton.select(\"text\").on(\"mouseover.addRelative\", addRelativeMenu);\n      // correctly remove add relative menu on hide&wake\n      function removeAddRelativeMenu() {\n        //setTimeout(d => {\n        addRelativeButton.select(\".add-relatives-fo\").remove();\n        addRelativeButton.select(\".add-relatives-hitbox\").remove();\n        //},20)\n      }\n      self.nodeButtons.onHideCallbacks.push(removeAddRelativeMenu);\n      //self.nodeButtons.onWakeCallbacks.push(removeAddRelativeMenu)\n\n\n      // ------------------------ Toggle your sex Button ------------------------\n      function toggleYourSex(node) {\n        var circle = d3.select(\"#\" + FamilyTreeArtist.nodeGroupId(node.id) + \" .node-circle\");\n\n        node.sex = node.sex == \"M\" ? \"F\" : \"M\";\n        var isWoman = node.sex == \"F\";\n        circle.classed(\"man\", !isWoman);\n        circle.classed(\"woman\", isWoman);\n        // exchange role in marriages\n        if (node.fams) {\n          node.fams.forEach(function (f) {\n            var h = f.husb;\n            f.husb = f.wife;\n            f.wife = h;\n          });\n        }\n        // take care of spouse\n        var spouse = node.spouse();\n        if (spouse) {\n          spouse.sex = spouse.sex == \"M\" ? \"F\" : \"M\";\n          isWoman = spouse.sex == \"F\";\n          var spouseCircle = d3.select(\"#\" + FamilyTreeArtist.nodeGroupId(spouse.id) + \" .node-circle\");\n          spouseCircle.classed(\"man\", !isWoman);\n          spouseCircle.classed(\"woman\", isWoman);\n          //document.querySelector(\"#\"+nodeGroupId(spouse.id)+\" .node-name\").setAttribute(i18n.keyAttr, isWoman? \"node-name-woman\":\"node-name-man\")\n        }\n        self.kgp.saveFamilyTreeToLocalStorage();\n      }\n      self.nodeButtons.addButton(\"change-sex\", -25, 50, \"\\uF228\", 80, 45, self.i18n, \"hint-change-sex\", {\n        FAx: -10, FAy: 6,\n        tooltipx: -104\n      }).on(\"click.change-sex\", toggleYourSex);\n    }\n  }, {\n    key: \"generateToggleHighlightNodeLinks\",\n    value: function generateToggleHighlightNodeLinks(active) {\n      return function toggleHighlightNodeLinks(d) {\n        var links = [d.id, d.famc ? d.famc.id : undefined, d.fams && d.fams.length > 0 ? d.fams[0].id : undefined].filter(Boolean);\n        links.map(FamilyTreeArtist.linkNodeClass).forEach(function (l) {\n          var links = d3.selectAll(\".\" + l);\n          links.classed(\"highlight-link\", active);\n        });\n\n        if (d.famc) {\n          d3.select(\"#\" + FamilyTreeArtist.nodeGroupId(d.famc.id) + \" .node-circle\").classed(\"highlight-fam\", active);\n        }\n        if (d.fams && d.fams.length > 0) {\n          d3.select(\"#\" + FamilyTreeArtist.nodeGroupId(d.fams[0].id) + \" .node-circle\").classed(\"highlight-fam\", active);\n        }\n      };\n    }\n  }], [{\n    key: \"idToString\",\n    value: function idToString(id) {\n      return id ? id.replace(/@/g, \"\") : \"\";\n    }\n  }, {\n    key: \"linkNodeId\",\n    value: function linkNodeId(id1, id2) {\n      return \"link-\" + FamilyTreeArtist.idToString(id1) + \"-\" + FamilyTreeArtist.idToString(id2);\n    }\n  }, {\n    key: \"linkNodeClass\",\n    value: function linkNodeClass(id) {\n      return \"link-\" + FamilyTreeArtist.idToString(id);\n    }\n  }, {\n    key: \"famNodeClass\",\n    value: function famNodeClass(id) {\n      return \"fam-\" + FamilyTreeArtist.idToString(id);\n    }\n  }, {\n    key: \"nodeGroupId\",\n    value: function nodeGroupId(id) {\n      return \"node-\" + FamilyTreeArtist.idToString(id);\n    }\n  }, {\n    key: \"renderCurvedLink\",\n    value: function renderCurvedLink(source, target) {\n      return \"M\" + source.x + \",\" + source.y + \"C\" + source.x + \",\" + (source.y + target.y) / 2 + \" \" + target.x + \",\" + (source.y + target.y) / 2 + \" \" + target.x + \",\" + target.y;\n    }\n  }, {\n    key: \"renderSquareLink\",\n    value: function renderSquareLink(source, target) {\n      var heightSalt = source.heightSalt ? source.heightSalt : 0;\n      return \"M\" + source.x + \",\" + source.y + \"L\" + source.x + \",\" + (heightSalt + (source.y + target.y) / 2) + \"L\" + target.x + \",\" + (heightSalt + (source.y + target.y) / 2) + \"L\" + target.x + \",\" + target.y;\n    }\n  }, {\n    key: \"renderLink\",\n    value: function renderLink(source, target) {\n      return FamilyTreeArtist.renderSquareLink(source, target);\n    }\n  }]);\n  return FamilyTreeArtist;\n}();\n\n//# sourceURL=webpack:///./app/src/js/FamilyTreeArtist.js?");

/***/ }),

/***/ "./app/src/js/FamilyTreeLayout.js":
/*!****************************************!*\
  !*** ./app/src/js/FamilyTreeLayout.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FamilyTreeLayout = undefined;\n\nvar _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ \"./node_modules/babel-runtime/core-js/object/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ \"./node_modules/babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _FamilyTree2 = __webpack_require__(/*! ./FamilyTree.js */ \"./app/src/js/FamilyTree.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FamilyTreeLayout = exports.FamilyTreeLayout = function (_FamilyTree) {\n  (0, _inherits3.default)(FamilyTreeLayout, _FamilyTree);\n\n  function FamilyTreeLayout(nodes, centerNodeId) {\n    (0, _classCallCheck3.default)(this, FamilyTreeLayout);\n\n    // if no centerNodeId, set it as the first family with 2 spouses\n    var _this = (0, _possibleConstructorReturn3.default)(this, (FamilyTreeLayout.__proto__ || (0, _getPrototypeOf2.default)(FamilyTreeLayout)).call(this, nodes));\n\n    if (!centerNodeId) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(nodes)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var n = _step.value;\n\n          if (nodes[n].tag === \"FAM\" & (nodes[n].husb != undefined | nodes[n].wife != undefined)) // only 1 spouse\n            centerNodeId = nodes[n].id;\n          if (nodes[n].tag === \"FAM\" & nodes[n].husb != undefined & nodes[n].wife != undefined) {\n            centerNodeId = nodes[n].id;\n            break;\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n    _this.centerNode = _this.nodes[centerNodeId];\n\n    //compute nodes positions\n    //this.computeLayout()\n    return _this;\n  }\n\n  (0, _createClass3.default)(FamilyTreeLayout, [{\n    key: \"serialize\",\n\n\n    /** Serializes FamilyTree layout to a JSON ready JS Object\n     * Only need to call JSON.stringify() to transform it to string.\n     * @returns {Object} {\n     *   class : \"FamilyTreeLayout\", // Class of the object\n     *   nodes : nodes, // nodes in an array with ids as links\n     *   properties : properties // the list of properties the nodes have\n     *   centerNodeId : centerNodeId // the id of the node around which the layout is organized\n     * }\n     */\n    value: function serialize() {\n      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      var serialization = FamilyTreeLayout.parentClass().serialize.call(this, properties);\n      serialization.class = \"FamilyTreeLayout\";\n      serialization.centerNodeId = this.centerNode ? this.centerNode.id : 0;\n      return serialization;\n    }\n    /** Inverse of JSON.stringify(FamilyTreeLayout.serialize())\n     * @param {string} serializedFtreeLayout\n     * @returns {FamilyTreeLayout}\n     */\n\n  }, {\n    key: \"computeLayout\",\n\n\n    /**\n    Function computing x&y positions for each node\n     the idea is:\n    a) massage the family tree in a good input format for d3-pedigree-tree to do the layout\n    b) then massage the output back in a proper layout for the family tree.\n     step a):\n    1) wives and husbands are filtered out\n    2) their fams node takes their parents families (both famc) as their parents\n    3) individual node take as parent their famc\n    4) nodes without parents and at depth>0 are given dummy-parents so that d3-pedigree layouts them at the right depth\n    5) we give those nodes to d3-pedigree-tree\n     step b):\n    1) invert x&y values (d3-pedigree-tree makes an horizontal layout)\n    */\n    value: function computeLayout() {\n      var _this2 = this;\n\n      var nodes = this.nodesArray();\n      this._computeDepths(nodes[0]);\n\n      var indiNodes = nodes.filter(function (n) {\n        return n.tag == \"INDI\";\n      });\n      var dummyNodeId = 0;\n      var dummyNodes = [];\n      indiNodes.forEach(function (n) {\n        delete n.parents;\n      });\n      indiNodes.forEach(function (n) {\n        var spouse = n.spouse() || {};\n        if (spouse.parents) {\n          // parents are the same for both spouses\n          n.parents = spouse.parents;\n        } else {\n          if (!n.famc && !spouse.famc) {\n            // if no ancestors for both parents: give them a virtual ancestor\n            for (var i = -1; i < n.depth; i++) {\n              var dummyParents = i != -1 ? [dummyNodes[dummyNodeId - 1]] : [];\n              dummyNodes.push({ id: \"@D\" + dummyNodeId + \"@\", depth: i, parents: dummyParents });\n              dummyNodeId++;\n            }\n            n.parents = [dummyNodes[dummyNodeId - 1]];\n          } else {\n            // otherwise, the ancestors are both spouses' parents\n            n.parents = n.famc ? [n.famc.wife, n.famc.husb] : [];\n            if (spouse && spouse.famc) {\n              n.parents.push(spouse.famc.wife);\n              n.parents.push(spouse.famc.husb);\n            }\n            n.parents = n.parents.filter(Boolean);\n          }\n        }\n        // couples without children must have a virtual kid to get them together\n        if (n.spouse() && (!n.fams[0].chil || n.fams[0].chil.length == 0)) {\n          dummyNodes.push({ id: \"@D\" + dummyNodeId + \"@\", depth: n.depth + 1, parents: [n, spouse] });\n          dummyNodeId++;\n        }\n      });\n      indiNodes = indiNodes.concat(dummyNodes);\n      // ========= sort nodes by x factor\n      indiNodes.sort(function (a, b) {\n        var ax = a.x ? a.x : 0;\n        var bx = b.x ? b.x : 0;\n        return ax - bx;\n      });\n\n      var tree = d3.pedigreeTree().levelWidth(150).nodePadding(120).linkPadding(25).parents(function (d) {\n        return d.parents;\n      }).groupChildless(false).iterations(300).data(indiNodes);\n\n      var treepp = tree();\n      treepp.nodes.forEach(function (node) {\n        if (_this2.nodes[node.id]) {\n          _this2.nodes[node.id].x = node.y;\n          _this2.nodes[node.id].y = node.x;\n        }\n      });\n      /*console.log(\"treepp.nodes\")\n      console.log(treepp.nodes)\n      console.log(\"nodes\")\n      console.log(nodes)*/\n\n      // position marriages\n      var famNodes = nodes.filter(function (d) {\n        return d.tag === \"FAM\";\n      });\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = (0, _getIterator3.default)(famNodes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var fam = _step2.value;\n\n          if (fam.wife && fam.husb) {\n            fam.x = (fam.wife.x + fam.husb.x) / 2;\n            fam.y = fam.wife.y;\n          } else {\n            var spouse = [fam.wife, fam.husb].filter(Boolean)[0];\n            if (spouse) {\n              fam.x = spouse.x;\n              fam.y = spouse.y;\n            }\n          }\n        }\n\n        // spouses can be reverted -> sort them according to famc.x\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2.return) {\n            _iterator2.return();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = (0, _getIterator3.default)(nodes.filter(function (d) {\n          return d.tag === \"INDI\";\n        })), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var indi = _step3.value;\n\n          var spouse = indi.spouse();\n          if (indi.famc && spouse && spouse.famc) {\n            if (indi.x > spouse.x && indi.famc.x < spouse.famc.x) {\n              var tempx = indi.x;\n              indi.x = spouse.x;\n              spouse.x = tempx;\n            }\n          }\n        }\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3.return) {\n            _iterator3.return();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n    }\n\n    /*\n    Re-centers the graph. position 0,0 is in the middle of all nodes position\n    */\n\n  }, {\n    key: \"center\",\n    value: function center() {\n      var horizontal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      var vertical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n      var xoffset = -(this.minX() + this.maxX()) / 2;\n      var yoffset = -(this.minY() + this.maxY()) / 2;\n      _.forEach(this.nodes, function (n) {\n        n.x += horizontal ? xoffset : 0;\n        n.y += vertical ? yoffset : 0;\n      });\n      return this;\n    }\n  }, {\n    key: \"width\",\n    value: function width() {\n      var extent = d3.extent(_.map(this.nodes, function (n) {\n        return n.x;\n      }));\n      return extent[1] - extent[0];\n    }\n  }, {\n    key: \"height\",\n    value: function height() {\n      var extent = d3.extent(_.map(this.nodes, function (n) {\n        return n.y;\n      }));\n      return extent[1] - extent[0];\n    }\n  }, {\n    key: \"minX\",\n    value: function minX() {\n      return d3.min(_.map(this.nodes, function (n) {\n        return n.x;\n      }));\n    }\n  }, {\n    key: \"minY\",\n    value: function minY() {\n      return d3.min(_.map(this.nodes, function (n) {\n        return n.y;\n      }));\n    }\n  }, {\n    key: \"maxX\",\n    value: function maxX() {\n      return d3.max(_.map(this.nodes, function (n) {\n        return n.x;\n      }));\n    }\n  }, {\n    key: \"maxY\",\n    value: function maxY() {\n      return d3.max(_.map(this.nodes, function (n) {\n        return n.y;\n      }));\n    }\n  }], [{\n    key: \"parentClass\",\n    value: function parentClass() {\n      return _FamilyTree2.FamilyTree.prototype;\n    }\n  }, {\n    key: \"unserialize\",\n    value: function unserialize(serializedFtreeLayout) {\n      serializedFtreeLayout = JSON.parse(serializedFtreeLayout);\n      return new FamilyTreeLayout(_FamilyTree2.FamilyTree.unserializeParseNodes(serializedFtreeLayout), serializedFtreeLayout.centerNodeId);\n    }\n  }]);\n  return FamilyTreeLayout;\n}(_FamilyTree2.FamilyTree);\n\n//# sourceURL=webpack:///./app/src/js/FamilyTreeLayout.js?");

/***/ }),

/***/ "./app/src/js/KgpBackendStatus.js":
/*!****************************************!*\
  !*** ./app/src/js/KgpBackendStatus.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.KgpBackendStatus = undefined;\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KgpBackendStatus = exports.KgpBackendStatus = function () {\n  function KgpBackendStatus(parentId, i18n) {\n    (0, _classCallCheck3.default)(this, KgpBackendStatus);\n\n    this.parentId = parentId;\n    this.i18n = i18n;\n\n    this.init();\n  }\n\n  (0, _createClass3.default)(KgpBackendStatus, [{\n    key: \"init\",\n    value: function init() {\n      document.getElementById(this.parentId).innerHTML = ' \\\n    <div class=\"alert\" style=\"display:none\"><div class=\"kgp-alert-content\"></div></div> ';\n      /*\n      <div class=\"alert alert-success\" style=\"display:none\" id=\"response-success\"><div class=\"alert-content\" data-i18n=\"response-success\"></div></div>\n      <div class=\"alert alert-info\" style=\"display:none\" id=\"response-info\"><div class=\"alert-content\"></div></div>\n      <div class=\"alert alert-warning\" style=\"display:none\" id=\"response-warning\"><div class=\"alert-content\"></div></div>\n      <div class=\"alert alert-danger\" style=\"display:none\" id=\"response-danger\"><div class=\"alert-content\"></div></div>\n      '*/\n      this.element = $(\"#\" + this.parentId + \" .alert\");\n      this.content = $(\"#\" + this.parentId + \" .kgp-alert-content\");\n      this.i18n.dynamic[\"response-success\"] = this.i18nFormatSuccessMessage;\n    }\n\n    /** await() puts the KgpBackendStatus in a waiting state and updates it properly once the promise has fulfilled */\n\n  }, {\n    key: \"await\",\n    value: function _await(kgpPromise, request, previousResponse) {\n      var self = this;\n      this.displayOngoing();\n      return kgpPromise.then(function (kgpSuccess) {\n        // success\n        var same_signature = previousResponse.tree_signature == kgpSuccess.tree_signature;\n        self.displaySuccess(kgpSuccess.result.privacy_metric, kgpSuccess.result.execution_time, kgpSuccess.result.cached, same_signature);\n      }).catch(function (kgpError) {\n        if (kgpError.status == \"error\") {\n          // error code 2\n          if (kgpError.code == 2) {\n            self.displayDanger(\"response-error-\" + kgpError.code);\n            self.i18n.data(\"response-error-2\", [kgpError.extras.error_identifier]);\n          }\n          // error code 4\n          else if (kgpError.code == 4) {\n              self.displayInfo(\"response-error-4\", 100000);\n            }\n            // error code 5\n            else if (kgpError.code == 5) {\n                self.displayDanger(\"response-error-5\");\n              }\n              // other error codes\n              else {\n                  self.displayWarning(\"response-error-\" + kgpError.code);\n                }\n        }\n      });\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      // Hide the previous alert + explainer\n      this.content.attr(this.i18n.dataAttr, null);\n      this.element.stop(true).hide().removeClass(\"alert-success alert-info alert-warning alert-danger\");\n    }\n\n    /** Display the result message from the server */\n\n  }, {\n    key: \"displayMessage\",\n    value: function displayMessage(type, messageKey, timeout) {\n      this.hide();\n      this.element.addClass(\"alert-\" + type);\n      this.content.attr(this.i18n.keyAttr, messageKey);\n      this.element.stop(true).slideDown(500).fadeTo(timeout, 500).slideUp(500);\n    }\n  }, {\n    key: \"displayOngoing\",\n    value: function displayOngoing() {\n      this.hide();\n      this.element.addClass(\"alert-warning\");\n      this.content.attr(this.i18n.keyAttr, \"response-ongoing\");\n      this.element.slideDown(500);\n    }\n  }, {\n    key: \"displayWarning\",\n    value: function displayWarning(messageKey) {\n      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;\n\n      this.displayMessage(\"warning\", messageKey, timeout);\n    }\n  }, {\n    key: \"displayInfo\",\n    value: function displayInfo(messageKey) {\n      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;\n\n      this.displayMessage(\"info\", messageKey, timeout);\n    }\n  }, {\n    key: \"displayDanger\",\n    value: function displayDanger(errorKey) {\n      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;\n\n      this.displayMessage(\"danger\", errorKey, timeout);\n    }\n  }, {\n    key: \"displaySuccess\",\n    value: function displaySuccess(score, time, cached, similar) {\n      var timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5000;\n\n      this.hide();\n      this.element.addClass(\"alert-success\");\n      this.content.attr(this.i18n.keyAttr, \"response-success\");\n      this.i18n.data(\"response-success\", {\n        time: time.toFixed(2),\n        cached: cached,\n        similar: similar\n      });\n      this.element.stop(true).slideDown(500).fadeTo(timeout, 500).slideUp(500);\n    }\n\n    /** success formatter function for i18n */\n\n  }, {\n    key: \"i18nFormatSuccessMessage\",\n    value: function i18nFormatSuccessMessage(text, data) {\n      //\"Réponse calculée en {#1} secondes{#2 (en cache)}.{#3 Le score est inchangé, <a href='../faq#change' target='_blank'>en savoir plus</a>.}\",\n      text = text.replace(\"{#1}\", data.time);\n      text = text.replace(/{#2(.+?)}/, data.cached ? \"$1\" : \"\");\n      text = text.replace(/{#3(.+?)}/, data.similar ? \"$1\" : \"\");\n      return text;\n    }\n  }]);\n  return KgpBackendStatus;\n}();\n\n//# sourceURL=webpack:///./app/src/js/KgpBackendStatus.js?");

/***/ }),

/***/ "./app/src/js/KgpIframeInterface.js":
/*!******************************************!*\
  !*** ./app/src/js/KgpIframeInterface.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.kgpSetSourceEvent = kgpSetSourceEvent;\nexports.kgpSetLanguageEvent = kgpSetLanguageEvent;\nexports.kgpSetIframeMaxDimensionEvent = kgpSetIframeMaxDimensionEvent;\nexports.kgpLaunchTutorialEvent = kgpLaunchTutorialEvent;\nexports.kgpSetHeightEvent = kgpSetHeightEvent;\n\nvar _cookies = __webpack_require__(/*! ./lib/cookies.js */ \"./app/src/js/lib/cookies.js\");\n\n/******** down events ********/\n\nfunction kgpSetSourceEvent(source) {\n  return { \"type\": \"KgpSetSourceEvent\", \"source\": source };\n}\n\nfunction kgpSetLanguageEvent(lng) {\n  return { \"type\": \"KgpSetLanguageEvent\", \"lng\": lng };\n}\n\n/** Event from kgpmeter to kgp-iframe to signale iframe max dimensions */\nfunction kgpSetIframeMaxDimensionEvent(maxHeight) {\n  return { \"type\": \"KgpSetIframeMaxDimensionEvent\", \"maxHeight\": maxHeight };\n}\n\nfunction kgpLaunchTutorialEvent() {\n  return { \"type\": \"KgpLaunchTutorialEvent\" };\n}\n\n/******** up events ********/\n\n/** Event from kgp-iframe to kgpmeter to change height */\nfunction kgpSetHeightEvent(height, transitionDuration) {\n  return { \"type\": \"KgpSetHeightEvent\", \"height\": height, \"transitionDuration\": transitionDuration };\n}\n\n//# sourceURL=webpack:///./app/src/js/KgpIframeInterface.js?");

/***/ }),

/***/ "./app/src/js/KgpPrivacyBar.js":
/*!*************************************!*\
  !*** ./app/src/js/KgpPrivacyBar.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.KgpPrivacyBar = undefined;\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KgpPrivacyBar = exports.KgpPrivacyBar = function () {\n  function KgpPrivacyBar(parentId, id, x, y, width, height, r, colorScale, i18n) {\n    var nbBoxes = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 5;\n    var strokeWidth = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 4;\n    var elementClass = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : \"privacy-bar-element\";\n    var backgroundColor = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : \"rgb(230,230,230)\";\n    (0, _classCallCheck3.default)(this, KgpPrivacyBar);\n\n    this.parentId = parentId;\n    this.id = id;\n    this.width = width;\n    this.height = height;\n    this.r = r;\n    this.nbBoxes = nbBoxes;\n    this.strokeWidth = strokeWidth;\n    this.colorScale = colorScale;\n    this.elementClass = elementClass;\n    this.backgroundColor = backgroundColor;\n    this.privacyStatus = 1;\n    this.i18n = i18n;\n\n    this.init(x, y, 0);\n  }\n\n  (0, _createClass3.default)(KgpPrivacyBar, [{\n    key: \"init\",\n    value: function init(x, y) {\n      var transitionDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;\n\n      if (x || x === 0) {\n        this.x = x;\n      }\n      if (y || y === 0) {\n        this.y = y;\n      }\n\n      var self = this;\n      this.g = d3.select(\"#\" + this.parentId).append(\"g\").attr(\"transform\", \"translate(\" + self.x + \",\" + self.y + \")\").attr(\"id\", this.id);\n\n      var startColor = this.colorScale(1);\n      var barBasis = '<rect x=\"0\" y=\"0\" rx=\"' + this.r + '\" ry=\"' + this.r + '\" height=\"' + this.height + '\" width=\"' + this.width + '\"';\n      this.g.html(barBasis + ' fill=\"' + this.backgroundColor + '\" class=\"privacy-bar-background ' + this.elementClass + '\"/>' + barBasis + ' fill=\"' + startColor + '\" class=\"privacy-bar ' + this.elementClass + '\" />');\n      this.bar = this.g.select(\".privacy-bar\");\n\n      var boxSize = this.height / this.nbBoxes;\n      var yboxes = d3.range(0, this.height, boxSize);\n      this.boxesG = this.g.append(\"g\").attr(\"id\", \"privacy-bar-contour-group\");\n      this.boxesG.selectAll(\"rect\").data(yboxes).enter().append(\"rect\").attr(\"class\", \"privacy-bar-contour\").attr(\"x\", \"0\").attr(\"y\", function (d) {\n        return d;\n      }).attr(\"rx\", 5).attr(\"ry\", 5).attr(\"width\", this.width).attr(\"height\", boxSize).attr(\"fill\", \"none\").attr(\"stroke\", \"white\").attr(\"stroke-width\", this.strokeWidth + 'px');\n\n      this.g.append(\"text\").attr(\"x\", +this.width).attr(\"y\", -16).attr(\"height\", 20).attr(\"text-anchor\", \"end\").attr(\"fill\", \"darkgrey\").attr(\"id\", \"privacy-bar-title\").attr(\"class\", this.elementClass).attr(this.i18n.keyAttr, \"privacy-bar-title\");\n      this.scale = d3.scaleLinear().range([this.height, 0]).domain([0, 1]);\n\n      if (this.showScoreValue) {\n        this.scoreG = this.g.append(\"g\").attr(\"transform\", \"translate(0,3)\").attr(\"id\", \"privacy-score\");\n        this.scoreG.html('<polygon points=\"-10,-6 -4,0 -10,6\" fill=\"' + startColor + '\"/>' + '<text x=\"-14\" y=\"5\" fill=\"black\" text-anchor=\"end\">100%</text> <!--uncomment to see privacy-score value-->');\n        this.scorePolygon = d3.select(\"#privacy-score polygon\");\n        this.text = d3.select(\"#privacy-score text\");\n      }\n\n      this.elements = d3.selectAll(\".\" + this.elementClass);\n      this.update(1, transitionDuration);\n    }\n\n    /** update() updates the KgpPrivacyBar with a new score */\n\n  }, {\n    key: \"update\",\n    value: function update(privacyMeasure) {\n      var transitionDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n\n      this.privacyStatus = privacyMeasure;\n      var transition = d3.transition().duration(transitionDuration).ease(function (t) {\n        return d3.easeBackOut(t, 0.8);\n      });\n      this.bar.transition(transition).attr(\"fill\", this.colorScale(privacyMeasure)).attr(\"y\", this.scale(privacyMeasure)).attr(\"height\", this.height - this.scale(this.privacyStatus));\n\n      this.elements.transition(200).attr(\"opacity\", 1);\n      // show score value\n      if (this.showScoreValue) {\n        this.scoreG.transition(transition) //d3.easeBackOut)//d3.easeExpInOut)//d3.easeCubicIn)\n        .attr(\"transform\", \"translate(0,\" + Math.max(this.scale(privacyMeasure), 4) + \")\");\n        this.scorePolygon.transition(transition).attr(\"fill\", this.colorScale(privacyMeasure));\n        this.text.html((100 * privacyMeasure).toFixed(0) + \"%\");\n      }\n    }\n\n    /** await() puts the KgpPrivacyBar in a waiting state (opacity=0.5) and updates it properly once the promise has fulfilled */\n\n  }, {\n    key: \"await\",\n    value: function _await(kgpPromise, request, previousResponse) {\n      var _this = this;\n\n      this.elements.transition(200).attr(\"opacity\", 0.5);\n      kgpPromise.then(function (kgpSuccess) {\n        _this.update(kgpSuccess.result.privacy_metric);\n      }).catch(function (kgpr) {\n        if (kgpr.status == \"error\") {\n          if (kgpr.code == 4) {\n            _this.elements.transition(200).attr(\"opacity\", 1);\n          }\n        }\n      });\n    }\n  }]);\n  return KgpPrivacyBar;\n}();\n\n//# sourceURL=webpack:///./app/src/js/KgpPrivacyBar.js?");

/***/ }),

/***/ "./app/src/js/KgpScoreNumberExplainer.js":
/*!***********************************************!*\
  !*** ./app/src/js/KgpScoreNumberExplainer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.KgpScoreNumberExplainer = undefined;\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KgpScoreNumberExplainer = exports.KgpScoreNumberExplainer = function () {\n  function KgpScoreNumberExplainer(parentId, i18n, i18nKey) {\n    (0, _classCallCheck3.default)(this, KgpScoreNumberExplainer);\n\n    this.parentId = parentId;\n    this.i18n = i18n;\n    this.i18nKey = i18nKey;\n    this.parent = $(\"#\" + this.parentId);\n\n    this.init();\n  }\n\n  (0, _createClass3.default)(KgpScoreNumberExplainer, [{\n    key: \"init\",\n    value: function init() {\n      this.parent.html('<div class=\"alert alert-info text-justified\"> \\\n      <i class=\"far fa-lightbulb\"></i> \\\n      <span class=\"kgp-explainer-text\"></span> \\\n    </div>');\n      this.div = $(\"#\" + this.parentId + \" .alert\").hide();\n      this.text = $(\"#\" + this.parentId + \" .kgp-explainer-text\").attr(this.i18n.keyAttr, this.i18nKey);\n\n      this.i18n.dynamic[this.i18nKey] = this.i18nFormat;\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.div.stop(true).slideUp(500);\n    }\n  }, {\n    key: \"update\",\n    value: function update(privacyMeasure) {\n      var transitionDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n\n      this.i18n.data(this.i18nKey, { privacy_metric: privacyMeasure });\n      this.div.stop(true).slideDown(transitionDuration); //.fadeTo(5000, 500).slideUp(500)\n    }\n\n    /** await() puts the KgpWordedScore in a waiting state (opacity=0.5) and updates it properly once the promise has fulfilled */\n\n  }, {\n    key: \"await\",\n    value: function _await(kgpPromise, request, previousResponse) {\n      var _this = this;\n\n      kgpPromise.then(function (kgpSuccess) {\n        _this.update(kgpSuccess.result.privacy_metric);\n      }, function () {});\n    }\n  }, {\n    key: \"i18nFormat\",\n    value: function i18nFormat(text, data) {\n      //\"{#1}% de l’information génomique de la cible peut-être déduite. Son score de confidentialité est donc de {#2}%.\",\n      var score = Math.round(100 * data.privacy_metric);\n      text = text.replace(\"{#1}\", 100 - score);\n      text = text.replace(/{#2(.+?)?}/, score);\n      return text;\n    }\n  }]);\n  return KgpScoreNumberExplainer;\n}();\n\n//# sourceURL=webpack:///./app/src/js/KgpScoreNumberExplainer.js?");

/***/ }),

/***/ "./app/src/js/KgpScoreRequestHandler.js":
/*!**********************************************!*\
  !*** ./app/src/js/KgpScoreRequestHandler.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.KgpScoreRequest = exports.KgpScoreRequestHandler = undefined;\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _KgpScoreResponse = __webpack_require__(/*! ./KgpScoreResponse.js */ \"./app/src/js/KgpScoreResponse.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KgpScoreRequestHandler = exports.KgpScoreRequestHandler = function () {\n  function KgpScoreRequestHandler(api_endpoint) {\n    (0, _classCallCheck3.default)(this, KgpScoreRequestHandler);\n\n    this.api_endpoint = api_endpoint;\n    this.lastRequest = {};\n    // necessary dummy\n    this.latestResponse = new _KgpScoreResponse.KgpScoreSuccess(-1, {}, \"\", 1.0001, 0, 0, 0);\n    this.listeners = [];\n    this.callbacks = {\n      start: [],\n      end: [],\n      error: []\n    };\n    var self = this;\n    this.addListener(function () {\n      return self.callbacksAwait.apply(self, arguments);\n    });\n  }\n\n  /** Adds a listener to requests, returns true if not already in array*/\n\n\n  (0, _createClass3.default)(KgpScoreRequestHandler, [{\n    key: \"addListener\",\n    value: function addListener(listener) {\n      if (!this.listeners.includes(listener)) {\n        this.listeners.push(listener);\n        return true;\n      }\n      return false;\n    }\n    /** remove a listener to requests, returns removed listener */\n\n  }, {\n    key: \"removeListener\",\n    value: function removeListener(listener) {\n      var index = this.listeners.indexOf(listener);\n      if (index != -1) {\n        return this.listeners.splice(index, 1);\n      }\n      return [];\n    }\n  }, {\n    key: \"requestScore\",\n    value: function requestScore(target_id, familyTreeEdges, familyTreeSequencedRelatives, user_id, user_source, lng) {\n      var silent = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;\n\n      var self = this;\n      var currentRequest = new KgpScoreRequest(target_id, familyTreeEdges, familyTreeSequencedRelatives, user_id, user_source, lng);\n      var previousResponse = this.latestResponse;\n      this.lastRequest = currentRequest;\n\n      var kgpPromise = fetch(self.api_endpoint, {\n        method: 'POST',\n        body: (0, _stringify2.default)(currentRequest)\n      }).then(function (resp) {\n        return resp.json();\n      })\n      // handle connexion error\n      .catch(function () {\n        return _promise2.default.reject(new _KgpScoreResponse.KgpScoreError(currentRequest.timestamp_js, currentRequest, null, 5, { \"message\": 'Erreur de connexion au serveur.' }));\n      })\n      // parse response\n      .then(function (json) {\n        var kgpr = _KgpScoreResponse.KgpScoreResponse.parse(json, currentRequest);\n        // check if it's stale or not\n        if (kgpr.timestamp_js != self.lastRequest.timestamp_js) {\n          return _promise2.default.reject(new _KgpScoreResponse.KgpScoreStale(kgpr));\n        }\n        // if it's an error -> reject\n        if (kgpr.status == \"error\") {\n          return _promise2.default.reject(kgpr);\n        }\n        // success!\n        self.latestResponse = kgpr;\n        return kgpr;\n      });\n\n      if (!silent) {\n        this.listeners.forEach(function (l) {\n          return l(kgpPromise, currentRequest, previousResponse);\n        });\n      }\n\n      return kgpPromise;\n    }\n\n    /** callbacks */\n\n  }, {\n    key: \"callbacksAwait\",\n    value: function callbacksAwait(kgpPromise, request, previousResponse) {\n      var self = this;\n      // for tutorial videos, comment this following line (glitches in video):\n      self.callbacks.start.forEach(function (f) {\n        return f(kgpPromise, request, previousResponse);\n      });\n      return kgpPromise.then(function (kgpSuccess) {\n        // success\n        self.callbacks.end.forEach(function (f) {\n          return f(kgpPromise, request, previousResponse);\n        });\n        //console.log(\"kgp score success: \", kgpSuccess)\n      }).catch(function (kgpError) {\n        self.callbacks.error.forEach(function (f) {\n          return f(kgpPromise, request, previousResponse);\n        });\n        //console.log(\"kgp score error: \", kgpError)\n      });\n    }\n  }]);\n  return KgpScoreRequestHandler;\n}();\n\n/** Creates the request that'll be sent to the Kgp server, with instant timestamp */\n\n\nvar KgpScoreRequest = exports.KgpScoreRequest = function KgpScoreRequest(target_id, familyTreeEdges, familyTreeSequencedRelatives, user_id, user_source, lng) {\n  (0, _classCallCheck3.default)(this, KgpScoreRequest);\n\n  var timestamp_js = +new Date();\n  this.timestamp_js = timestamp_js;\n  this.family_tree = {\n    \"edges\": familyTreeEdges,\n    \"sequenced_relatives\": familyTreeSequencedRelatives,\n    \"target\": target_id\n  };\n  this.user = {\n    \"id\": user_id,\n    \"source\": user_source,\n    \"lng\": lng\n  };\n};\n\n//# sourceURL=webpack:///./app/src/js/KgpScoreRequestHandler.js?");

/***/ }),

/***/ "./app/src/js/KgpScoreResponse.js":
/*!****************************************!*\
  !*** ./app/src/js/KgpScoreResponse.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.KgpScoreStale = exports.KgpScoreError = exports.KgpScoreSuccess = exports.KgpScoreResponse = undefined;\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KgpScoreResponse = exports.KgpScoreResponse = function () {\n  function KgpScoreResponse(status, timestamp_js, request, tree_signature) {\n    var extras = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n    (0, _classCallCheck3.default)(this, KgpScoreResponse);\n\n    this.status = status;\n    this.timestamp_js = timestamp_js;\n    this.request = request;\n    this.tree_signature = tree_signature;\n    this.extras = extras;\n  }\n\n  (0, _createClass3.default)(KgpScoreResponse, null, [{\n    key: \"parseJSON\",\n    value: function parseJSON(json, request) {\n      return KgpScoreResponse.parse(JSON.parse(json), request);\n    }\n  }, {\n    key: \"parse\",\n    value: function parse(raw, request) {\n      if (raw.status == \"OK\") {\n        return new KgpScoreSuccess(raw.timestamp_js, request, raw.tree_signature, raw.result.privacy_metric, raw.result.cached, raw.result.execution_time, raw.extras);\n      } else if (raw.status == \"error\") {\n        return new KgpScoreError(raw.timestamp_js, request, raw.tree_signature, raw.code, raw.extras);\n      } else {\n        throw new Error({ \"msg\": \"KgpScoreResponse.parse(): argument raw is not a parsable KgpScoreResponse.\", \"raw\": raw });\n      }\n    }\n  }]);\n  return KgpScoreResponse;\n}();\n\nvar KgpScoreSuccess = exports.KgpScoreSuccess = function (_KgpScoreResponse) {\n  (0, _inherits3.default)(KgpScoreSuccess, _KgpScoreResponse);\n\n  function KgpScoreSuccess(timestamp_js, request, tree_signature, privacy_metric, cached, execution_time) {\n    var extras = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;\n    (0, _classCallCheck3.default)(this, KgpScoreSuccess);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (KgpScoreSuccess.__proto__ || (0, _getPrototypeOf2.default)(KgpScoreSuccess)).call(this, \"OK\", timestamp_js, request, tree_signature, extras));\n\n    _this.result = {\n      \"privacy_metric\": privacy_metric,\n      \"cached\": cached,\n      \"execution_time\": execution_time\n    };\n    _this.request = {}; // empty on initialisation, must be set later on\n    return _this;\n  }\n\n  return KgpScoreSuccess;\n}(KgpScoreResponse);\n\nvar KgpScoreError = exports.KgpScoreError = function (_KgpScoreResponse2) {\n  (0, _inherits3.default)(KgpScoreError, _KgpScoreResponse2);\n\n  function KgpScoreError(timestamp_js, request, tree_signature, code) {\n    var extras = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n    (0, _classCallCheck3.default)(this, KgpScoreError);\n\n    var _this2 = (0, _possibleConstructorReturn3.default)(this, (KgpScoreError.__proto__ || (0, _getPrototypeOf2.default)(KgpScoreError)).call(this, \"error\", timestamp_js, request, tree_signature, extras));\n\n    _this2.code = code;\n    return _this2;\n  }\n\n  return KgpScoreError;\n}(KgpScoreResponse);\n\nvar KgpScoreStale = exports.KgpScoreStale = function (_KgpScoreResponse3) {\n  (0, _inherits3.default)(KgpScoreStale, _KgpScoreResponse3);\n\n  function KgpScoreStale(kgpResp) {\n    (0, _classCallCheck3.default)(this, KgpScoreStale);\n\n    var _this3 = (0, _possibleConstructorReturn3.default)(this, (KgpScoreStale.__proto__ || (0, _getPrototypeOf2.default)(KgpScoreStale)).call(this, \"stale\", kgpResp.timestamp_js, kgpResp.request, kgpResp.tree_signature, kgpResp.extras));\n\n    _this3.staleResp = kgpResp;\n    return _this3;\n  }\n\n  return KgpScoreStale;\n}(KgpScoreResponse);\n\n//# sourceURL=webpack:///./app/src/js/KgpScoreResponse.js?");

/***/ }),

/***/ "./app/src/js/KgpSurvey.js":
/*!*********************************!*\
  !*** ./app/src/js/KgpSurvey.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.KgpSurvey = undefined;\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _set = __webpack_require__(/*! babel-runtime/core-js/set */ \"./node_modules/babel-runtime/core-js/set.js\");\n\nvar _set2 = _interopRequireDefault(_set);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _cookies = __webpack_require__(/*! ./lib/cookies.js */ \"./app/src/js/lib/cookies.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KgpSurvey = exports.KgpSurvey = function () {\n  function KgpSurvey(api_endpoint, userId, i18n) {\n    var launchWaitTimeBasis = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 60;\n    var launchWaitTimePoissonMean = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 90;\n    var launchWaitTimeMax = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 300;\n    var cookieLocalStoragePrefix = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : \"kgpmeter-\";\n    (0, _classCallCheck3.default)(this, KgpSurvey);\n\n    this.api_endpoint = api_endpoint;\n    this.questions = [\"prior-knowledge\", \"score-exp\", \"you-or-family\", \"utility-website\", \"nps\", \"survey-comment\", \"survey-sex\", \"survey-age\", \"survey-own-sequence\", \"survey-other-sequence\"];\n    this.userId = userId;\n    this.i18n = i18n;\n    this.cookieName = cookieLocalStoragePrefix + \"survey-status\";\n\n    var self = this;\n\n    // Waiting time: 1m + poisson at mean 1m30\n    this.timestampFirstRequest = null;\n    this.launchWaitTimeBasis = launchWaitTimeBasis;\n    this.launchWaitTimePoissonMean = launchWaitTimePoissonMean;\n    this.launchWaitTimeMax = launchWaitTimeMax;\n    this.launchWaitTime = 10 * launchWaitTimeMax;\n    while (this.launchWaitTime > this.launchWaitTimeMax) {\n      this.launchWaitTime = this.launchWaitTimeBasis + poissonProcess.sample(this.launchWaitTimePoissonMean);\n    }\n\n    // survey launch conditions\n    this.signaturesRequestedTrees = new _set2.default();\n    this.twoNodesAdded = false;\n    this.threeRequestsAsked = false;\n    this.oneTarget = false;\n    this.surveyNotStarted = true;\n\n    this.surveyTrigger = undefined;\n\n    // send question answer on change \n    this.questions.forEach(function (questionId) {\n      $(\"#\" + questionId + \" input\").on(\"change\", function (a, b, c) {\n        var json_to_send = {\n          question_code: questionId,\n          answer: $(this).val(),\n          survey_trigger: self.surveyTrigger,\n          user: {\n            id: self.userId,\n            lng: self.i18n.lng\n          }\n        };\n        fetch(self.api_endpoint, {\n          method: 'POST',\n          body: (0, _stringify2.default)(json_to_send)\n        });\n      });\n      // success!\n    });\n\n    // comment: different\n    $(\"#survey-comment-text\").on(\"change\", function (a, b, c) {\n      var json_to_send = {\n        question_code: \"survey-comment\",\n        answer: $(this).val(),\n        survey_trigger: self.surveyTrigger,\n        user: {\n          id: self.userId,\n          lng: self.i18n.lng\n        }\n      };\n      fetch(self.api_endpoint, {\n        method: 'POST',\n        body: (0, _stringify2.default)(json_to_send)\n      });\n    });\n\n    this.updateSurveyVolunteerButton(0);\n\n    document.getElementById(\"survey-finish-step-1-button\").addEventListener(\"click\", function () {\n      return self.changePageSurvey();\n    });\n    document.getElementById(\"survey-left-button\").addEventListener(\"click\", function () {\n      return self.surveyPrevious();\n    });\n    document.getElementById(\"survey-right-button\").addEventListener(\"click\", function () {\n      return self.closeSurvey();\n    });\n  }\n\n  /**\n   * Check that conditions to launch the survey are filled.\n   */\n\n\n  (0, _createClass3.default)(KgpSurvey, [{\n    key: \"checkSurveyLaunchConditions\",\n    value: function checkSurveyLaunchConditions(target) {\n      var nodes = ftree.nodesArray().filter(function (n) {\n        return !n.id.match(/f|F/);\n      });\n      this.twoNodesAdded = nodes.length >= 3;\n      //let oneNodeSequenced = nodes.filter(n => n.sequencedDNA).length >= 1\n      this.threeRequestsAsked = this.signaturesRequestedTrees.size >= 3;\n      this.oneTarget = Boolean(target);\n      this.surveyNotStarted = !this.getSurveyStatus();\n      //console.log(\"twoNodesAdded=\",twoNodesAdded,\", threeRequestsAsked=\",threeRequestsAsked,\", oneTarget=\",oneTarget,\", !surveyStarted\", !surveyStarted)\n\n      return this.twoNodesAdded && this.threeRequestsAsked && this.oneTarget && this.surveyNotStarted;\n    }\n\n    /**\n     * launch the survey\n     * @param {*} trigger either \"volunteer\", \"automatic\", \"resume\"\n     */\n\n  }, {\n    key: \"launchSurvey\",\n    value: function launchSurvey(trigger) {\n      var status = this.getSurveyStatus();\n      if (status != \"finished\") {\n        this.surveyTrigger = trigger;\n        this.setSurveyStatus(\"launched\");\n        $(\"#modal-survey\").modal('show');\n      }\n      //$('#modal-survey').on('hidden.bs.modal', function (e) {if(getSurveyStatus()!=\"finished\"){ showSurveyVolunteerButton() }})\n    }\n  }, {\n    key: \"await\",\n    value: function _await(kgpPromise, request, previousResponse) {\n      var _this = this;\n\n      var self = this;\n      kgpPromise.then(function (kgpSuccess) {\n        _this.signaturesRequestedTrees.add(kgpSuccess.tree_signature);\n        // if needed, set timestamp of first request\n        if (!_this.timestampFirstRequest) {\n          _this.timestampFirstRequest = kgpSuccess.timestamp_js;\n        }\n        // if launch conditions filled: launch survey (after required timeout)\n        if (_this.checkSurveyLaunchConditions(request.family_tree.target)) {\n          var now = +new Date();\n          var timeSinceFirstRequest = now - _this.timestampFirstRequest;\n          var timeout = void 0;\n          if (timeSinceFirstRequest > 1000 * _this.launchWaitTime) {\n            // if the launchWaitTime is elapsed: launch after 5 seconds\n            timeout = 5000;\n          } else {\n            // if the launchWaitTime isn't elapsed yet: launch after the time delta\n            timeout = 1000 * _this.launchWaitTime - timeSinceFirstRequest;\n          }\n          setTimeout(function () {\n            return self.launchSurvey(\"automatic\");\n          }, timeout);\n        }\n      }).catch(function () {});\n    }\n  }, {\n    key: \"updateSurveyVolunteerButton\",\n    value: function updateSurveyVolunteerButton() {\n      var transitionSpeed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;\n\n      var self = this;\n      //\n      var surveyStatus = this.getSurveyStatus();\n      $(\"#survey-launch-button\").off(\"click\");\n      // not launched: volunteer\n      if (!surveyStatus) {\n        $(\"#survey-launch-button span\").attr(self.i18n.keyAttr, \"survey-volunteer\");\n        $(\"#survey-launch-button\").stop(true).slideDown(transitionSpeed);\n        $(\"#survey-launch-button\").on(\"click\", function () {\n          return self.launchSurvey(\"volunteer\");\n        });\n        // launched: resume\n      } else if (surveyStatus == \"launched\" || surveyStatus == \"step-1-done\") {\n        $(\"#survey-launch-button span\").attr(self.i18n.keyAttr, \"survey-resume\");\n        $(\"#survey-launch-button\").stop(true).slideDown(transitionSpeed);\n        $(\"#survey-launch-button\").on(\"click\", function () {\n          return self.launchSurvey(\"resume\");\n        });\n        // finished: hide\n      } else if (surveyStatus == \"finished\") {\n        $(\"#survey-launch-button\").stop(true).slideUp(transitionSpeed);\n      }\n    }\n    /** from step 1 to step 2 */\n\n  }, {\n    key: \"changePageSurvey\",\n    value: function changePageSurvey() {\n      $(\"#survey-finish-step-1-button\").hide();\n      $(\"#survey-finish-step-2-button\").show();\n      $(\"#survey-step-1\").hide();\n      $(\"#survey-step-2\").show();\n      this.setSurveyStatus(\"step-1-done\");\n    }\n\n    /** back to step 1 from step 2 */\n\n  }, {\n    key: \"surveyPrevious\",\n    value: function surveyPrevious() {\n      $(\"#survey-step-2\").hide();\n      $(\"#survey-finish-step-2-button\").hide();\n      $(\"#survey-step-1\").show();\n      $(\"#survey-finish-step-1-button\").show();\n      this.setSurveyStatus(\"launched\");\n    }\n\n    /** finish at step 2 */\n\n  }, {\n    key: \"closeSurvey\",\n    value: function closeSurvey() {\n      $(\"#modal-survey\").modal('hide');\n      $(\"#survey-step-2\").hide();\n      $(\"#survey-finish-step-2-button\").hide();\n      $(\"#survey-step-1\").show();\n      $(\"#survey-finish-step-1-button\").show();\n      this.setSurveyStatus(\"finished\");\n    }\n\n    /**\n     * getSurveyStatus(): reads the survey-status cookie...\n     * \n     * @returns undefined if not launched,\n     *          \"launched\" if launched and step 1 not done,\n     *          \"step-1-done\" if step 1 is done, but not step 2 (=user clicked on first finish button)\n     *          \"finished\" if finished (=user clicked on second finish button)\n     */\n\n  }, {\n    key: \"getSurveyStatus\",\n    value: function getSurveyStatus() {\n      return _cookies.cookie.read(this.cookieName);\n    }\n  }, {\n    key: \"setSurveyStatus\",\n    value: function setSurveyStatus(status) {\n      _cookies.cookie.create(this.cookieName, status, 1);\n      this.updateSurveyVolunteerButton();\n    }\n  }]);\n  return KgpSurvey;\n}();\n\n//# sourceURL=webpack:///./app/src/js/KgpSurvey.js?");

/***/ }),

/***/ "./app/src/js/KgpTutorial.js":
/*!***********************************!*\
  !*** ./app/src/js/KgpTutorial.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.KgpTutorialButton = undefined;\n\nvar _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ \"./node_modules/babel-runtime/core-js/object/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nexports.kgpTutorial = kgpTutorial;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KgpTutorialButton = exports.KgpTutorialButton = function () {\n  function KgpTutorialButton(domId, kgp) {\n    var listeners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    (0, _classCallCheck3.default)(this, KgpTutorialButton);\n\n    this.domId = domId;\n    this.kgp = kgp;\n    this.listeners = listeners;\n    this.init();\n  }\n\n  (0, _createClass3.default)(KgpTutorialButton, [{\n    key: \"init\",\n    value: function init() {\n      d3.select(\"#\" + this.domId).remove();\n      // trash button\n      this.tutoButton = this.kgp.addSvgButton(\"\\uF059\", this.domId, \"hint-tuto\", 0, 57, 22, 0, 60);\n      this.tutoButton.attr(\"data-toggle\", 'modal').attr(\"data-target\", '#tuto-modal');\n      var self = this;\n      (0, _keys2.default)(this.listeners).forEach(function (k) {\n        return self.tutoButton.on(k, self.listeners[k]);\n      });\n    }\n  }, {\n    key: \"on\",\n    value: function on(event, listener) {\n      this.listeners[event] = listener;\n      this.tutoButton.on(event, listener);\n    }\n  }]);\n  return KgpTutorialButton;\n}();\n\nfunction kgpTutorial(i18n) {\n  //intro1: 'Construisez votre arbre de famille: <img class=\"tutorial-img\" src=\"../img/tool/tuto1_build.png\">'\n  //intro2: 'Indiquez qui est séquencé dans votre famille: <img class=\"tutorial-img\" src=\"../img/tool/tuto2_sequence.png\">'\n  //intro3: 'Observez votre score: <video controls=\"false\" autoplay width=\"365px\" height=\"348px\" name=\"Video Name\" src=\"../img/tool/tuto3_score.mov\"></video>'+'<script type=\"javascript\">var vids = $(\"video\");$.each(vids, function(){this.controls = false;});</script>'\n\n  var tutoStep = 0;\n  var nbTutoSteps = 4;\n  var prevKey = \"previous-button\";\n  var nextKey = \"next-button\";\n  var closeKey = \"close-button\";\n\n  var leftButton = document.getElementById(\"tuto-left-button\");\n  leftButton.setAttribute(i18n.keyAttr, prevKey);\n  leftButton.addEventListener(\"click\", previousTutoStep);\n  var rightButton = document.getElementById(\"tuto-right-button\");\n  // puce events\n\n  var _loop = function _loop(i) {\n    d3.select(\"#tuto-puce\" + i).on(\"click\", function (d) {\n      tutoStep = i;\n      loadTutoStep();\n    });\n  };\n\n  for (var i in d3.range(nbTutoSteps)) {\n    _loop(i);\n  }\n\n  function previousTutoStep() {\n    tutoStep--;\n    loadTutoStep();\n  }\n  function nextTutoStep() {\n    tutoStep++;\n    loadTutoStep();\n  }\n  function hideModal() {\n    $('#tuto-modal').modal('hide');\n    cloneReplaceElement(rightButton);\n    cloneReplaceElement(leftButton);\n  }\n  function cloneReplaceElement(el) {\n    var elClone = el.cloneNode(true);\n    el.parentNode.replaceChild(elClone, el);\n    return elClone;\n  }\n\n  function loadTutoStep() {\n    $(\"#tuto-title\").attr(i18n.keyAttr, \"tuto-title-\" + tutoStep);\n    $(\"#tuto-text\").attr(i18n.keyAttr, \"tuto-text-\" + tutoStep);\n    var video_lng = i18n.lng == \"fr\" ? i18n.lng : \"en\"; // video only in french or english\n    $(\"#tuto-video\").attr(\"src\", \"./tuto/tuto_\" + video_lng + \"_\" + tutoStep + \".mp4\");\n    $(\"#tuto-video\").currentTime = 0;\n    d3.selectAll(\".tuto-puce\").transition(500).attr(\"fill\", \"#f0f0f0\");\n    d3.select(\"#tuto-puce\" + tutoStep).transition(500).attr(\"fill\", \"grey\");\n\n    // left-hand button\n    if (tutoStep == 0) {\n      leftButton.classList.add(\"disabled\");\n    } else {\n      leftButton.classList.remove(\"disabled\");\n    }\n\n    // right-hand button\n    if (tutoStep >= nbTutoSteps - 1) {\n      rightButton = cloneReplaceElement(rightButton);\n      rightButton.setAttribute(i18n.keyAttr, closeKey);\n      rightButton.addEventListener(\"click\", hideModal);\n    } else {\n      rightButton = cloneReplaceElement(rightButton);\n      rightButton.setAttribute(i18n.keyAttr, nextKey);\n      rightButton.addEventListener(\"click\", nextTutoStep);\n    }\n  }\n\n  loadTutoStep();\n\n  // text formatters: add buttons svgs in text \n  function tuto0formatter(text, data) {\n    text = text.replace(\"{#add}\", \"<svg style='position:relative;top:6px;' height='24px' width='24px'><g transform='translate(12,12)'><circle r='12' class='node-button-circle'></circle><text class='fas node-button-fas' x='-6px' y='5px' style='font-size:12px'>&#xf234;</text></g></svg>\");\n    text = text.replace(\"{#remove}\", \"<svg style='position:relative;top:6px;' height='24px' width='24px'><g transform='translate(12,12)'><circle r='12' class='node-button-circle'></circle><text class='fas node-button-fas' x='-7px' y='5px' style='font-size:12px'>&#xf506;</text></g></svg>\");\n    return text;\n  }\n  i18n.dynamic[\"tuto-text-0\"] = tuto0formatter;\n\n  function tuto1formatter(text, data) {\n    text = text.replace(\"{#sequence}\", \"<svg style='position:relative;top:6px;' height='24px' width='24px'><g transform='translate(12,12)'><circle r='12' class='node-button-circle'></circle><text class='fas node-button-fas' x='-7px' y='5px' style='font-size:12px'>&#xf471;+</text></g></svg>\");\n    text = text.replace(\"{#unsequence}\", \"<svg style='position:relative;top:6px;' height='24px' width='24px'><g transform='translate(12,12)'><circle r='12' class='node-button-circle'></circle><text class='fas node-button-fas' x='-7px' y='5px' style='font-size:12px'>&#xf471;-</text></g></svg>\");\n    return text;\n  }\n  i18n.dynamic[\"tuto-text-1\"] = tuto1formatter;\n\n  function tuto2formatter(text, data) {\n    text = text.replace(\"{#target}\", \"<svg style='position:relative;top:6px;' height='24px' width='24px'><g transform='translate(12,12)'><circle r='12' class='node-button-circle'></circle><text class='fas node-button-fas' x='-6px' y='5px' style='font-size:12px'>&#xf05b;</text></g></svg>\");\n    return text;\n  }\n  i18n.dynamic[\"tuto-text-2\"] = tuto2formatter;\n\n  function tuto3formatter(text, data) {\n    text = text.replace(\"{#sex}\", \"<svg style='position:relative;top:6px;' height='24px' width='24px'><g transform='translate(12,12)'><circle r='12' class='node-button-circle'></circle><text class='fas node-button-fas' x='-6px' y='5px' style='font-size:12px'>&#xf228;</text></g></svg>\");\n    return text;\n  }\n  i18n.dynamic[\"tuto-text-3\"] = tuto3formatter;\n}\n\n//# sourceURL=webpack:///./app/src/js/KgpTutorial.js?");

/***/ }),

/***/ "./app/src/js/KgpWordedScore.js":
/*!**************************************!*\
  !*** ./app/src/js/KgpWordedScore.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.KgpWordedScore = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KgpWordedScore = exports.KgpWordedScore = function () {\n  function KgpWordedScore(parentId, id, elementClass, x, y, height, colorScale, i18n, i18nKey) {\n    (0, _classCallCheck3.default)(this, KgpWordedScore);\n\n    this.parentId = parentId;\n    this.id = id;\n    this.elementClass = elementClass;\n    this.x = x;\n    this.y = y;\n    this.height = height;\n    this.colorScale = colorScale;\n    this.i18n = i18n;\n    this.i18nKey = i18nKey;\n    this.privacyStatus = 1;\n\n    this.init();\n  }\n\n  (0, _createClass3.default)(KgpWordedScore, [{\n    key: \"init\",\n    value: function init() {\n      var self = this;\n\n      d3.select(\"#\" + this.id).remove();\n\n      this.text = d3.select(\"#\" + this.parentId).append(\"text\").attr(\"x\", this.x).attr(\"y\", this.y).attr(\"height\", this.height).attr(\"text-anchor\", \"end\").attr(\"fill\", \"darkgrey\").attr(\"id\", this.id).attr(\"class\", this.elementClass)\n      //TODO: fix i18n.keyAttr reference\n      .attr(this.i18n.keyAttr, self.i18nKey);\n      this.scale = d3.scaleLinear().range([self.height, 0]).domain([0, 1]);\n\n      this.i18n.dynamic[self.i18nKey] = function (t, d) {\n        return self.i18nFormat(t, d);\n      };\n      this.hide(0);\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      var transitionDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n\n      this.text.transition(transitionDuration).attr(\"opacity\", 0);\n    }\n\n    /** update() updates the KgpWordedScore with a new score */\n\n  }, {\n    key: \"update\",\n    value: function update(privacyMeasure) {\n      var transitionDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;\n\n      var self = this;\n      //TODO: use a proper instance nbBoxes...\n      if (privacyMeasure > 0.99) {\n        this.privacyStatus = 100;\n      } else if (privacyMeasure >= 0.8) {\n        this.privacyStatus = 5;\n      } else if (privacyMeasure >= 0.6) {\n        this.privacyStatus = 4;\n      } else if (privacyMeasure >= 0.4) {\n        this.privacyStatus = 3;\n      } else if (privacyMeasure >= 0.2) {\n        this.privacyStatus = 2;\n      } else {\n        this.privacyStatus = 1;\n      }\n      //if(kgp.target){\n      this.text.attr(\"opacity\", 0.2).transition(transitionDuration).attr(\"opacity\", 1);\n      this.i18n.data(this.i18nKey, this.privacyStatus);\n      setTimeout(function () {\n        return d3.select(\"#\" + self.id + \" tspan\").attr(\"fill\", self.colorScale(privacyMeasure));\n      }, 50);\n      /*} else{\n        this.hide()\n      }*/\n    }\n\n    /** await() puts the KgpWordedScore in a waiting state (opacity=0.5) and updates it properly once the promise has fulfilled */\n\n  }, {\n    key: \"await\",\n    value: function _await(kgpPromise, request, previousResponse) {\n      var _this = this;\n\n      if (this.text.attr(\"opacity\") == 1) {\n        this.text.transition(200).attr(\"opacity\", 0.5);\n      }\n\n      kgpPromise.then(function (kgpSuccess) {\n        _this.update(kgpSuccess.result.privacy_metric);\n      }, function () {});\n    }\n  }, {\n    key: \"i18nFormat\",\n    value: function () {\n      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(text, data) {\n        var qualifier;\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.i18n.t(\"privacy-bar-score-\" + data);\n\n              case 2:\n                qualifier = _context.sent;\n                return _context.abrupt(\"return\", text.replace(\"{}\", qualifier ? qualifier : \"...\"));\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function i18nFormat(_x3, _x4) {\n        return _ref.apply(this, arguments);\n      }\n\n      return i18nFormat;\n    }()\n  }]);\n  return KgpWordedScore;\n}();\n\n//# sourceURL=webpack:///./app/src/js/KgpWordedScore.js?");

/***/ }),

/***/ "./app/src/js/KinGenomicPrivacyMeter.js":
/*!**********************************************!*\
  !*** ./app/src/js/KinGenomicPrivacyMeter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.KinGenomicPrivacyMeter = undefined;\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _cookies = __webpack_require__(/*! ./lib/cookies.js */ \"./app/src/js/lib/cookies.js\");\n\nvar _FamilyTreeLayout = __webpack_require__(/*! ./FamilyTreeLayout.js */ \"./app/src/js/FamilyTreeLayout.js\");\n\nvar _FamilyTreeArtist = __webpack_require__(/*! ./FamilyTreeArtist.js */ \"./app/src/js/FamilyTreeArtist.js\");\n\nvar _KgpScoreRequestHandler = __webpack_require__(/*! ./KgpScoreRequestHandler.js */ \"./app/src/js/KgpScoreRequestHandler.js\");\n\nvar _KgpSurvey = __webpack_require__(/*! ./KgpSurvey.js */ \"./app/src/js/KgpSurvey.js\");\n\nvar _KgpBackendStatus = __webpack_require__(/*! ./KgpBackendStatus.js */ \"./app/src/js/KgpBackendStatus.js\");\n\nvar _KgpScoreNumberExplainer = __webpack_require__(/*! ./KgpScoreNumberExplainer.js */ \"./app/src/js/KgpScoreNumberExplainer.js\");\n\nvar _KgpWordedScore = __webpack_require__(/*! ./KgpWordedScore.js */ \"./app/src/js/KgpWordedScore.js\");\n\nvar _KgpPrivacyBar = __webpack_require__(/*! ./KgpPrivacyBar.js */ \"./app/src/js/KgpPrivacyBar.js\");\n\nvar _KgpIframeInterface = __webpack_require__(/*! ./KgpIframeInterface */ \"./app/src/js/KgpIframeInterface.js\");\n\nvar _TrashButton = __webpack_require__(/*! ./TrashButton.js */ \"./app/src/js/TrashButton.js\");\n\nvar _KgpTutorial = __webpack_require__(/*! ./KgpTutorial.js */ \"./app/src/js/KgpTutorial.js\");\n\nvar _utils = __webpack_require__(/*! ./utils.js */ \"./app/src/js/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KinGenomicPrivacyMeter = exports.KinGenomicPrivacyMeter = function () {\n  function KinGenomicPrivacyMeter(api_base_url, svgId, youNodeId, i18n) {\n    var cookieLocalStoragePrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : \"kgpmeter-\";\n    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};\n    (0, _classCallCheck3.default)(this, KinGenomicPrivacyMeter);\n\n    this.setOptions(options);\n    var self = this;\n    this.i18n = i18n;\n\n    this.svg = d3.select(\"#\" + svgId);\n    this.svgHeight = parseInt(this.svg.attr(\"height\"));\n    this.svgOriginalHeight = this.svgHeight;\n    this.updateSvgHeight(this.svgHeight, 800, true);\n\n    this.youNodeId = youNodeId; // \"@I1@\"\n    this.privacyMetric = 1;\n    this.relationships = KinGenomicPrivacyMeter.getRelationships();\n\n    this.indiNodeSize = { width: 100, height: 100 };\n    this.famNodeSize = { width: 7, height: 7 };\n\n    this.updateSvgWidth();\n\n    // set language event\n    function setLanguage(e) {\n      i18n.changeLanguage(e.data.lng);\n    }\n\n    // set max dimensions event\n    function setIframeMaxDimensionEvent(e) {\n      self.options.svgMaxHeight = e.data.maxHeight;\n    }\n\n    // user id&source + source event\n    var idCookie = cookieLocalStoragePrefix + \"user-id\";\n    var sourceCookie = cookieLocalStoragePrefix + \"user-source\";\n    this.userId = _cookies.cookie.read(idCookie);\n    this.userSource = _cookies.cookie.read(sourceCookie);\n    if (!this.userId) {\n      this.userId = +new Date() + \"-\" + Math.random();\n      _cookies.cookie.create(idCookie, this.userId, 1);\n    }\n    function setSource(e) {\n      var userSource = _cookies.cookie.read(sourceCookie);\n      if (!userSource) {\n        // if no source: init user source\n        self.userSource = e.data.source ? e.data.source : document.URL;\n        // TODO: remove or refine ?test\n        if (Boolean(self.userSource.match(/\\/privacy-dev\\//))) {\n          self.userSource = self.userSource + \"?test\";\n        }\n        _cookies.cookie.create(sourceCookie, self.userSource, 1);\n\n        // send init request\n        self.scoreRequestHandler.requestScore(\"i1\", [[\"i1\", \"f1\"], [\"f1\", \"i2\"]], [], self.userId, self.userSource, self.i18n.lng, true // silent request\n        );\n      }\n    }\n    // if app not enclosed in an iframe: set source as current URL after 1sec\n    setTimeout(function createUserAfterTimeout() {\n      var event = (0, _KgpIframeInterface.kgpSetSourceEvent)(document.URL);\n      window.postMessage(event, \"*\");\n    }, 1000);\n\n    //handles messages received from parent window\n    function dispatchKgpParentMessage(e) {\n      if (e.data.type) {\n        switch (e.data.type) {\n          case \"KgpSetLanguageEvent\":\n            setLanguage(e);\n            break;\n          case \"KgpSetIframeMaxDimensionEvent\":\n            setIframeMaxDimensionEvent(e);\n            break;\n          case \"KgpSetSourceEvent\":\n            setSource(e);\n            break;\n          case \"KgpLaunchTutorialEvent\":\n            $(\"#tuto-modal\").modal(\"show\");\n            (0, _KgpTutorial.kgpTutorial)(self.i18n);\n            break;\n          case \"KgpSetHeightEvent\":\n            break;\n          default:\n            console.log(\"KGPMeter inside iFrame: unknown type of message received:\", e);\n        }\n      }\n    }\n    window.addEventListener('message', dispatchKgpParentMessage, false);\n\n    // api urls\n    this.setApiUrl(api_base_url);\n\n    this.kgpsurvey = new _KgpSurvey.KgpSurvey(this.surveyApiEndpoint, this.userId, this.i18n);\n\n    // privacy bar\n    var privacyBarWidth = 30;\n    var privacyBarStrokeWidth = 4;\n    this.privacyBar = new _KgpPrivacyBar.KgpPrivacyBar(this.svg.attr(\"id\"), \"privacy-bar-g\", this.svgWidth - privacyBarWidth - privacyBarStrokeWidth, 30, 30, 400, 5, d3.interpolateRgbBasis([\"rgb(255,0,0)\", \"rgb(255,125,0)\", \"rgb(255,255,0)\", \"rgb(0,195,0)\"]), self.i18n);\n\n    // privacy worded score\n    this.privacyWordedScore = new _KgpWordedScore.KgpWordedScore(this.privacyBar.g.attr(\"id\"), \"privacy-bar-title\", \"privacy-bar-element\", this.privacyBar.width, -16, 20, this.privacyBar.colorScale, self.i18n, \"privacy-bar-title\");\n\n    // backend status\n    this.backendStatus = new _KgpBackendStatus.KgpBackendStatus(\"kgp-response-container\", self.i18n);\n\n    // explainer\n    this.scoreNumberExplainer = new _KgpScoreNumberExplainer.KgpScoreNumberExplainer(\"kgp-explainer-container\", self.i18n, \"explainer-text\");\n\n    // request handler\n    this.scoreRequestHandler = new _KgpScoreRequestHandler.KgpScoreRequestHandler(this.privacyScoreApiEndpoint);\n    // update privacyMetric\n    this.scoreRequestHandler.addListener(function (kgpPromise) {\n      kgpPromise.then(function (kgpSuccess) {\n        return self.privacyMetric = kgpSuccess.result.privacy_metric;\n      }, function () {});\n    });\n    // update cursor\n    this.scoreRequestHandler.addListener(function (kgpPromise) {\n      $(\"body\").css({ 'cursor': 'progress' });\n      kgpPromise.then(function (kgpSuccess) {\n        return $(\"body\").css({ 'cursor': 'auto' });\n      }, function (kgpError) {\n        return $(\"body\").css({ 'cursor': 'auto' });\n      });\n    });\n    // ...other listeners\n    this.scoreRequestHandler.addListener(function () {\n      var _self$privacyBar;\n\n      return (_self$privacyBar = self.privacyBar).await.apply(_self$privacyBar, arguments);\n    });\n    this.scoreRequestHandler.addListener(function () {\n      var _self$privacyWordedSc;\n\n      return (_self$privacyWordedSc = self.privacyWordedScore).await.apply(_self$privacyWordedSc, arguments);\n    });\n    this.scoreRequestHandler.addListener(function () {\n      var _self$backendStatus;\n\n      return (_self$backendStatus = self.backendStatus).await.apply(_self$backendStatus, arguments);\n    });\n    this.scoreRequestHandler.addListener(function () {\n      var _self$scoreNumberExpl;\n\n      return (_self$scoreNumberExpl = self.scoreNumberExplainer).await.apply(_self$scoreNumberExpl, arguments);\n    });\n    this.scoreRequestHandler.addListener(function () {\n      var _self$kgpsurvey;\n\n      return (_self$kgpsurvey = self.kgpsurvey).await.apply(_self$kgpsurvey, arguments);\n    });\n\n    // trash button\n    this.trashButton = new _TrashButton.TrashButton(\"trash-button\", this, { \"click.trash\": function clickTrash(d) {\n        return self.reset();\n      } });\n    this.tutorialButton = new _KgpTutorial.KgpTutorialButton(\"tutorial-button\", this, { \"click.tutorial\": function clickTutorial(d) {\n        return (0, _KgpTutorial.kgpTutorial)(self.i18n);\n      } });\n\n    (0, _utils.onWindowResize)(function () {\n      return self.resizeSvg();\n    });\n    (0, _utils.onWindowResize)(function () {\n      return d3.range(1000);\n    }); // hack with an astonishing effect: fixes problems with privacyBar&target on window resize...\n\n    this.ftree = this.loadFamilyTreeFromLocalStorage();\n    var savedFtree = Boolean(this.ftree);\n    if (!savedFtree) {\n      this.ftree = KinGenomicPrivacyMeter.getEmptyFamilyTree();\n    }\n\n    this.familyTreeArtist = new _FamilyTreeArtist.FamilyTreeArtist(this, this.i18n, this.target, 0);\n\n    if (this.target) {\n      var waitTime = 200;\n      setTimeout(function () {\n        return self.selectTarget(self.target, true);\n      }, waitTime);\n    }\n    if (savedFtree) {\n      this.scoreRequestHandler.requestScore(self.target ? self.target.id : \"\", this.ftree.getLinksAsIds(), this.ftree.nodesArray().filter(function (n) {\n        return n.sequencedDNA;\n      }).map(function (n) {\n        return n.id;\n      }), self.userId, self.userSource, this.i18n.lng);\n    }\n    this.mobileBlock();\n    this.IEBlock();\n  }\n\n  /** Resets the family tree in a pleasant way */\n\n\n  (0, _createClass3.default)(KinGenomicPrivacyMeter, [{\n    key: \"reset\",\n    value: function reset() {\n      var transitionDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;\n\n\n      var self = this;\n      // delete all nodes except you\n      this.ftree.nodesArray().forEach(function (n) {\n        if (n.id != self.youNodeId) {\n          self.ftree.deleteNode(n.id, self.youNodeId);\n        }\n      });\n      this.familyTreeArtist.nodeButtons.hide();\n      // set privacy score back to 1:\n      self.privacyMetric = 1;\n      self.target = null;\n      this.privacyBar.elements.transition(200).attr(\"opacity\", 1);\n      this.privacyBar.update(1);\n      this.backendStatus.hide();\n      this.privacyWordedScore.hide();\n      this.scoreNumberExplainer.hide();\n\n      // smoothly transition back to original position\n      this.familyTreeArtist.update(false, transitionDuration);\n\n      // once this is done (after 800ms), reset to the empty ftree\n      setTimeout(function () {\n        self.ftree = KinGenomicPrivacyMeter.getEmptyFamilyTree();\n        d3.select(\"#familytree-g\").remove();\n        self.familyTreeArtist.init(0);\n        self.saveFamilyTreeToLocalStorage();\n      }, transitionDuration + 2);\n    }\n  }, {\n    key: \"resetOptions\",\n    value: function resetOptions() {\n      this.options = {\n        svgMaxHeight: 2000,\n        maxFamilyTreeDepth: 5\n      };\n    }\n  }, {\n    key: \"setOptions\",\n    value: function setOptions(options) {\n      this.resetOptions();\n      this.addOptions(options);\n    }\n  }, {\n    key: \"addOptions\",\n    value: function addOptions(options) {\n      (0, _assign2.default)(this.options, options);\n    }\n  }, {\n    key: \"saveFamilyTreeToLocalStorage\",\n    value: function saveFamilyTreeToLocalStorage() {\n      var familyTreeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"kgp-familyTree\";\n      var targetKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"kgp-targetId\";\n      var saveDateKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"kgp-saveDate\";\n\n      localStorage.setItem(familyTreeKey, (0, _stringify2.default)(this.ftree.serialize([\"sequencedDNA\", \"lastSequencedDNA\", \"i18nName\"])));\n      localStorage.setItem(saveDateKey, +new Date());\n      if (this.target) {\n        localStorage.setItem(targetKey, this.target.id);\n      } else {\n        localStorage.setItem(targetKey, null);\n      }\n    }\n  }, {\n    key: \"loadFamilyTreeFromLocalStorage\",\n    value: function loadFamilyTreeFromLocalStorage() {\n      var familyTreeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"kgp-familyTree\";\n      var targetKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"kgp-targetId\";\n      var saveDateKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"kgp-saveDate\";\n      var familyTreeClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _FamilyTreeLayout.FamilyTreeLayout;\n\n      var familyTree = null;\n      var ftl = localStorage.getItem(familyTreeKey);\n      var targetId = localStorage.getItem(targetKey);\n      var saveDate = +localStorage.getItem(saveDateKey);\n      if (Boolean(ftl) & saveDate + 2 * 3600 * 1000 >= +new Date()) {\n        familyTree = familyTreeClass.unserialize(ftl);\n        this.target = targetId ? familyTree.nodes[targetId] : null;\n      }\n      return familyTree;\n    }\n  }, {\n    key: \"selectTarget\",\n    value: function selectTarget(newTarget) {\n      var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n      var self = this;\n      if (!newTarget.id) {\n        newTarget = this.ftree.nodesArray().filter(function (n) {\n          return n.id == newTarget;\n        })[0];\n      }\n      if (forceUpdate || !this.target || newTarget.id != this.target.id) {\n        var oldTarget = self.target;\n        this.target = newTarget;\n        this.familyTreeArtist.setAsTarget(newTarget, oldTarget);\n        this.scoreRequestHandler.requestScore(self.target ? self.target.id : \"\", this.ftree.getLinksAsIds(), this.ftree.nodesArray().filter(function (n) {\n          return n.sequencedDNA;\n        }).map(function (n) {\n          return n.id;\n        }), self.userId, self.userSource, self.i18n.lng);\n        self.saveFamilyTreeToLocalStorage();\n      }\n    }\n  }, {\n    key: \"setApiUrl\",\n    value: function setApiUrl(api_base_url) {\n      this.api_base_url = api_base_url;\n      var separator = this.api_base_url.endsWith(\"/\") ? \"\" : \"/\";\n      this.privacyScoreApiEndpoint = this.api_base_url + separator + \"privacy-score\";\n      this.surveyApiEndpoint = this.api_base_url + separator + \"survey\";\n    }\n  }, {\n    key: \"updateSvgHeight\",\n    value: function updateSvgHeight(heightFtree) {\n      var transitionsDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;\n      var forceEnclosingHeightUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n      var newSvgHeight = this.svgHeight;\n      if (heightFtree < this.svgOriginalHeight) {\n        //tree height smaller than minimum\n        newSvgHeight = this.svgOriginalHeight;\n      }\n      // tree height between minimum and max\n      if (heightFtree >= this.svgOriginalHeight && heightFtree <= this.options.svgMaxHeight) {\n        newSvgHeight = heightFtree;\n      }\n      // tree height taller than maximum\n      if (heightFtree > this.options.svgMaxHeight) {\n        newSvgHeight = this.options.svgMaxHeight;\n      }\n      // if needed -> change it\n      if (newSvgHeight != this.svgHeight || forceEnclosingHeightUpdate) {\n        var oldBodyHeight = document.getElementsByTagName('body')[0].scrollHeight;\n        var newBodyHeight = oldBodyHeight - this.svgHeight + newSvgHeight;\n        this.svgHeight = newSvgHeight;\n        this.svg.transition().duration(transitionsDuration).attr(\"height\", newSvgHeight);\n        var event = (0, _KgpIframeInterface.kgpSetHeightEvent)(newBodyHeight + 20, transitionsDuration);\n        window.parent.postMessage(event, \"*\");\n      }\n    }\n\n    /** Update the svg width, called on window resizes */\n\n  }, {\n    key: \"updateSvgWidth\",\n    value: function updateSvgWidth() {\n      this.svgWidth = this.svg.node().parentNode.clientWidth;\n      this.svg.attr(\"width\", this.svgWidth);\n    }\n\n    /**\n    * function correctly resizing svg, family tree and privacy bar according to svg's parent node\n    */\n\n  }, {\n    key: \"resizeSvg\",\n    value: function resizeSvg() {\n      var self = this;\n      // remove all children of svg\n      var svgNode = this.svg.node();\n      while (svgNode.firstChild) {\n        svgNode.removeChild(svgNode.firstChild);\n      }\n      // resize svg\n      this.updateSvgWidth();\n      // redraw tree&privacy bar\n      this.privacyBar.init(self.svgWidth - this.privacyBar.width - this.privacyBar.strokeWidth, this.privacyBar.y, 0);\n      this.privacyWordedScore.init();\n      this.privacyWordedScore.hide();\n      this.trashButton.init();\n      this.tutorialButton.init();\n\n      if (self.target) {\n        self.privacyBar.update(self.privacyMetric, 0);\n        self.privacyWordedScore.update(self.privacyMetric, 0);\n      }\n      this.familyTreeArtist.init(0);\n      this.mobileBlock();\n      this.IEBlock();\n    }\n\n    /** Returns the family relation to center node (\"you\") of target relation\n     * \n     * for rexample relationToYou(\"father\", \"son\") will return \"brother\" (the \"son\" of your \"father\" is your \"brother\")\n    */\n\n  }, {\n    key: \"relationToYou\",\n    value: function relationToYou(sourceRelation, targetRelation) {\n      if (this.relationships[sourceRelation] && this.relationships[sourceRelation][targetRelation]) {\n        return this.relationships[sourceRelation][targetRelation];\n      }\n\n      var sex = KinGenomicPrivacyMeter.getSex(targetRelation, sourceRelation);\n      if (sex == \"F\") {\n        return \"woman\";\n      }\n      if (sex == \"M\") {\n        return \"man\";\n      }\n      return undefined;\n    }\n\n    /** use by TrashButton, TrashButtonWithConfirmation */\n\n  }, {\n    key: \"addSvgButton\",\n    value: function addSvgButton(FAunicode, gId, i18nKey) {\n      var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n      var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;\n      var tooltipX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 22;\n      var tooltipY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;\n      var tooltipWidth = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 80;\n      var tooltipHeight = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 50;\n\n      var button = this.svg.append(\"g\").attr(\"id\", gId).attr(\"transform\", \"translate(\" + x + \",\" + y + \")\").attr(\"style\", \"cursor:pointer;\").classed(\"button-with-tooltip\", true);\n      button.append(\"rect\").classed(\"svg-button\", true).attr(\"width\", 60) // big width to allow button to reduce tooltip hide sensitivity\n      .attr(\"height\", 25).attr(\"fill\", \"white\").attr(\"opacity\", 0);\n\n      button.append(\"text\").attr(\"class\", \"fas svg-button-fas\").attr(\"y\", 20).text(FAunicode);\n      button.append(\"foreignObject\").attr(\"x\", tooltipX).attr(\"y\", tooltipY).attr(\"width\", tooltipWidth).attr(\"height\", tooltipHeight).classed(\"tooltip\", true).append(\"xhtml:div\").append(\"span\").classed(\"tooltip-text\", true).attr(this.i18n.keyAttr, i18nKey);\n\n      return button;\n    }\n\n    /** block IE if detected, not the same as mobile as foreignObject not supported */\n\n  }, {\n    key: \"IEBlock\",\n    value: function IEBlock() {\n      var self = this;\n      if ((0, _utils.detectIE11)()) {\n        self.svg.append(\"rect\").attr(\"width\", self.svgWidth).attr(\"height\", self.svgHeight).attr(\"fill\", \"white\").attr(\"opacity\", \"0.8\");\n\n        this.backendStatus.displayDanger(\"IE-block-error\", 10000000000);\n      }\n    }\n\n    /** Block mobile browsers when detected, not the same as IE as foreignObject allows text to wrap in multiple lines on small screens. */\n\n  }, {\n    key: \"mobileBlock\",\n    value: function mobileBlock() {\n      var self = this;\n      if ((0, _utils.detectMobile)()) {\n        self.svg.append(\"rect\").attr(\"width\", self.svgWidth).attr(\"height\", self.svgHeight).attr(\"fill\", \"white\").attr(\"opacity\", \"0.8\");\n\n        self.svg.append(\"foreignObject\").attr(\"y\", self.svgHeight / 4).attr(\"width\", self.svgWidth).attr(\"height\", self.svgHeight).append(\"xhtml:div\").attr(\"style\", \"max:width:100%;\").attr(\"data-i18n\", \"mobile-block\");\n\n        this.backendStatus.displayDanger(\"mobile-block\", 10000000000);\n      }\n    }\n\n    /** Debugging: show node ids on hover */\n\n  }, {\n    key: \"showNodesIds\",\n    value: function showNodesIds() {\n      self.svgg.selectAll(\".nodeg\").append('text').text(function (d) {\n        return d.id;\n      })\n      //.attr(\"class\",\"node-id\")\n      .attr(\"transform\", \"translate(\" + -50 + \",0)\");\n    }\n\n    /** Creates a depth 2 dictionary to encode relationships in a family\n     * \n     * index1 represents \"source relation\" and index2 \"target relation\"\n     * It is not complete, hence relationToYou(source, target) should be used to find a relation*/\n\n  }], [{\n    key: \"getRelationships\",\n    value: function getRelationships() {\n      // handling family relationships\n      var relationships = {\n        \"grandmother\": {\n          \"partner\": \"grandfather\",\n          \"daughter\": \"aunt\",\n          \"son\": \"uncle\"\n        },\n        \"mother\": {\n          \"father\": \"grandfather\",\n          \"mother\": \"grandmother\",\n          \"partner\": \"father\",\n          \"daughter\": \"sister\",\n          \"son\": \"brother\"\n        },\n        \"motherinlaw\": {\n          \"partner\": \"fatherinlaw\",\n          \"daughter\": \"sisterinlaw\",\n          \"son\": \"brotherinlaw\"\n        },\n        \"aunt\": {\n          \"partner\": \"uncleinlaw\",\n          \"daughter\": \"cousinf\",\n          \"son\": \"cousinm\"\n        },\n        \"auntinlaw\": {\n          \"partner\": \"uncle\",\n          \"daughter\": \"cousinf\",\n          \"son\": \"cousinm\"\n        },\n        \"you\": {\n          \"father\": \"father\",\n          \"mother\": \"mother\",\n          \"partner\": \"partner\",\n          \"daughter\": \"daughter\",\n          \"son\": \"son\"\n        },\n        \"partner\": {\n          \"father\": \"fatherinlaw\",\n          \"mother\": \"motherinlaw\",\n          \"partner\": \"you\",\n          \"daughter\": \"daughter\",\n          \"son\": \"son\"\n        },\n        \"sister\": {\n          \"father\": \"father\",\n          \"mother\": \"mother\",\n          \"partner\": \"brotherinlaw\",\n          \"daughter\": \"niece\",\n          \"son\": \"nephew\"\n        },\n        \"sisterinlaw\": {\n          \"daughter\": \"niece\",\n          \"son\": \"nephew\"\n        },\n        \"daughter\": {\n          \"father\": \"partner\",\n          \"mother\": \"partner\",\n          \"partner\": \"soninlaw\",\n          \"daughter\": \"granddaughter\",\n          \"son\": \"grandson\"\n        },\n        \"daughterinlaw\": {\n          \"partner\": \"son\",\n          \"daughter\": \"granddaughter\",\n          \"son\": \"grandson\"\n        },\n        \"granddaughter\": {\n          \"father\": \"soninlaw\",\n          \"mother\": \"daughterinlaw\"\n        }\n        //translating for males\n      };var relationshipsEquiv = [[\"grandfather\", \"grandmother\", \"grandmother\"], [\"father\", \"mother\", \"mother\"], [\"fatherinlaw\", \"motherinlaw\", \"motherinlaw\"], [\"uncle\", \"aunt\", \"auntinlaw\"], [\"uncleinlaw\", \"auntinlaw\", \"aunt\"], [\"brother\", \"sister\", \"sisterinlaw\"], [\"brotherinlaw\", \"sisterinlaw\", \"woman\"], [\"son\", \"daughter\", \"daughterinlaw\"], [\"soninlaw\", \"daughterinlaw\", \"daughter\"], [\"grandson\", \"granddaughter\", \"woman\"]];\n      relationshipsEquiv.forEach(function (tuple) {\n        relationships[tuple[0]] = JSON.parse((0, _stringify2.default)(relationships[tuple[1]]));\n        relationships[tuple[0]][\"partner\"] = tuple[2];\n      });\n      return relationships;\n    }\n  }, {\n    key: \"getEmptyFamilyTree\",\n    value: function getEmptyFamilyTree() {\n      var emptyFamilyTree = {\n        \"class\": \"FamilyTreeLayout\",\n        \"nodes\": [{\n          \"id\": \"@I1@\",\n          \"sex\": \"F\",\n          \"tag\": \"INDI\",\n          \"fams\": [],\n          \"famc\": null,\n          \"chil\": [],\n          \"wife\": null,\n          \"husb\": null,\n          \"sequencedDNA\": false,\n          \"i18nName\": \"you\"\n        }],\n        \"properties\": [\"id\", \"name\", \"sex\", \"tag\", \"fams\", \"famc\", \"chil\", \"wife\", \"husb\", \"sequencedDNA\", \"lastSequencedDNA\", \"i18nName\"],\n        \"centerNodeId\": 0\n      };\n      return _FamilyTreeLayout.FamilyTreeLayout.unserialize((0, _stringify2.default)(emptyFamilyTree));\n    }\n\n    /** getSex() returns \"F\" if given relation is female, \"M\" if male */\n\n  }, {\n    key: \"getSex\",\n    value: function getSex(relation) {\n      var partnerRelation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n      var males = [\"man\", \"grandfather\", \"father\", \"fatherinlaw\", \"uncle\", \"uncleinlaw\", \"brother\", \"brotherinlaw\", \"cousinm\", \"son\", \"soninlaw\", \"nephew\", \"grandson\"];\n      var females = [\"woman\", \"grandmother\", \"mother\", \"motherinlaw\", \"aunt\", \"auntinlaw\", \"sister\", \"sisterinlaw\", \"cousinf\", \"daughter\", \"daughterinlaw\", \"niece\", \"granddaughter\"];\n      if (males.findIndex(function (r) {\n        return r == relation;\n      }) != -1) {\n        return \"M\";\n      }\n      if (females.findIndex(function (r) {\n        return r == relation;\n      }) != -1) {\n        return \"F\";\n      }\n      if (males.findIndex(function (r) {\n        return r == partnerRelation;\n      }) != -1) {\n        return \"F\";\n      }\n      if (females.findIndex(function (r) {\n        return r == partnerRelation;\n      }) != -1) {\n        return \"M\";\n      }\n\n      return undefined;\n    }\n  }]);\n  return KinGenomicPrivacyMeter;\n}();\n\n//# sourceURL=webpack:///./app/src/js/KinGenomicPrivacyMeter.js?");

/***/ }),

/***/ "./app/src/js/NodeButtonsGroup.js":
/*!****************************************!*\
  !*** ./app/src/js/NodeButtonsGroup.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.NodeButtonsGroup = exports.youTargetNodeButtons = exports.youNodeButtons = exports.targetNodeButtons = exports.standardNodeButtons = undefined;\n\nvar _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ \"./node_modules/babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar standardNodeButtons = exports.standardNodeButtons = [\"add-relative\", \"remove-node\", \"toggle-dna\", \"set-as-target\"];\nvar targetNodeButtons = exports.targetNodeButtons = [\"add-relative\"];\nvar youNodeButtons = exports.youNodeButtons = [\"add-relative\", \"change-sex\", \"toggle-dna\", \"set-as-target\"];\nvar youTargetNodeButtons = exports.youTargetNodeButtons = [\"add-relative\", \"change-sex\"];\n\n/**\n * Singleton class to handle buttons for a given node\n *\n */\n\nvar NodeButtonsGroup = exports.NodeButtonsGroup = function () {\n  /**\n   *\n   * @param {d3-selection} motherGroup a d3-selection containing the <g> group where the tree will be drawn (=familyTreeArtist.svgg)\n   * @param {string} DOMid an id for the node buttons'<g> mother tag\n   */\n  function NodeButtonsGroup(motherGroup, indiNodeSizeWidth) {\n    var DOMid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"nodeg-action-buttons\";\n    (0, _classCallCheck3.default)(this, NodeButtonsGroup);\n\n    this.DOMid = DOMid;\n    this.currentNode = undefined;\n    this.buttons = {};\n    this.onWakeCallbacks = [];\n    this.onHideCallbacks = [];\n\n    // ensure there is only 1 NodeButtonsGroup on svg\n    d3.select(\"#\" + this.DOMid).remove();\n    this.g = motherGroup.append(\"g\").attr(\"id\", this.DOMid);\n\n    // add a circle hitbox as trigger for nodeButtons mouseleave\n    this.g.append(\"circle\").attr(\"r\", indiNodeSizeWidth / 2 + 10) //kgp.indiNodeSize.width/2+10)\n    .attr(\"fill\", \"none\").attr(\"stroke-width\", \"20px\").attr(\"stroke\", \"white\").attr(\"stroke-opacity\", 0);\n  }\n\n  /**\n   * Wake the node buttons for a given node\n   *\n   * @param {Object} node a node of the family tree with a \"buttons\" property.\n   */\n\n\n  (0, _createClass3.default)(NodeButtonsGroup, [{\n    key: \"wake\",\n    value: function wake(node) {\n      this.hide();\n      this.currentNode = node;\n      this.g.attr(\"transform\", \"translate(\" + node.x + \",\" + node.y + \")\").attr(\"visibility\", \"visible\").datum(node);\n      this.g.node().parentNode.appendChild(this.g.node());\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = (0, _getIterator3.default)(node.buttons), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var btn = _step.value;\n\n          this.buttons[btn].attr(\"visibility\", \"visible\").datum(node);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      this.onWakeCallbacks.forEach(function (cb) {\n        return cb(node);\n      });\n    }\n\n    /**\n     * Hide the node buttons\n     */\n\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.g.attr(\"visibility\", \"hidden\");\n      for (var btn in this.buttons) {\n        this.buttons[btn].attr(\"visibility\", \"hidden\");\n      }\n      var node = this.currentNode;\n      this.onHideCallbacks.forEach(function (cb) {\n        return cb(node);\n      });\n    }\n\n    /**\n     * Creates the button svg, including circle, Font-Awesome logo and tooltip\n     *\n     * @param {string} buttonName the unique reference name for that button\n     * @param {int} x the button x position, relative to node center\n     * @param {int} y the button y position, relative to node center\n     * @param {string} FAunicode the button's Font-Awesome logo unicode code\n     * @param {int} options.FAx FAunicode's x position, relative to button position, defaults to -13\n     * @param {int} options.FAy FAunicode's y position, relative to button position, defaults to 6\n     * @param {int} options.tooltipx tooltip's x position, relative to button position, defaults to 24\n     * @param {int} options.tooltipy tooltip's y position, relative to button position, defaults to -22\n     * @param {int} tooltipWidth tooltip svg <text> tag width\n     * @param {int} tooltipHeight  tooltip svg <text> tag height (most often 45)\n     * @param {string} i18nKey the i18n key of the text for the tooltip\n     */\n\n  }, {\n    key: \"addButton\",\n    value: function addButton(buttonName, x, y, FAunicode, tooltipWidth, tooltipHeight, i18n, i18nKey) {\n      var options = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {};\n\n      var defaultSettings = {\n        FAx: -13, FAy: 6, tooltipx: 24, tooltipy: -22\n      };\n\n      var button = this.g.append(\"g\").attr(\"transform\", \"translate(\" + x + \",\" + y + \")\").attr(\"style\", \"cursor:pointer;\").classed(\"button-with-tooltip\", true);\n      button.append(\"circle\").attr(\"r\", 20).classed(\"node-button-circle\", true);\n      button.append(\"text\").attr(\"class\", \"fas node-button-fas\").attr(\"x\", options.FAx ? options.FAx : defaultSettings.FAx).attr(\"y\", options.FAy ? options.FAy : defaultSettings.FAy).text(FAunicode);\n      button.append(\"foreignObject\").attr(\"x\", options.tooltipx ? options.tooltipx : defaultSettings.tooltipx).attr(\"y\", options.tooltipy ? options.tooltipy : defaultSettings.tooltipy).attr(\"width\", tooltipWidth).attr(\"height\", tooltipHeight).classed(\"tooltip\", true).append(\"xhtml:div\").append(\"span\").classed(\"tooltip-text\", true).attr(i18n.keyAttr, i18nKey);\n\n      this.buttons[buttonName] = button;\n      return button;\n    }\n  }]);\n  return NodeButtonsGroup;\n}();\n\n//# sourceURL=webpack:///./app/src/js/NodeButtonsGroup.js?");

/***/ }),

/***/ "./app/src/js/TrashButton.js":
/*!***********************************!*\
  !*** ./app/src/js/TrashButton.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.TrashButton = undefined;\n\nvar _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ \"./node_modules/babel-runtime/core-js/object/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TrashButton = exports.TrashButton = function () {\n  function TrashButton(domId, kgp) {\n    var listeners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    (0, _classCallCheck3.default)(this, TrashButton);\n\n    this.domId = domId;\n    this.kgp = kgp;\n    this.listeners = listeners;\n    this.init();\n  }\n\n  (0, _createClass3.default)(TrashButton, [{\n    key: \"init\",\n    value: function init() {\n      d3.select(\"#\" + this.domId).remove();\n      // trash button\n      this.trashButton = this.kgp.addSvgButton(\"\\uF2ED\", this.domId, \"hint-trash\", 1, 27);\n      var self = this;\n      (0, _keys2.default)(this.listeners).forEach(function (k) {\n        return self.trashButton.on(k, self.listeners[k]);\n      });\n    }\n  }, {\n    key: \"on\",\n    value: function on(event, listener) {\n      this.listeners[event] = listener;\n      this.trashButton.on(event, listener);\n    }\n  }]);\n  return TrashButton;\n}();\n\n// 9.12.2019: untested and unused\n\n\nvar TrashButtonWithConfirmation = function () {\n  /**\n   * Creates the trash button\n   */\n  function TrashButtonWithConfirmation(domId, kgp) {\n    var _this = this;\n\n    var confirmListeners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n    (0, _classCallCheck3.default)(this, TrashButtonWithConfirmation);\n\n    this.domId = domId;\n    this.kgp = kgp;\n    this.listeners = confirmListeners;\n    d3.select(\"#\" + domId).remove();\n    // trash button\n    var self = this;\n    var trashButton = this.kgp.addSvgButton(\"\\uF2ED\", domId, \"hint-trash\", 0);\n    trashButton.on(\"click.confirm\", function (d) {\n      trashButton.select(\".tooltip\").remove();\n      var confirmDiv = trashButton.append(\"foreignObject\").attr(\"x\", 0).attr(\"y\", 25).attr(\"width\", 250).attr(\"height\", 80).classed(\"tooltip\", true).append(\"xhtml:div\").classed(\"tooltip-text\", true).html(\"<span style='display:block;' \" + self.kgp.i18n.keyAttr + \"='trash-sure'></span>\");\n      // cancel button\n      confirmDiv.append(\"button\").classed(\"btn btn-large btn-primary\", true).attr(\"style\", \"float:center;margin:2px;\").html('<span ' + self.kgp.i18n.keyAttr + '=\"trash-cancel\"></span> <i class=\"fas fa-times\"></i>').on(\"click.cancel\", function (d) {\n        new TrashButtonWithConfirmation(self.domId, self.kgp, self.listeners);\n      });\n      // confirm button\n      _this.trashButton = confirmDiv.append(\"button\").classed(\"btn btn-large btn-danger\", true).attr(\"style\", \"float:center;margin:2px;\").html('<span ' + self.kgp.i18n.keyAttr + '=\"trash-confirm\"></span> <i class=\"far fa-trash-alt\"></i>').on(\"click.listeners\", function (d) {\n        self.listeners.forEach(function (f) {\n          return f(d);\n        });\n        new TrashButtonWithConfirmation(self.domId, self.kgp, self.listeners);\n      });\n      // weird: manual rfresh needed...\n      self.i18n.refresh();\n    });\n  }\n\n  (0, _createClass3.default)(TrashButtonWithConfirmation, [{\n    key: \"on\",\n    value: function on(event, listener) {\n      this.trashButton.on(event, listener);\n    }\n  }]);\n  return TrashButtonWithConfirmation;\n}();\n\n//# sourceURL=webpack:///./app/src/js/TrashButton.js?");

/***/ }),

/***/ "./app/src/js/lib/cookies.js":
/*!***********************************!*\
  !*** ./app/src/js/lib/cookies.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction createCookie(name, value, days) {\n  var expires;\n\n  if (days) {\n    var date = new Date();\n    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);\n    expires = \"; expires=\" + date.toGMTString();\n  } else {\n    expires = \"\";\n  }\n  document.cookie = encodeURIComponent(name) + \"=\" + encodeURIComponent(value) + expires + \"; path=/\";\n}\n\nfunction readCookie(name) {\n  var nameEQ = encodeURIComponent(name) + \"=\";\n  var ca = document.cookie.split(';');\n  for (var i = 0; i < ca.length; i++) {\n    var c = ca[i];\n    while (c.charAt(0) === ' ') {\n      c = c.substring(1, c.length);\n    }if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));\n  }\n  return null;\n}\n\nfunction eraseCookie(name) {\n  document.cookie = encodeURIComponent(name) + \"=;expires=\" + new Date().toGMTString() + \"; path=/\";\n}\n\nfunction tryOrNull(func) {\n  return function (a, b, c) {\n    try {\n      return func(a, b, c);\n    } catch (e) {\n      console.error(\"Unable to access cookies\");\n      return null;\n    }\n  };\n}\n\nvar cookie = exports.cookie = {\n  create: createCookie,\n  read: readCookie,\n  erase: eraseCookie,\n  tryCreate: tryOrNull(createCookie),\n  tryRead: tryOrNull(readCookie),\n  tryErase: tryOrNull(eraseCookie)\n};\n\n//# sourceURL=webpack:///./app/src/js/lib/cookies.js?");

/***/ }),

/***/ "./app/src/js/utils.js":
/*!*****************************!*\
  !*** ./app/src/js/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.detectIE11 = detectIE11;\nexports.detectMobile = detectMobile;\nexports.onWindowResize = onWindowResize;\nfunction detectIE11() {\n  if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1) {\n    return true;\n  }\n  return false;\n}\n\nfunction detectMobile() {\n  if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {\n    return true;\n  }\n  return false;\n}\n\n/** adds a 100ms without resize to window.onresize() before executing func (to avoid redraws every msec) */\nfunction onWindowResize(func) {\n  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n\n  var doit = void 0;\n  window.onresize = function () {\n    clearTimeout(doit);\n    doit = setTimeout(func, timeout);\n  };\n}\n\n//# sourceURL=webpack:///./app/src/js/utils.js?");

/***/ }),

/***/ "./lib/src/js/kgpmeter.js":
/*!********************************!*\
  !*** ./lib/src/js/kgpmeter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _KgpIframeInterface = __webpack_require__(/*! ../../../app/src/js/KgpIframeInterface.js */ \"./app/src/js/KgpIframeInterface.js\");\n\nvar _KinGenomicPrivacyMeter = __webpack_require__(/*! ../../../app/src/js/KinGenomicPrivacyMeter.js */ \"./app/src/js/KinGenomicPrivacyMeter.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar KgpMeter = function () {\n  function KgpMeter(divId, apiUrl, lng, maxHeight) {\n    (0, _classCallCheck3.default)(this, KgpMeter);\n\n    var self = this;\n    this.divId = divId;\n    this.div = document.getElementById(divId);\n\n    this.apiUrl = apiUrl;\n    if (!this.apiUrl) {\n      throw \"KgpMeter error: API url missing. API url provided: \" + apiUrl;\n    }\n    var urlSeparator = this.apiUrl.endsWith(\"/\") ? \"\" : \"/\";\n    this.lng = lng ? lng : \"en\"; // default\n    this.maxHeight = maxHeight ? maxHeight : 2000; // default\n    this.height = 0;\n\n    this.div.innerHTML = \"<iframe src='{src}app/'></iframe>\".replace(\"{src}\", this.apiUrl + urlSeparator);\n    this.iframe = this.div.getElementsByTagName(\"iframe\")[0];\n    this.iframe.setAttribute(\"style\", 'border:none; width:100%; height:100%');\n    this.setDivStyle(this.div.scrollHeight + \"px\");\n\n    // ======== send data to iframe ========\n\n    this.iframe.onload = function () {\n      setTimeout(function () {\n        // set language\n        self.setLanguage(self.lng);\n        // set source\n        self.setSource(document.URL);\n        // set max height\n        self.setMaxheight(self.maxHeight);\n      }, 50);\n    };\n\n    // ======== handle height updates ========\n    function dispatchKgpIframeMessage(e) {\n      if (e.data.type && e.data.type == \"KgpSetHeightEvent\") {\n        self.setHeight(e.data.height, e.data.transitionDuration);\n      }\n      if (e.data.type) {\n        switch (e.data.type) {\n          case \"KgpSetHeightEvent\":\n            self.setHeight(e.data.height, e.data.transitionDuration);\n            break;\n          default:\n            console.log(\"kgpmeter.js: unknown type of message received from KGPMeter iFrame:\", e);\n        }\n      }\n    }\n    window.addEventListener('message', dispatchKgpIframeMessage, false);\n  }\n\n  (0, _createClass3.default)(KgpMeter, [{\n    key: \"setLanguage\",\n    value: function setLanguage(lng) {\n      this.lng = lng;\n      var setLanguageEvent = (0, _KgpIframeInterface.kgpSetLanguageEvent)(lng);\n      this.iframe.contentWindow.postMessage(setLanguageEvent, this.apiUrl);\n    }\n  }, {\n    key: \"setSource\",\n    value: function setSource(source) {\n      var setSourceEvent = (0, _KgpIframeInterface.kgpSetSourceEvent)(source);\n      this.iframe.contentWindow.postMessage(setSourceEvent, this.apiUrl);\n    }\n  }, {\n    key: \"setMaxheight\",\n    value: function setMaxheight(maxHeight) {\n      this.maxHeight = maxHeight;\n      var setIframeMaxDimensionEvent = (0, _KgpIframeInterface.kgpSetIframeMaxDimensionEvent)(maxHeight);\n      this.iframe.contentWindow.postMessage(setIframeMaxDimensionEvent, this.apiUrl);\n    }\n  }, {\n    key: \"launchTutorial\",\n    value: function launchTutorial() {\n      this.iframe.contentWindow.postMessage((0, _KgpIframeInterface.kgpLaunchTutorialEvent)(), this.apiUrl);\n    }\n  }, {\n    key: \"setHeight\",\n    value: function setHeight(height, transitionDuration) {\n      transitionDuration = transitionDuration * (height > this.height ? 0.9 : 2) / 1000;\n      this.setDivStyle(this.height + \"px\", height + \"px\", transitionDuration);\n      this.height = height;\n    }\n  }, {\n    key: \"setDivStyle\",\n    value: function setDivStyle(oldHeightstr, heightStr, transitionDuration) {\n      var divStyle = 'border:none; width:100%; height: ' + oldHeightstr + '; transition-property: height; transition-duration: ' + transitionDuration + 's; transition-timing-function: ease;';\n      this.div.setAttribute(\"style\", divStyle);\n      divStyle = 'border:none; width:100%; height: ' + heightStr + '; transition-property: height; transition-duration: ' + transitionDuration + 's; transition-timing-function: ease;';\n      this.div.setAttribute(\"style\", divStyle);\n    }\n  }]);\n  return KgpMeter;\n}();\n// export KgpMeter to global namespace\n\n\nwindow.KgpMeter = KgpMeter;\n\n// create default kgpmeter if div#kin-genomic-privacy-meter exists\nvar defaultKgpmeterDivId = \"kin-genomic-privacy-meter\";\nvar div = document.getElementById(defaultKgpmeterDivId);\nvar kgpmeter = void 0;\nif (div) {\n  var apiUrl = div.getAttribute(\"data-kgpmeter-api-url\");\n  apiUrl = apiUrl ? apiUrl : \"https://santeperso.unil.ch/api-dev/\";\n  var lng = div.getAttribute(\"data-kgpmeter-lng\");\n  var maxHeight = div.getAttribute(\"data-kgpmeter-max-height\");\n  kgpmeter = new KgpMeter(defaultKgpmeterDivId, apiUrl, lng, maxHeight);\n  window.kgpmeter = kgpmeter;\n}\n\n//# sourceURL=webpack:///./lib/src/js/kgpmeter.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/array/from */ \"./node_modules/core-js/library/fn/array/from.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/array/from.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/get-iterator */ \"./node_modules/core-js/library/fn/get-iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/json/stringify */ \"./node_modules/core-js/library/fn/json/stringify.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/json/stringify.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/assign */ \"./node_modules/core-js/library/fn/object/assign.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/assign.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/create */ \"./node_modules/core-js/library/fn/object/create.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ \"./node_modules/core-js/library/fn/object/get-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/keys */ \"./node_modules/core-js/library/fn/object/keys.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/keys.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"./node_modules/core-js/library/fn/object/set-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/promise */ \"./node_modules/core-js/library/fn/promise.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/promise.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/set.js":
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/set.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/set */ \"./node_modules/core-js/library/fn/set.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/set.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol */ \"./node_modules/core-js/library/fn/symbol/index.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"./node_modules/core-js/library/fn/symbol/iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _promise = __webpack_require__(/*! ../core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (fn) {\n  return function () {\n    var gen = fn.apply(this, arguments);\n    return new _promise2.default(function (resolve, reject) {\n      function step(key, arg) {\n        try {\n          var info = gen[key](arg);\n          var value = info.value;\n        } catch (error) {\n          reject(error);\n          return;\n        }\n\n        if (info.done) {\n          resolve(value);\n        } else {\n          return _promise2.default.resolve(value).then(function (value) {\n            step(\"next\", value);\n          }, function (err) {\n            step(\"throw\", err);\n          });\n        }\n      }\n\n      return step(\"next\");\n    });\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/babel-runtime/core-js/object/set-prototype-of.js\");\n\nvar _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);\n\nvar _create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/babel-runtime/core-js/object/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(superClass)));\n  }\n\n  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && ((typeof call === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(call)) === \"object\" || typeof call === \"function\") ? call : self;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _from = __webpack_require__(/*! ../core-js/array/from */ \"./node_modules/babel-runtime/core-js/array/from.js\");\n\nvar _from2 = _interopRequireDefault(_from);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  } else {\n    return (0, _from2.default)(arr);\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/babel-runtime/core-js/symbol/iterator.js\");\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/babel-runtime/core-js/symbol.js\");\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nvar _typeof = typeof _symbol2.default === \"function\" && typeof _iterator2.default === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = typeof _symbol2.default === \"function\" && _typeof(_iterator2.default) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() { return this })() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(/*! ./runtime */ \"./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js\");\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js":
/*!********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() { return this })() || Function(\"return this\")()\n);\n\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js\");\n\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/es6.array.from */ \"./node_modules/core-js/library/modules/es6.array.from.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Array.from;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.get-iterator */ \"./node_modules/core-js/library/modules/core.get-iterator.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });\nmodule.exports = function stringify(it) { // eslint-disable-line no-unused-vars\n  return $JSON.stringify.apply($JSON, arguments);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.assign */ \"./node_modules/core-js/library/modules/es6.object.assign.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.create */ \"./node_modules/core-js/library/modules/es6.object.create.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.get-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.getPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.keys */ \"./node_modules/core-js/library/modules/es6.object.keys.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.keys;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"./node_modules/core-js/library/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es7.promise.finally */ \"./node_modules/core-js/library/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ../modules/es7.promise.try */ \"./node_modules/core-js/library/modules/es7.promise.try.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Promise;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/promise.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.set */ \"./node_modules/core-js/library/modules/es6.set.js\");\n__webpack_require__(/*! ../modules/es7.set.to-json */ \"./node_modules/core-js/library/modules/es7.set.to-json.js\");\n__webpack_require__(/*! ../modules/es7.set.of */ \"./node_modules/core-js/library/modules/es7.set.of.js\");\n__webpack_require__(/*! ../modules/es7.set.from */ \"./node_modules/core-js/library/modules/es7.set.from.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Set;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/set.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.symbol */ \"./node_modules/core-js/library/modules/es6.symbol.js\");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ \"./node_modules/core-js/library/modules/es7.symbol.observable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\").f('iterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-from-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/library/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/core-js/library/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/library/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/library/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/library/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/library/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/core-js/library/modules/_array-from-iterable.js\");\nmodule.exports = function (NAME) {\n  return function toJSON() {\n    if (classof(this) != NAME) throw TypeError(NAME + \"#toJSON isn't generic\");\n    return from(this);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_collection-to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/library/modules/_redefine-all.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/library/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/library/modules/_array-methods.js\")(0);\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    C = wrapper(function (target, iterable) {\n      anInstance(target, C, NAME, '_c');\n      target._c = new Base();\n      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);\n    });\n    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {\n      var IS_ADDER = KEY == 'add' || KEY == 'set';\n      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {\n        anInstance(this, C, KEY);\n        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;\n        var result = this._c[KEY](a === 0 ? 0 : a, b);\n        return IS_ADDER ? this : result;\n      });\n    });\n    IS_WEAK || dP(C.prototype, 'size', {\n      get: function () {\n        return this._c.size;\n      }\n    });\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F, O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/library/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/library/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {\n    var mapFn = arguments[1];\n    var mapping, A, n, cb;\n    aFunction(this);\n    mapping = mapFn !== undefined;\n    if (mapping) aFunction(mapFn);\n    if (source == undefined) return new this();\n    A = [];\n    if (mapping) {\n      n = 0;\n      cb = ctx(mapFn, arguments[2], 2);\n      forOf(source, false, function (nextItem) {\n        A.push(cb(nextItem, n++));\n      });\n    } else {\n      forOf(source, false, A.push, A);\n    }\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-collection-from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { of: function of() {\n    var length = arguments.length;\n    var A = new Array(length);\n    while (length--) A[length] = arguments[length];\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-collection-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/library/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar get = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIterator = function (it) {\n  var iterFn = get(it);\n  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');\n  return anObject(iterFn.call(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/core.get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/library/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/library/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/library/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/library/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/library/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/library/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/library/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/library/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/library/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/library/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/library/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/library/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/library/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/library/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/library/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/library/modules/_collection.js\")(SET, function (get) {\n  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.set.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/library/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/library/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\");\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });\n\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/library/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/library/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/library/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.promise.try.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/library/modules/_set-collection-from.js\")('Set');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.set.from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/library/modules/_set-collection-of.js\")('Set');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.set.of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/core-js/library/modules/_collection-to-json.js\")('Set') });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.set.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ })

/******/ });