from flask import request, render_template, Response

from webdir import app
import logging

if __name__ == '__main__':
    app.debug = True
    app.run()