from flask_wtf.csrf import generate_csrf

from webdir import app
from flask import render_template
import logging

@app.route("/", methods=['POST', 'GET'])
def index():
    return render_template('index.html', csrf_token = generate_csrf())

if __name__ == '__main__':
    app.debug = True
    app.run()