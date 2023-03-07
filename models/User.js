const { Schema, model } = require('mongoose');

// create the User schema with references to thoughts and friends
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator(validEmail) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(
            validEmail
          );
        },
        message: 'Please fill a valid email address',
      },
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref:'thought'
      },
    ],
    friends: [{
      type: Schema.Types.ObjectId,
      ref:'User'
    }],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// create a friendCount virtual that retrieves the length of the user's friends in an array on query
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


// initialize our User model
const User = model('user', userSchema)

module.exports = User;