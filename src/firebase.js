import firebase from "firebase";
import { ref, onUnmounted } from "vue";

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

// Create / Get / Update / Delete / User
export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};

//Create / Get / Update / Delete Project
const projectsCollection = db.collection("projects");
export const createProject = (project) => {
  return projectsCollection.add(project);
};

export const getProject = async (id) => {
  const project = await projectsCollection.doc(id).get();
  return project.exists ? project.data() : null;
};

export const updateProject = (id, project) => {
  return projectsCollection.doc(id).update(project);
};

export const deleteProject = (id) => {
  return projectsCollection.doc(id).delete();
};

export const useLoadProjects = () => {
  const projects = ref([]);
  const close = projectsCollection.onSnapshot((snapshot) => {
    projects.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return projects;
};
