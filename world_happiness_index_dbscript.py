#!/usr/bin/env python
# coding: utf-8

# In[43]:


#psychopg  for query better performance
import numpy as np
import pandas as pd
import psycopg2
# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func


# In[44]:


conn = psycopg2.connect(database="world_happiness_index", user = "postgres", password = "Getbig2015@", host = "127.0.0.1", port = "5432")


# In[49]:


# cur = conn.cursor()
# cur.execute('''DROP TABLE year_2019;''')


# conn.commit()
# cur.close()


# In[50]:


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


# In[51]:


cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS year_2016 (
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


# In[52]:


cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS year_2017 (
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


# In[53]:


cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS year_2018 (
	happiness_rank INT,
	country VARCHAR(255),
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	generosity FLOAT,
	corruption FLOAT
	

);''')


conn.commit()
cur.close()


# In[54]:


cur = conn.cursor()
cur.execute('''CREATE TABLE IF NOT EXISTS year_2019 (
	happiness_rank INT,
	country VARCHAR(255),
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	generosity FLOAT,
	corruption FLOAT
	

);''')


conn.commit()
cur.close()


# In[59]:



file_names = ["data/2015.csv","data/2016.csv","data/2017.csv","data/2018.csv","data/2019.csv"]
table_names = ["year_2015","year_2016","year_2017","year_2018","year_2019"]


for file_name, table_name in zip(file_names,table_names ):
    print(file_name, table_name)


# In[61]:



file_names = ["data/2015.csv","data/2016.csv","data/2017.csv","data/2018.csv","data/2019.csv"]
table_names = ["year_2015","year_2016","year_2017","year_2018","year_2019"]


for file_name, table_name in zip(file_names,table_names ):
    cur = conn.cursor()
    with open(file_name, 'r') as f:
        # Notice that we don't need the `csv` module.
        next(f) # Skip the header row.
        cur.copy_from(f, table_name, sep=',')
    conn.commit()


# In[63]:


cur = conn.cursor()
cur.execute('''SELECT * FROM year_2017;''')

rows = cur.fetchall()

for row in rows:
    print(row)

    
cur.close()


# In[ ]:


conn.close()

