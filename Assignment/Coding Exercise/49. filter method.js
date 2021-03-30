function validUserNames (usernames) {
  return usernames.filter(username => username.length < 10);
}