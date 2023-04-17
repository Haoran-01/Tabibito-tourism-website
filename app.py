from flask import request, render_template, Response

from webdir import app
import logging


@app.route("/", methods=['POST', 'GET'])
def index(name=None):
    if request.method == 'GET':
        response = Response()
        out_html = render_template('index.html', name=name)
        response.data = out_html
        response.headers = {"Content - type": "text / html"}
        return response

if __name__ == '__main__':
    app.debug = True
    app.run()