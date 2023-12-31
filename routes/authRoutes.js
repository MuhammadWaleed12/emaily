const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
  app.get('/auth/currentUser', (req, res) => {
    res.send(req.user);
  });
  app.get(
    '/auth/github',
    passport.authenticate('github', {
      scope: ['profile,email'],
    })
  );
  app.get('/auth/github/callback', passport.authenticate('github'));
};
