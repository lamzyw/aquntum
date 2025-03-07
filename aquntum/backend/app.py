from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Главная страница
@app.route("/")
def home():
    return render_template("index.html")

# Пример API для регистрации
@app.route("/register", methods=["POST"])
def register():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    # Здесь будет логика регистрации
    return jsonify({"message": "Регистрация успешна!"})

# Пример API для входа
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    # Здесь будет логика входа
    return jsonify({"message": "Вход выполнен!"})

if __name__ == "__main__":
    app.run(debug=True)