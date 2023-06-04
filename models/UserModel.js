const {Sequelize} = require('sequelize');
const {sequelize} = require('../config/db')

const { DataTypes } = Sequelize;

const User = sequelize.define("User", {
  nik: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  refresh_token: {
    type: DataTypes.TEXT,
  },
  nama: {
    type: DataTypes.STRING,
  },
  tempat_tanggal_lahir: {
    type: DataTypes.STRING,
  },
  jenis_kelamin: {
    type: DataTypes.STRING,
  },
  golongan_darah: {
    type: DataTypes.STRING,
  },
  alamat: {
    type: DataTypes.STRING,
  },
  rtRw: {
    type: DataTypes.STRING,
  },
  kelurahan: {
    type: DataTypes.STRING,
  },
  kecamatan: {
    type: DataTypes.STRING,
  },
  agama: {
    type: DataTypes.STRING,
  },
  status_perkawinan: {
    type: DataTypes.STRING,
  },
  pekerjaan: {
    type: DataTypes.STRING,
  },
  kewarganegaraan: {
    type: DataTypes.STRING,
  },
  berlaku_hingga: {
    type: DataTypes.STRING,
  },
  foto_ktp: {
    type: DataTypes.STRING,
  },
  wajah_verified: {
    type: DataTypes.BOOLEAN,
  },
});

async function makeSchema() {
  try {
      await User.sync().then(
        console.log('User Schema has been made')
      )
  } catch (error) {
      console.log(error)
  }
}

module.exports = {
  makeSchema
}
