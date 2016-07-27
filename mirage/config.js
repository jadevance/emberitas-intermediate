//mirage/config.js

export default function() {
  //index - get all profile records
  this.get('/profiles');

  //create - make a new profile record
  this.post('/profiles');

  //show - find a specific profile record
  this.get('/profiles/:id');

  //update - make changes to an existing profile record
  this.patch('/profiles/:id');

  //destroy - nix a profile record you don't want anymore
  this.del('/profiles/:id');
}

