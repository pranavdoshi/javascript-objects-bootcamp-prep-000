var playlist = {
  Kanye: "Gold Digger"
}
function updatePlaylist(playlist,artistName,title)
{
  return Object.assign({},playlist,{[artistName]:value});
}

function removeFromPlaylist(playlist,artistName)
{
   delete playlist.artistName;
   return playlist;
}