from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def add_numbers(data):
  first = data.get('first')
  second = data.get('second')
  try: 
    first = 0 if first == '' else int(first)
    second = 0 if second == '' else int(second)
  except ValueError:
    return jsonify({'result': 'Invalid', 'error': "A number has to be provided"}), 400
  result = first + second
  return jsonify({'result': str(result)}), 200

def subtract_numbers(data):
  first = data.get('first')
  second = data.get('second')
  try: 
    first = 0 if first == '' else int(first)
    second = 0 if second == '' else int(second)
  except ValueError:
    return jsonify({'result': 'Invalid', 'error': "A number has to be provided"}), 400
  result = first - second
  return jsonify({'result': str(result)}), 200

@app.post("/api/add")
def add_numbers_handler():
  data = request.form
  return add_numbers(data)

@app.post("/api/subtract")
def subtract_numbers_handler():
  data = request.form
  return subtract_numbers(data)
  

if __name__ == "__main__":
  app.run()