from flask import Flask, jsonify
from flask_cors import CORS
from Sample_Data import get_sample

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# /api/get-sample endpoint.
# requests to this enpoint will get this data back, just like calling a function!
@app.route('/api/get-sample', methods=['GET'])
def get_prediction():
    message = 'hello-world'
    sample = get_sample(message)
    return jsonify({
        'message': message,
        'sample': sample,
        'debug': True,
        'hidden-num': 512
    })

if __name__ == '__main__':
    app.run(debug=True)
