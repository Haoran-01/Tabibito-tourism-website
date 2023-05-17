from webdir import app
from flask import render_template, send_from_directory


@app.route("/", methods=['POST', 'GET'])
def index():
    return render_template('index.html')


@app.route('/pictures/<path:filename>')
def get_picture(filename):
    return send_from_directory(app.static_folder, filename, as_attachment=True)


if __name__ == '__main__':
    app.debug = True
    app.run()
