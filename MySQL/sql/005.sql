SELECT * FROM chat.Users WHERE (SELECT COUNT(*) FROM chat.Messages WHERE user_id = Users.id) >= 3;