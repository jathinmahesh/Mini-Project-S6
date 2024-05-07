from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import spacy

app = Flask(__name__)
CORS(app)
model_path = "en_core_web_sm"  # Adjust the path accordingly
nlp = spacy.load(model_path)

# Define skills to prioritize

# Extract skills from the job description
def extract_skills(text,skills_to_prioritize):
    skills = set()
    doc = nlp(text.lower())
    for ent in doc.ents:
        if ent.text in skills_to_prioritize:
            skills.add(ent.text)

    text_lower = text.lower()
    for skill in skills_to_prioritize:
        # Check if the skill appears in the job description
        if skill.lower() in text_lower:
            skills.add(skill)
    return skills

# Route to serve the frontend
@app.route('/')
def index():
    return render_template('index1.html')

# Route to receive job description and skills to prioritize and return the sorted list
@app.route('/api/sort_skills', methods=['POST'])
def sort_skills():
    data = request.json
    job_description = data.get('job_description', '')
    skills_to_prioritize = set(data.get('skills_to_prioritize', []))
    print("prior_skills:", skills_to_prioritize)
    # Extract skills from the job description
    job_skills = extract_skills(job_description,skills_to_prioritize)
    print("job_skills:", job_skills)
    # Rank skills based on relevance
    ranked_skills = [(skill, skill in job_skills) for skill in skills_to_prioritize]
    sorted_skills = sorted(ranked_skills, key=lambda x: (not x[1], x[0]))

    return jsonify({"sorted_skills": [skill for skill, _ in sorted_skills]})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
