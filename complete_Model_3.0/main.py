from tqdm import tqdm
import spacy
from spacy.tokens import DocBin
import TRAIN_DATA2
nlp = spacy.blank("en")
db = DocBin()

TRAIN_DATA2 = TRAIN_DATA2.TRAIN_DATA

for text, annotations in tqdm(TRAIN_DATA2):
    doc = nlp.make_doc(text)
    entities = []

    for start, end, label in annotations["entities"]:
        span = doc.char_span(start, end, label=label, alignment_mode="contract")
        if span is None:
            print("Skipping entity, check indices")
            print(doc)
        else:
            entities.append(span)

    doc.ents = entities
    db.add(doc)

db.to_disk("./train2.spacy")

