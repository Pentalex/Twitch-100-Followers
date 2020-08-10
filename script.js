// Create a request variable and assign a new XMLHttpRequest object to it.
//https://api.twitch.tv/kraken/channels/95304188/follows?client_id=umgt9kmgzva3k1qkdgbbjd8gp1ujta&limit=100&direction=asc&api_version=5


    
function findID(name) {
    return new Promise((resolve, reject) => {
      fetch('https://api.twitch.tv/kraken/users?login=' + name, {
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': 'umgt9kmgzva3k1qkdgbbjd8gp1ujta'
        }
      })
      .then(res => res.json())
      .then(json => resolve(json))
    }
    )}



function findFirstFollowers() {
    
    
    var d2 = document.getElementById('root')
    var d4 = document.getElementById('username')
    d2.insertAdjacentHTML('afterend', '<table class="table"> <thead class="thead-dark"><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Follow date</th></tr></thead><tbody id="0"></tbody></table>')
    
    



    var d1 = document.getElementById('0');

    let id;

    findID(document.getElementById("username").value)
    .then(user_id => {
    id = user_id;
    let userid = id.users[0]._id
    fetch('https://api.twitch.tv/kraken/channels/' + userid + '/follows?client_id=umgt9kmgzva3k1qkdgbbjd8gp1ujta&limit=100&direction=asc&api_version=5')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for(i in data.follows)
        
            if(i === '0'){
                var trunc = data.follows[i].created_at.substr(0, 10);
                p = parseInt(i) + 1
                console.log(p)
                d1.insertAdjacentHTML('afterbegin', '<tr id="' + p + '"> <th scope="row">' + p + '</th><td>' + data.follows[i].user.display_name + '</td><td>' + trunc + '</td>')
            }
            else{
                var trunc = data.follows[i].created_at.substr(0, 10);
                p = parseInt(i) + 1
                d1 = document.getElementById(i)
                d1.insertAdjacentHTML('afterend', '<tr id="' + p + '"> <th scope="row">' + p + '</th><td>' + data.follows[i].user.display_name + '</td><td>' + trunc + '</td>')
            }
            console.log("This user has been following since " + data.follows[i].created_at + " and his username is " + data.follows[i].user.display_name)      
    })




    d4.remove();
    d2.remove();
    var d3 = document.getElementById('delete')
    d3.remove();
    var d3 = document.getElementById('delete')
    d3.remove();
    });   

}
