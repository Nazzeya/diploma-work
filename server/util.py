import json
import pickle


__water_types = None
__data_columns = None
__model_cold = None
__model_hot = None

def water_cold_prediction(month, holiday, dayofweek):
    return __model_cold.predict([[month, holiday, dayofweek]])


def water_hot_prediction(month, holiday, dayofweek):
    return __model_hot.predict([[month, holiday, dayofweek]])


def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns
    global __water_types

    with open("server/artifacts/columns.json", 'r') as f:
        __data_columns = json.load(f)["data_columns"]
        __water_types = __data_columns[0:]

    global __model_cold
    global __model_hot

    with open("server/artifacts/water_cold.pickle", 'rb') as f:
        __model_cold = pickle.load(f)

    with open("server/artifacts/water_hot.pickle", 'rb') as f:
        __model_hot = pickle.load(f)
    print("loading saved artifacts...done")


def get_water_types():
    return __water_types

if __name__ == '__main__':
    load_saved_artifacts()
    print(get_water_types())