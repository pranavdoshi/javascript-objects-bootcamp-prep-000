var playlist = {
  pranav : "In the end",
  Bruno : "Breakup",
  Arijit : "testing"
};

function updatePlaylist(playlist,artistName,title)
{
  return Object.assign({},playlist,{[artistName]:value});
}

function removeFromPlaylist(playlist,artistName)
{
  return delete playlist.artistName;
}