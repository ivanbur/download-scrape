from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
@app.route("/index")
def index():
  return render_template("test.html")

if __name__ == "__main__":
  app.run()
