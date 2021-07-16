import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnrc0V081XiFrqw30ZwKfoavbFsa_LfxY",
  authDomain: "vue3-team-project.firebaseapp.com",
  projectId: "vue3-team-project",
  storageBucket: "vue3-team-project.appspot.com",
  messagingSenderId: "722635305646",
  appId: "1:722635305646:web:41d3e210a858757716b33f",
  measurementId: "G-P0KFQQMEZJ",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

//get user
export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

//fetch user
export const fetchUsers = async () => {
  const users = await usersCollection.get();
  return users.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const projectsCollection = db.collection("projects");

//get project
export const createProject = (project) => {
  return projectsCollection.add(project);
};

//fetch project
export const getProject = async (id) => {
  const project = await projectsCollection.doc(id).get();
  return project.exists ? project.data() : null;
};
