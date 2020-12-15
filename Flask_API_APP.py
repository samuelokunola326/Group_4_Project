#importing dependencies
import pandas as pd
import sqlalchemy

# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import 

from sqlalchemy import create_engine

# import Flask
from flask import Flask, jsonify
######################################################################
# Database setup
######################################################################
engine = create_engine("sqlite:///Resources/hawaii.sqlite")

#######################################################################
# Flask setup
# ##################################################################### 

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)