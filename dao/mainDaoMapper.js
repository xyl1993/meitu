var user = {
    insert:'INSERT INTO account(login_id,phone,password,create_time) VALUES(?,?,?,?)',
    update:'update account set name=?, password=? where id=?',
    delete: 'delete from account where id=?',
    queryById: 'select * from account where id=?',
    queryByNameAndPwd:'select id from account where name=? and password=?',
    queryAll: 'select * from account'
};

module.exports = user;