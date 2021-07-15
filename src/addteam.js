import { ref } from "vue";

//Initialize team
const state = ref({ members: [] });

const addTeamMember = (member) => state.value.members.push(member);

const useTeamMembers = () => state.value.members;

const deleteTeamMember = (id) => {
  state.value.members = state.value.members.filter(
    (member) => member.id !== id
  );
};

const clearTeam = () => {
  state.value.members = [];
};

export { addTeamMember, useTeamMembers, deleteTeamMember, clearTeam };
