const mongooseInstance = require('./mongoUtil.js');

const userSchema = mongooseInstance.Schema(
  {
    username: { type: String, required: true },
    // id: { type: Number, required: true },
  },
  { timestamps: true }
);

const UserModel = mongooseInstance.model('user', userSchema);

module.exports = UserModel;
