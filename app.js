const teamGrid = document.getElementById("team-grid");

const addTeamBtn = document.getElementById("add-team-btn");

const teamNameInput = document.getElementById("team-name");
const teamLeaderInput = document.getElementById("team-leader");
const teamMembersInput = document.getElementById("team-members");
const teamStatusInput = document.getElementById("team-status");

// 车队数据
const teams = [];

// 渲染页面
function renderTeams() {
  teamGrid.innerHTML = "";

  teams.forEach((team) => {
    const card = document.createElement("div");

    card.className = "team-card";

    card.innerHTML = `
      <h3>${team.name}</h3>
      <p>队长：${team.leader}</p>
      <p>成员：${team.members}</p>
      <span class="status">${team.status}</span>
    `;

    teamGrid.appendChild(card);
  });
}

// 点击新增按钮
addTeamBtn.addEventListener("click", () => {
  const newTeam = {
    name: teamNameInput.value,
    leader: teamLeaderInput.value,
    members: teamMembersInput.value,
    status: teamStatusInput.value,
  };

  teams.push(newTeam);

  renderTeams();

  // 清空输入框
  teamNameInput.value = "";
  teamLeaderInput.value = "";
  teamMembersInput.value = "";
});