from flask import request, render_template

from webdir import app
import logging


@app.route("/", methods=['POST', 'GET'])
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.debug = True
    app.run()