import re

raw_entities = []
with open("bgs-geo-entity-list.txt") as keys:
    for line in keys:
        insnc = line.split(",")
        raw_entities.append(insnc[0])

DEV = []
itr = 0
files = ["bgs-geo-training-data.txt", "bgs-testing-data.txt", "resultTextFile.txt"]
for file in files:
    with open("bgs-geo-training-data.txt") as train_file:
        for line in train_file:
            if line[0] == '"':  # rstrip
                line = line[1:-2]
            for entity in raw_entities:
                match = re.search(entity, line)
                if match:
                    indices = {"entities": []}
                    indices["entities"].append((match.start(), match.end(), "CHRONOSTRAT"))
                    DEV.append((line.rstrip('\n'), indices))
                    itr = itr + 1


DEV_DATA = open("DEV_DATA2.txt", "wt")

data = str(DEV)

DEV_DATA.write(data)

print("DEV_DATA =", DEV)
print(itr)