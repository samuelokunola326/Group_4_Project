<<<<<<< HEAD
import os
import datetime as dt
import pandas as pd
from flask import Flask, render_template, redirect
import psycopg2
import numpy as np
import json
from flask import Flask, jsonify  
=======
from flask import Flask, render_template, redirect
from flask_sqlalchemy import SQLAlchemy
>>>>>>> main


app = Flask(__name__)

# change to name of your database; add path if necessary
db_name = 'world_happiness_index'

<<<<<<< HEAD
conn = psycopg2.connect(database="world_happiness_index", user = "postgres", password = "Puca!0125", host = "127.0.0.1", port = "5432")

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/year2015<br/>"
        f"/api/v1.0/year2016<br/>"
        f"/api/v1.0/year2017<br/>"
        f"/api/v1.0/year2018<br/>"
        f"/api/v1.0/year2019<br/>"
    )

@app.route("/api/v1.0/year2015")
def year2015():

    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2015;''')

    results = cur.fetchall()
    
    year2015 = list(np.ravel(results))

    return jsonify(year2015)

@app.route("/api/v1.0/year2016")
def year2016():

    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2016;''')

    results = cur.fetchall()
    
    year2016 = list(np.ravel(results))

    return jsonify(year2016)

@app.route("/api/v1.0/year2017")
def year2017():

    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2017;''')

    results = cur.fetchall()
    
    year2017 = list(np.ravel(results))

    return jsonify(year2017)

@app.route("/api/v1.0/year2018")
def year2018():

    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2018;''')

    results = cur.fetchall()
    
    year2018 = list(np.ravel(results))

    return jsonify(year2018)

@app.route("/api/v1.0/year2019")
def year2019():

    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2019;''')

    results = cur.fetchall()
    
    year2019 = list(np.ravel(results))

    return jsonify(year2019)


if __name__ == '__main__':
=======
conn = psycopg2.connect(database="world_happiness_index", user = "postgres", password = "Getbig2015@", host = "127.0.0.1", port = "5432")

# this variable, db, will be used for all SQLAlchemy commands
def create_tables():
    cur = conn.cursor()
    cur.execute('''CREATE TABLE IF NOT EXISTS year_2015 (
	country VARCHAR(255),
	happiness_rank INT,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	corruption FLOAT,
	generosity FLOAT

);''')

    conn.commit()
    cur.close()

@app.route('/')
def testdb():
    l = []
    cur = conn.cursor()
    cur.execute('''SELECT * FROM year_2017;''')

    rows = cur.fetchall()

    for row in rows:
        l.append(row)

    cur.close()
    df = pd.DataFrame(l, columns =['country', 'happiness_rank', 'happiness_score', 'economy', 'health', 'freedom','corruption', 'generosity']) 
    return render_template("index.html")

if __name__ == '__main__':
    create_tables()
>>>>>>> main
    app.run(debug=True)