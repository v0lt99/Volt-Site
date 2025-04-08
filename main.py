from flask import Flask

app = Flask(__Volt-Site__)

@app.route("/")
def home():
    return "<h1>Hello, this is Python sending text to the web!</h1>"

if __name__ == "__main__":
    app.run(debug=True)
print("launched successfuly!")
