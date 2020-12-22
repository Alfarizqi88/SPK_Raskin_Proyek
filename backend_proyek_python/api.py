from flask import Flask, request, jsonify
from flask_restx import Api, Resource, fields
from flask_mysqldb import MySQL
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    create_refresh_token,
)
import datetime


app = Flask(__name__)
mysql = MySQL()
jwt = JWTManager()


# ganti sesuai data yang cocok
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ""
app.config["MYSQL_DB"] = "proyek_spk"
app.config["MYSQL_HOST"] = "localhost"
app.config["SECRET_KEY"] = "ldkfjosier36+41+6e4r343544664"
app.config["JWT_SECRET_KEY"] = "364746^^&@%$&@)!+525"
app.config.setdefault("JWT_TOKEN_LOCATION", ("headers",))
# Options for JWTs when the TOKEN_LOCATION is headers
app.config.setdefault("JWT_HEADER_NAME", "Authorization")
app.config.setdefault("JWT_HEADER_TYPE", "Bearer")

mysql.init_app(app)
jwt.init_app(app)
# conn = mysql.connect()
# cursor = conn.cursor()
api = Api(app, version="1.0", description="Api untuk auth")

ns = api.namespace("auth", description="AUTH operation")
login_data = api.model(
    "Login",
    {
        "username": fields.String(required=True),
        "password": fields.String(required=True),
    },
)


@ns.route("/login")
class LoginRoute(Resource):
    @ns.expect(login_data)
    def post(self):
        cur = mysql.connect.cursor()
        data_login = request.json
        cur.execute(
            "SELECT * FROM login WHERE username = '"
            + str(data_login["username"])
            + "'"
        )
        data = cur.fetchone()
        # print(data['username'])
        if data is not None and data[2] == data_login["password"]:
            jwt_token_access = create_refresh_token(
                identity=data_login["username"]
            )
            jwt_token_refresh = create_access_token(
                identity=data_login["username"]
            )
            message_object = {
                "status": "berhasil",
                "access_token": jwt_token_access,
                "refresh_token": jwt_token_refresh,
            }
            return jsonify(message_object)
        else:
            return {"status": "gagal"}

    # @ns.marshal_with(login_data)
    # def get(self):
    #     #ganti sesuai nama table user
    #     cur = mysql.connection.cursor()
    #     cur.execute("SELECT * FROM login")
    #     data = cur.fetchone()
    #     print(data)


@ns.route("/logout")
class LogoutRoute(Resource):
    def post(self):
        return {"status": "Berhasil Logout"}


if __name__ == "__main__":
    app.run(debug=True)
