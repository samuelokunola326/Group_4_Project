import os
import datetime as dt
import pandas as pd
from flask import Flask, render_template, redirect
import psycopg2
import numpy as np
import json
from flask import Flask, jsonify  


app = Flask(__name__)

# change to name of your database; add path if necessary
db_name = 'world_happiness_index'

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
    app.run(debug=True)