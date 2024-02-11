from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("D:\Project\ChatBot\UI\.venv\index.html")



if __name__ == "__main__":
    app.run(debug=True)