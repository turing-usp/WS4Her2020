import pandas as pd
from glob import glob

df = pd.DataFrame()
for g_json in glob("frases_jsons/*.json"):
    frases = list(pd.read_json(g_json)['phrases'].values)
    intermediario = pd.DataFrame(pd.DataFrame(frases))
    df = df.append(intermediario)

df['author'] = df['author'].replace("(Clarice Lispector)", "Clarice Lispector")
df['author'] = df['author'].replace("clarice lispector", "Clarice Lispector")

df.to_csv("frases.csv")