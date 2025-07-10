function populateSkills(skills) {
  const skillsList = document.getElementById('skills-list');
  if (skillsList) {
    skillsList.innerHTML = ''; 
    skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  }
}