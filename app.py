from flask import request, render_template

from webdir import app
import logging


@app.route("/", methods=['POST', 'GET'])
def index(name=None):
    out_html = render_template('index.html', name=name)
    return out_html, "200 Ok", {"Content-type": "text/html"}


if __name__ == '__main__':
    app.debug = True
    app.run()