from flask import Flask, render_template, redirect
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

# change to name of your database; add path if necessary
db_name = 'world_happiness_index'

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
    app.run(debug=True)