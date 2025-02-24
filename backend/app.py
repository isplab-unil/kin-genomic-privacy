# -*- coding: utf-8 -*-
__author__ = "Didier Dupertuis, Benjamin Trubert, Kévin Huguenin"
__copyright__ = "Copyright 2019, The Information Security and Privacy Lab at the University of Lausanne (https://www.unil.ch/isplab/)"
__credits__ = ["Didier Dupertuis", "Benjamin Trubert", "Kévin Huguenin", "Mathias Humbert"]

__version__ = "1"
__license__ = "MIT"
__maintainer__ = "Didier Dupertuis"
__email__ = "didier.dupertuis@unil.ch"

__project__ = "Data-less Kin Genomic Privacy Estimator"

import argparse
import logging
import os
import re
import sys
import warnings

from flask import Flask, redirect, request, send_from_directory
from flask_mime import Mime

from api import privacy_score

WSGI_PROJECT_DIR = os.path.dirname(os.path.realpath(__file__))
sys.path.insert(0, WSGI_PROJECT_DIR)

application = Flask(__name__)
mimetype = Mime(application)

CONFIG_FILE = os.path.join(WSGI_PROJECT_DIR, "config.py")
DEFAULT_CONFIG_FILE = os.path.join(WSGI_PROJECT_DIR, "config_default.py")
if os.path.isfile(CONFIG_FILE) or not os.path.isfile(DEFAULT_CONFIG_FILE):
    application.config.from_object("config.Config")
else:
    warnings.warn("No configuration file (config.py) found, loading default configuration file instead...")
    application.config.from_object("config_default.Config")

# Test entry point: Redirects to API documentation.
@application.route('/')
def root():
    # TODO: 302 code to static doc page
    return 'Hello World! This is the url to use as API url in your frontend ;-)'


# Allow to update cache on server 
if application.config.get("ENGINE_ENABLE_JS_CACHE_SAVE_ENDPOINT"):
  import json
  @application.route('/save-cache', methods=["POST"])
  def save_cache():
      # TODO: 302 code to static doc page
      cache_json = request.get_json(force=True)
      with open(os.path.join(WSGI_PROJECT_DIR, "../frontend/app/jscache/cache.json"), "w") as outf:
        json.dump(cache_json, outf, indent=1)
      return "Cache saved!"


# Privacy score entry point: Computes privacy score from JSON request
application.route('/privacy-score', methods=["POST"])(privacy_score)

@mimetype('application/javascript')
# serve kgpmeter.js lib file
@application.route('/kgpmeter.js')
@application.route('/lib/js/kgpmeter.js')
def kgpmeter():
  path = os.path.join(WSGI_PROJECT_DIR, "../frontend/lib/js/kgpmeter.js")
  with open(path, "r", encoding="utf-8") as f:
    lines = [s for s in f.readlines()]
    res = "".join(lines)
    return res
  
# serve iframe website
@application.route('/app/', defaults={'path': ""})
@application.route('/app/<path:path>')
def serve_iframe_app(path):
    # TODO TOO MUCH OF A HACK
    if not re.search("\\.", path):
        # add trailing slash if missing
        if len(path) > 0 and not path.endswith("/"):
            return redirect(request.path + "/", code=301)
        # ...as well as index.html reference
        path = path + "index.html"
    return send_from_directory("../frontend/app/", path)

def serve_static_files(appli, serve_static_files_from, static_files_folder):
  @appli.route('/%s/' % serve_static_files_from, defaults={'path': ""})
  @appli.route('/%s/<path:path>' % serve_static_files_from)
  def serve_static_debug_website(path):
    # TODO TOO MUCH OF A HACK
    if not re.search("\\.", path):
      # add trailing slash if missing
      if len(path) > 0 and not path.endswith("/"):
          return redirect(request.path + "/", code=301)
      # ...as well as index.html reference
      path = path + "index.html"
    return send_from_directory(static_files_folder, path)

# only for local testing:
if application.config["TESTING"] and application.config["SERVE_STATIC_FILES_FROM"] and application.config["STATIC_FILES_FOLDER"]:
    serve_static_files(application, application.config["SERVE_STATIC_FILES_FROM"], application.config["STATIC_FILES_FOLDER"])


# if file is main and -r option: run the Flask application
if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Run the website in testing/debugging mode, DO NOT USE IN PRODUCTION")
    parser.add_argument('-r', '--run', help='Whether to run the flask app', action='store_true')
    parser.add_argument('-p', '--port', help='Port the app should be run from', type=int, default=5000)
    args = parser.parse_args()

    if args.run:
        application.config["LOGGER"].warning("Running app in testing/debugging mode, DO NOT USE IN PRODUCTION")

        application.run(debug=True, port=args.port)