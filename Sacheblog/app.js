const database = {};
const posts = [];

function generateVSID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

document.getElementById('signupForm').onsubmit = function(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const vsid = generateVSID();

  database[email] = { name, email, password, vsid };
  alert('Signup successful!');
  e.target.reset();
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('signinForm').classList.remove('hidden');
};

document.getElementById('signinForm').onsubmit = function(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const user = database[email];
  if (user && user.password === password) {
    showWelcome(user.name);
  } else {
    alert('Invalid credentials');
  }
};

function showWelcome(name) {
  document.getElementById('signinForm').classList.add('hidden');
  const welcome = document.getElementById('welcomeMessage');
  welcome.innerHTML = `<h1 style="text-align:center;font-size:3rem;">Welcome back, ${name}</h1>`;
  welcome.classList.remove('hidden');
  setTimeout(() => {
    welcome.classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
  }, 2000);
}

function showPostForm() {
  document.getElementById('postForm').classList.remove('hidden');
}

function submitPost(e) {
  e.preventDefault();
  const title = e.target.title.value;
  const content = e.target.content.value;
  const tags = e.target.tags.value.split(',').map(tag => tag.trim());

  posts.push({ title, content, tags, author: 'Volt', timestamp: new Date() });
  renderPosts();
  e.target.reset();
  document.getElementById('postForm').classList.add('hidden');
}

function renderPosts() {
  const postList = document.getElementById('postList');
  postList.innerHTML = posts.map(post => `
    <div class="post">
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <small>Tags: ${post.tags.join(', ')}</small>
    </div>
  `).join('');
}
