import os

from flask import render_template
from webdir import app


@app.route('/')
def index():
    return render_template('index.html')
