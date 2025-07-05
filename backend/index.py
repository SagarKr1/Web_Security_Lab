from flask import Flask,render_template,request

app = Flask(__name__,template_folder='templates')

@app.route('/',methods=["GET"])
def hello():
    return {
        "status":True,
        "body":"Hello from backend"
    }

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=9000, debug=True)