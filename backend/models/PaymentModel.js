import mongoose from "mongoose";

const cuspayment = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
      validate: {
        validator: (value) => {
          return /^[A-Za-z ]{2,40}$/.test(value);  // ✅ Fixed regex
        },
        message: 'First name must be alphabets only and between 2 and 30 characters long',
      },
    },
    email: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
      validate: {
        validator: (value) => {
          return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value);
        },
        message: 'Invalid email address',
      },
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    selectedPackage: {
      type: String,
      required: true,
    },
    persons: {
      type: Number,
      required: true,
    },
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const payment = mongoose.model("payment", cuspayment);
