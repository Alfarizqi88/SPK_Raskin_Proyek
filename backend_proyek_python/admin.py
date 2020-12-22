from flask import Flask, jsonify, request, json
from flask_mysqldb import MySQL
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import (create_access_token)

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'proyek_spk'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
app.config['JWT_SECRET_KEY'] = 'secret'

mysql = MySQL(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)


# READ
@app.route('/admin/profile', methods=['GET'])
def get_all_admin():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM login")
    rv = cur.fetchall()
    return jsonify(rv)

@app.route('/admin/register', methods=['POST'])
def register():
    cur = mysql.connection.cursor()
    # id_admin = request.get_json()['id_admin']
    # nama_admin = request.get_json()['nama_admin']
    username = request.get_json()['username']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    # created = datetime.utcnow()

    cur.execute("INSERT INTO login (id_login,username,password) " 
                " SELECT MAX(id_login)+1, "
                "'" + str(username) + "', "
                "'" + str(password) + "' "
                 + "FROM login")
    mysql.connection.commit()

    result = {
        # 'id_admin': id_admin,
        'username': username,
        'password': password
    }

    return jsonify({'result': result})


@app.route('/admin/login', methods=['POST'])
def login():
    cur = mysql.connection.cursor()
    username = request.get_json()['username']
    password = request.get_json()['password']
    result = ""

    cur.execute("SELECT * FROM login where username = '" + str(username) + "'")
    rv = cur.fetchone()

    if bcrypt.check_password_hash(rv['password'], password):
        access_token = create_access_token(
            identity={'username': rv['username']})
        # result = access_token
        result = jsonify({"result": access_token})
        # result = jsonify({"result": "SUKSES"})
    else:
        result = jsonify({"error": "Invalid username and password"})

    return result


if __name__ == '__main__':
    app.run(debug=True)