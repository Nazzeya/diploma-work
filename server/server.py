from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/get_water_type_names')
def get_water_type_names():
    response = jsonify({
        'water_types': util.get_water_types()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/predict-cold', methods=['POST'])
def predict_cold():
    month = float(request.form['month'])
    holiday = float(request.form['Holiday'])
    dayofweek = float(request.form['dayofweek'])

    response = jsonify({
        'consumption': util.water_cold_prediction(month, holiday, dayofweek)
    })

    return response


@app.route('/predict-hot', methods=['POST'])
def predict_hot():
    month = float(request.form['month'])
    holiday = bool(request.form['Holiday'])
    dayofweek = float(request.form['dayofweek'])

    response = jsonify({
        'consumption': util.water_hot_prediction(month, holiday, dayofweek)
    })

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Water Consumption Prediction...")
    app.run()