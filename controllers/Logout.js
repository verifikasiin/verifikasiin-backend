const { User } = require("../models/UserModel");

const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await User.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userNik = user[0].nik;
  await User.update(
    { refresh_token: null },
    {
      where: {
        nik: userNik,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

module.exports = { Logout };
