#!/usr/bin/env python3
'''
Basic flask app
'''

from flask import Flask, render_template


app: Flask = Flask(__name__)

@app.route('/', methods=['GET'], strict_slashes=False)
def index() -> str:
    '''
    Basic route
    '''

    return render_template('0-index.html')

if __name__ == "__main__":
    app.run(host="localhost", port=5000)

