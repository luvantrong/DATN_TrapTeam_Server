const express = require("express");
const accountModel = require("./AccountModel");

// Lấy danh sách tài khoản
const getAllAccounts = async (page, size) => {
  try {
    return await accountModel.find();
  } catch (error) {
    console.log("Get all accounts servive ", error);
    throw error;
  }
};
// Lưu thông tin tài khoản vào database khi đăng nhập lần đầu
const saveAccount = async (email, phone_number, avatar, created_at, name) => {
  try {
    const newAccount = {
      email,
      phone_number,
      avatar,
      created_at,
      name,
    };

    const account = new accountModel(newAccount);
    await account.save();
    return accountModel.findById(account._id);
  } catch (error) {
    console.log("Save account servive failed: ", error);
    return false;
  }
};

// lấy thông tin tài khoản theo email
const getAccountByEmail = async (email) => {
  try {
    return await accountModel.findOne({ email: email });
  } catch (error) {
    console.log("Lấy thông tin tài khoản theo email service: ", error);
    return null;
  }
};

// api chỉnh sửa thông tin cá nhân
const updateAccount = async (id, name, phone_number, avatar) => {
  try {
    const account = await accountModel.findById(id);
    if (account) {
      account.name = name ? name : account.name;
      account.phone_number = phone_number ? phone_number : account.phone_number;
      account.avatar = avatar ? avatar : account.avatar;
      await account.save();
      return accountModel.findById(account._id);
    }
    return false;
  } catch (error) {
    console.log("Cập nhật thông tin tài khoản service error: ", error);
    return false;
  }
};

// lấy thông tin tài khoản theo id
const getAccountById = async (id) => {
  try {
    return await accountModel.findById(id);
  } catch (error) {
    console.log("Lấy thông tin tài khoản theo id service: ", error);
    return null;
  }
};

module.exports = {
  getAllAccounts,
  saveAccount,
  getAccountByEmail,
  updateAccount,
  getAccountById,
};
