import pandas as pd
import string
import spacy

test_data = pd.read_csv('bgs.3class.geo-training-data.txt', sep=None, engine='python', header=None)

test_data.columns = ['Word', 'Type']
print(test_data.info())

cat_data = test_data[test_data['Type'].map(len) > 1]
print(cat_data.info())


"""
nlp = spacy.load("en_core_web_sm")
doc = open('bgs.3class.geo-training-data.txt', "r")
doc = doc.read()
nlp_td = nlp(doc)
print(nlp_td[0])
"""
