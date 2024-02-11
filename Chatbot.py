# Load data preprocessing libs
import pandas as pd
import numpy as np

# Load vectorizer and similarity measure
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
# Read data and drop examples that has no answer
df = pd.read_csv("aws_faq1.csv")
df.dropna(inplace=True)
vectorizer = TfidfVectorizer()
vectorizer.fit(np.concatenate((df.Question, df.Answer)))
Question_vectors = vectorizer.transform(df.Question)
print("You can start chatting with me now.")
while True:
    # Read user input
    input_question = input()

    # Locate the closest question
    input_question_vector = vectorizer.transform([input_question])

    # Compute similarities
    similarities = cosine_similarity(input_question_vector, Question_vectors)

    # Find the closest question
    closest = np.argmax(similarities, axis=1)

    # Print the correct answer
    print("BOT: " + df.Answer.iloc[closest].values[0])