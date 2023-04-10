from webdir import app
import logging

if __name__ == '__main__':
    app.debug = True
    app.run()