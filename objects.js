var playlist = {
  Kanye: "Gold Digger"
}
function updatePlaylist(playlist,artistName,title)
{
  return Object.assign({},playlist,{[artistName]:title});
}

function removeFromPlaylist(playlist,artistName)
{
   return delete playlist.artistName;
   
}