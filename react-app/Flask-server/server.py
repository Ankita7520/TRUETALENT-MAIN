from flask import Flask
from mysql.connector import connect
from flask_mysqldb import MySQL


app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Ankita@123'
app.config['MYSQL_DB'] = 'ankitadb1'

mysql = MySQL(app)
@app.route("/")
def members():
    cur = mysql.Connection.Cursor()
    cur.Execute("select * from employee1")
    fetchdata = cur.fetchall()
    cur.close()
    return(fetchdata)

if __name__ == "__main__":
    app.run(debug=True)