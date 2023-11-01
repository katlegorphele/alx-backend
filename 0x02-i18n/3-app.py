#!/usr/bin/env python3
'''
Basic Flask app
'''

from flask import Flask, render_template, request
from flask_babel import Babel
from config import Config

app: Flask = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)

@babel.localeselector
def get_locale() -> str:
    '''
    Determine the best match with our supported languages.
    '''

    return request.accept_languages.best_match(app.config['LANGUAGES'])

@app.route('/', methods=['GET'], strict_slashes=False)
def index() -> str:
    '''
    Basic route
    '''

    return render_template('3-index.html')