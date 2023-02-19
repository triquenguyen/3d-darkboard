from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Hello World'

if __name__ == '__main__':
    app.run(host="10.19.187.57", port=3000)

