const accountService = require("./AccountService");

const getAllAccounts = async (page, size) => {
  try {
    return await accountService.getAllAccounts(page, size);
  } catch (error) {
    console.log("Get all accounts controller ", error);
    throw error;
  }
};
// lưu thông tin tài khoản vào database khi đăng nhập lần đầu

const saveAccount = async (email, phone_number, avatar, created_at, name) => {
  try {
    const savedAccount = await accountService.saveAccount(
      email,
      phone_number,
      avatar,
      created_at,
      name
    );

    if (savedAccount) {
      return savedAccount;
    }

    return null;
  } catch (error) {
    console.log("Save account controller failed: ", error);
    return false;
  }
};

// Lấy thông tin tài khoản theo email
const getAccountByEmail = async (email) => {
  try {
    const account = await accountService.getAccountByEmail(email);
    if (account) {
      return account;
    }
    return null;
  } catch (error) {
    console.log("Lấy thông tin tài khoản theo email controller: ", error);
    return false;
  }
};

// api chỉnh sửa thông tin cá nhân
const updateAccount = async (id, name, phone_number, avatar) => {
  try {
    const account = await accountService.updateAccount(
      id,
      name,
      phone_number,
      avatar
    );
    if (account) {
      return account;
    }
    return null;
  } catch (error) {
    console.log("Cập nhật thông tin tài khoản controller error: ", error);
    return false;
  }
};
// lấy thông tin tài khoản theo id
const getAccountById = async (id) => {
  try {
    const account = await accountService.getAccountById(id);
    if (account) {
      return account;
    }
    return null;
  } catch (error) {
    console.log("Lấy thông tin tài khoản theo id controller: ", error);
    return false;
  }
};

module.exports = {
  getAllAccounts,
  saveAccount,
  getAccountByEmail,
  updateAccount,
  getAccountById,
};
