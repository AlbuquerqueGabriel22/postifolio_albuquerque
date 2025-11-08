from flask import Flask, reder_templates

app = Flask(__name__)

@app.route('/')
def portifolio():
    return reder_templates('portifolio.html')